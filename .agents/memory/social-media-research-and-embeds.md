---
name: Social media research + embeds
description: Getting real assets when web search is blocked on social platforms, and embedding YouTube/Twitch/TikTok in a React SPA.
---

# Researching creators when social platforms block fetch

**Why:** `webSearch`/`webFetch` return 403 on Instagram, TikTok, YouTube, Facebook (and many "cinematic" inspiration sites). You cannot read social pages directly.

**How to apply:**
- Visual reference of a blocked site: use the `Screenshot` tool with `source.type: "externalUrl"` — it works on those sites.
- YouTube metadata: `https://www.youtube.com/oembed?url=<watch-url>&format=json` returns real `title` + `author_name` (channel). Use it to VERIFY a video actually belongs to the person before using it (search often returns a same-named different artist).
- YouTube real stills (downloadable): `https://img.youtube.com/vi/<VIDEO_ID>/maxresdefault.jpg` (fallback `hqdefault.jpg`, plus `mqdefault`/`sddefault`/`hq720`). These are legit real frames of the creator's own video.
- Twitch avatar URL: `https://decapi.me/twitch/avatar/<channel>` returns the CDN image URL.
- `imageSearch({query,count})` works but is heavily polluted for small or ambiguous names (e.g. "stitch" → Disney/cross-stitch). Expect to fall back to YouTube stills + avatar for real photos of small creators.
- Do all fetch/download inside a `"use impure"` function; write into `attached_assets/...` then reference via the `@assets` Vite alias.

# Embedding YouTube / Twitch / TikTok in a React (Vite SPA) page

**Why:** These embeds have runtime requirements that break silently if handled naively.

**How to apply:**
- YouTube: plain iframe, no gotchas. `https://www.youtube.com/embed/<id>?autoplay=1&rel=0&modestbranding=1&playsinline=1`. Click-to-play pattern: show the real thumbnail as a poster, swap in the iframe on click.
- Twitch live player: `https://player.twitch.tv/?channel=<ch>&parent=${host}` and clips: `https://clips.twitch.tv/embed?clip=<slug>&parent=${host}`. `parent` MUST equal the embedding page hostname — compute it at runtime: `const [host,setHost]=useState(""); useEffect(()=>setHost(window.location.hostname),[])` and render the iframe only once `host` is set. Do NOT hardcode a domain. In local screenshots the parent is `127.0.0.1` (Twitch rejects it → black player) and an offline channel 404s its playlist — both resolve on the real preview/prod domain, so don't chase those local errors.
- TikTok creator feed: render `<blockquote class="tiktok-embed" data-unique-id="<handle>" data-embed-type="creator" cite="https://www.tiktok.com/@<handle>">` then inject `https://www.tiktok.com/embed.js` once (guard with `document.querySelector('script[src=...]')`, call `window.tiktokEmbed?.lib?.render?.()` on `script.onload`). TikTok's `embed_lib` throws a harmless internal `unhandledrejection` ("t.length") when render runs during an HMR re-render — it does NOT occur on a clean production load; ignore it.
