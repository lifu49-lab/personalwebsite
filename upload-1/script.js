/* =====================================================================
   ✏️  EDIT YOUR CONTENT HERE — you don't need to touch anything below.
   ===================================================================== */

/* Main showreel at the top of the Animation section.
   type: "youtube" | "vimeo" | "file"
   - youtube: id is the bit after "v=" in the URL (youtube.com/watch?v=THIS_PART)
   - vimeo:   id is the number in the URL (vimeo.com/123456789)
   - file:    src is a path to an .mp4 in your repo, e.g. "videos/reel.mp4" (keep under ~25 MB) */
const SHOWREEL = { type: "vimeo", id: "831430215", title: "Animation directing showreel" };

/* Smaller animation pieces shown as cards under the reel.
   thumb = an image for the card. For type "file", the clip also auto-plays silently on hover. */
const CLIPS = [
  { key: "toon-boom", title: "Toon Boom showreel", desc: "2D animation · Toon Boom", type: "youtube", id: "EcLelPKanws", thumb: "https://i.ytimg.com/vi/EcLelPKanws/hqdefault.jpg" },
  { key: "moho",      title: "MOHO showreel",      desc: "2D animation · MOHO",               type: "youtube", id: "378AeJMGfus", thumb: "https://i.ytimg.com/vi/378AeJMGfus/hqdefault.jpg" },
  { key: "motion-graphics", title: "Motion graphics reel", desc: "Motion graphics",                  type: "vimeo",   id: "830809064",   thumb: "https://vumbnail.com/830809064.jpg" },
];

/* Illustration gallery. Put images in images/work/ and list them here.
   tag = used for the filter buttons (any words you like). */
const ARTWORK = [
  /* Each filter starts with its animated GIFs, then stills grouped by project
     (same order as the Projects section). Add new images next to their project. */

  // ── Style frames · Animated
  { src: "images/work/bbc-thor.gif", title: "BBC Bitesize — Thor (animated)", tag: "Style frames" },
  { src: "images/work/bbc-viking-ship.gif", title: "BBC Bitesize — Viking ship (animated)", tag: "Style frames" },
  { src: "images/work/older-person-first-shot.gif", title: "Skater — animated style frame", tag: "Style frames" },

  // ── Style frames · The Hole
  { src: "images/work/the-hole.jpg", title: "The Hole", tag: "Style frames" },
  { src: "images/work/the-hole-kiss.jpg", title: "The Hole — kiss", tag: "Style frames" },

  // ── Style frames · My Dear Son
  { src: "images/work/my-dear-son-dinner.jpg", title: "My Dear Son — dinner", tag: "Style frames" },
  { src: "images/work/my-dear-son-rose.jpg", title: "My Dear Son — Rose", tag: "Style frames" },
  { src: "images/work/my-dear-son-box.jpg", title: "My Dear Son — the box", tag: "Style frames" },
  { src: "images/work/my-dear-son-bedroom.jpg", title: "My Dear Son — bedroom", tag: "Style frames" },
  { src: "images/work/my-dear-son-going-home.jpg", title: "My Dear Son — going home", tag: "Style frames" },

  // ── Style frames · BBC Bitesize
  { src: "images/work/bbc-tudors.jpg", title: "BBC Teach — Elizabeth I, Mary Tudor & Edward VI", tag: "Style frames" },
  { src: "images/work/bbc-tudor-portraits.jpg", title: "BBC Teach — Tudor portraits", tag: "Style frames" },
  { src: "images/work/bbc-henson-armstrong.jpg", title: "BBC Teach — Matthew Henson & Neil Armstrong", tag: "Style frames" },
  { src: "images/work/bbc-king-conversion.jpg", title: "BBC Bitesize — Christianity comes to Britain", tag: "Style frames" },
  { src: "images/work/bbc-library.jpg", title: "BBC Bitesize — How to be a historian", tag: "Style frames" },
  { src: "images/work/bbc-past-and-present.jpg", title: "BBC Bitesize — past and present", tag: "Style frames" },

  // ── Style frames · Wetland in My Heart
  { src: "images/work/wetland-title.jpg", title: "Wetland in My Heart — title", tag: "Style frames" },
  { src: "images/work/wetland-style-frame.jpg", title: "Wetland in My Heart — style frame", tag: "Style frames" },
  { src: "images/work/wetland-farm-boy.jpg", title: "Farm boy — Wetland in My Heart", tag: "Style frames" },
  { src: "images/work/wetland-little-fish.jpg", title: "Little fish — Wetland in My Heart", tag: "Style frames" },

  // ── Style frames · First Light
  { src: "images/work/first-light-title.jpg", title: "First Light", tag: "Style frames" },

  // ── Style frames · Fishing with Popo
  { src: "images/work/fishing-with-popo-01.jpg", title: "Fishing with Popo — still", tag: "Style frames" },
  { src: "images/work/fishing-with-popo-02.jpg", title: "Fishing with Popo — still", tag: "Style frames" },
  { src: "images/work/fishing-with-popo-03.jpg", title: "Fishing with Popo — still", tag: "Style frames" },

  // ── Style frames · Other work
  { src: "images/work/concept-art-chase.jpg", title: "Concept art — the chase", tag: "Style frames" },

  // ── Characters · Animated
  { src: "images/work/the-hole-pigeon.gif", title: "The Hole — pigeon (animated)", tag: "Characters" },
  { src: "images/work/the-hole-french-kiss.gif", title: "The Hole — the kiss (animated)", tag: "Characters" },
  { src: "images/work/the-hole-jump-water.gif", title: "The Hole — jump into the water (animated)", tag: "Characters" },
  { src: "images/work/my-dear-son-mama.gif", title: "My Dear Son — “Ma!” (animated)", tag: "Characters" },
  { src: "images/work/my-dear-son-cat-tree.gif", title: "My Dear Son — cat in the tree (animated)", tag: "Characters" },
  { src: "images/work/bbc-loki.gif", title: "BBC Bitesize — Loki (animated)", tag: "Characters" },
  { src: "images/work/running-man.gif", title: "Character animation — running", tag: "Characters" },
  { src: "images/work/character-eating.gif", title: "Character animation — eating", tag: "Characters" },

  // ── Characters · My Dear Son
  { src: "images/work/my-dear-son-rose-poses.jpg", title: "My Dear Son — Rose pose sheet", tag: "Characters" },
  { src: "images/work/my-dear-son-rose-and-cats.jpg", title: "My Dear Son — Rose & the cats", tag: "Characters" },
  { src: "images/work/my-dear-son-cat-expressions.jpg", title: "My Dear Son — cat son expressions", tag: "Characters" },
  { src: "images/work/my-dear-son-cat-face-turnaround.jpg", title: "My Dear Son — cat face turnaround", tag: "Characters" },

  // ── Characters · BBC Bitesize
  { src: "images/work/bbc-aneurin-bevan.jpg", title: "BBC Teach — Aneurin Bevan", tag: "Characters" },
  { src: "images/work/bbc-katherine-johnson.jpg", title: "BBC Teach — Katherine Johnson", tag: "Characters" },
  { src: "images/work/bbc-noor-inayat-khan.jpg", title: "BBC Teach — Noor Inayat Khan", tag: "Characters" },
  { src: "images/work/bbc-robert-burns.jpg", title: "BBC Teach — Robert Burns", tag: "Characters" },
  { src: "images/work/bbc-wangari-maathai.jpg", title: "BBC Teach — Wangari Maathai", tag: "Characters" },
  { src: "images/work/bbc-significant-individuals-characters.jpg", title: "BBC Teach — Significant Individuals characters", tag: "Characters" },
  { src: "images/work/bbc-ks2-characters.jpg", title: "BBC Bitesize KS2 — characters", tag: "Characters" },
  { src: "images/work/bbc-columba-aidan-augustine.jpg", title: "BBC Bitesize — Columba, Aidan & Augustine", tag: "Characters" },
  { src: "images/work/bbc-book-authors.jpg", title: "BBC Bitesize — book authors", tag: "Characters" },
  { src: "images/work/bbc-to-kill-a-mockingbird-characters.jpg", title: "BBC Bitesize — To Kill a Mockingbird characters", tag: "Characters" },
  { src: "images/work/bbc-view-from-the-bridge-characters.jpg", title: "BBC Bitesize — A View from the Bridge characters", tag: "Characters" },
  { src: "images/work/bbc-about-a-boy-characters.jpg", title: "BBC Bitesize — About a Boy characters", tag: "Characters" },
  { src: "images/work/bbc-taste-of-honey-characters.jpg", title: "BBC Bitesize — A Taste of Honey characters", tag: "Characters" },
  { src: "images/work/bbc-never-let-me-go-characters.jpg", title: "BBC Bitesize — Never Let Me Go characters", tag: "Characters" },

  // ── Characters · Birds Connect Our World
  { src: "images/work/wmbd-jane.jpg", title: "Jane — World Migratory Bird Day", tag: "Characters" },
  { src: "images/work/wmbd-jane-sketches.jpg", title: "Jane sketches — World Migratory Bird Day", tag: "Characters" },
  { src: "images/work/wetland-spoonbills.jpg", title: "Spoonbills — Birds Connect Our World", tag: "Characters" },

  // ── Characters · Wetland in My Heart
  { src: "images/work/wetland-kids-lineup.jpg", title: "Kids line-up — Wetland in My Heart", tag: "Characters" },
  { src: "images/work/wetland-character-sketches.jpg", title: "Character sketches — Wetland in My Heart", tag: "Characters" },
  { src: "images/work/wetland-fish.jpg", title: "Fish — Wetland in My Heart", tag: "Characters" },

  // ── Characters · Other work
  { src: "images/work/spoonbill-girl.jpg", title: "Spoonbill girl", tag: "Characters" },

  // ── Backgrounds · Animated
  { src: "images/work/the-hole-opening.gif", title: "The Hole — opening background (animated)", tag: "Backgrounds" },
  { src: "images/work/my-dear-son-flowers.gif", title: "My Dear Son — flowers (animated)", tag: "Backgrounds" },
  { src: "images/work/my-dear-son-crowd-collage.gif", title: "My Dear Son — crowd collage (animated)", tag: "Backgrounds" },
  { src: "images/work/first-light-background.gif", title: "First Light — background (animated)", tag: "Backgrounds" },

  // ── Backgrounds · The Hole
  { src: "images/work/the-hole-skatepark.jpg", title: "The Hole — skatepark background", tag: "Backgrounds" },
  { src: "images/work/the-hole-park-night.jpg", title: "The Hole — park at night", tag: "Backgrounds" },
  { src: "images/work/the-hole-waterfall.jpg", title: "The Hole — waterfall background", tag: "Backgrounds" },

  // ── Backgrounds · My Dear Son
  { src: "images/work/my-dear-son-cityscape.jpg", title: "My Dear Son — cityscape", tag: "Backgrounds" },
  { src: "images/work/my-dear-son-city-collage.jpg", title: "My Dear Son — city collage", tag: "Backgrounds" },
  { src: "images/work/my-dear-son-crowd.jpg", title: "My Dear Son — crowd street", tag: "Backgrounds" },

  // ── Backgrounds · BBC Bitesize
  { src: "images/work/bbc-tudor-houses.jpg", title: "BBC Bitesize — Tudor houses", tag: "Backgrounds" },
  { src: "images/work/bbc-bitesize-background.jpg", title: "BBC Bitesize — background", tag: "Backgrounds" },
  { src: "images/work/bbc-buildings.jpg", title: "BBC Bitesize — buildings", tag: "Backgrounds" },
  { src: "images/work/bbc-brooklyn-1950s.jpg", title: "BBC Bitesize — Brooklyn 1950s", tag: "Backgrounds" },

  // ── Backgrounds · Birds Connect Our World
  { src: "images/work/wmbd-background-01.jpg", title: "Birds Connect Our World — wetland background", tag: "Backgrounds" },
  { src: "images/work/wmbd-background-02.jpg", title: "Birds Connect Our World — desert background", tag: "Backgrounds" },

  // ── Backgrounds · Wetland in My Heart
  { src: "images/work/wetland-background.jpg", title: "Wetland in My Heart — background", tag: "Backgrounds" },

  // ── Backgrounds · Sanctuary
  { src: "images/work/sanctuary-kitchen.jpg", title: "Sanctuary — kitchen concepts", tag: "Backgrounds" },
  { src: "images/work/sanctuary-interior.jpg", title: "Sanctuary — interior", tag: "Backgrounds" },
  { src: "images/work/sanctuary-houses.jpg", title: "Sanctuary — house concepts", tag: "Backgrounds" },
  { src: "images/work/sanctuary-landscape.jpg", title: "Sanctuary — landscape", tag: "Backgrounds" },

  // ── Backgrounds · Other work
  { src: "images/work/japanese-room.jpg", title: "Japanese room — background", tag: "Backgrounds" },
  { src: "images/work/swamp.jpg", title: "Swamp — background", tag: "Backgrounds" },
  { src: "images/work/night-mountains.jpg", title: "Night mountains — background", tag: "Backgrounds" },

  // ── Illustration · Fishing with Popo
  { src: "images/work/fishing-with-popo-poster.jpg", title: "Fishing with Popo — poster", tag: "Illustration" },

  // ── Illustration · The Tallest Tree
  { src: "images/work/tallest-tree-hornbill.jpg", title: "The Tallest Tree — helmeted hornbill", tag: "Illustration" },
  { src: "images/work/tallest-tree-pangolin.jpg", title: "The Tallest Tree — Sunda pangolin", tag: "Illustration" },
  { src: "images/work/tallest-tree-forest.jpg", title: "The Tallest Tree — pangolin in the forest", tag: "Illustration" },
  { src: "images/work/tallest-tree-poachers.jpg", title: "The Tallest Tree — the poachers' truck", tag: "Illustration" },
  { src: "images/work/tallest-tree-world-pangolin-day.jpg", title: "World Pangolin Day — poster", tag: "Illustration" },

  // ── Illustration · Etter regn kommer råte
  { src: "images/work/etter-regn-cover.jpg", title: "Etter regn kommer råte — cover", tag: "Illustration" },
  { src: "images/work/etter-regn-angel.jpg", title: "Etter regn kommer råte — the angel", tag: "Illustration" },
  { src: "images/work/etter-regn-christmas.jpg", title: "Etter regn kommer råte — It's Christmas way too often", tag: "Illustration" },
  { src: "images/work/etter-regn-hvem-hadde-trodd.jpg", title: "Etter regn kommer råte — Russian roulette", tag: "Illustration" },
  { src: "images/work/etter-regn-party.jpg", title: "Etter regn kommer råte — the party", tag: "Illustration" },
  { src: "images/work/intens-forskning.jpg", title: "Etter regn kommer råte — book illustration", tag: "Illustration" },

  // ── Illustration · Other work
  { src: "images/work/autumn-london.jpg", title: "Autumn in London", tag: "Illustration" },
  { src: "images/work/childrens-illustration.jpg", title: "Children's illustration", tag: "Illustration" },
];

/* Clients strip on the home page. Logos live in images/clients/ (transparent PNG, 600×300). */
const CLIENTS = [
  { src: "images/clients/bbc-bitesize.png",    name: "BBC Bitesize" },
  { src: "images/clients/rthk.png",            name: "RTHK" },
  { src: "images/clients/alaraby.png",         name: "Alaraby Television" },
  { src: "images/clients/eaafp.png",           name: "EAAFP" },
  { src: "images/clients/hk-wetland-park.png", name: "Hong Kong Wetland Park" },
  { src: "images/clients/greenpeace.png",      name: "Greenpeace" },
  { src: "images/clients/msf.png",             name: "Médecins Sans Frontières" },
  { src: "images/clients/mind.png",            name: "Mind" },
];

/* ===================================================================== */

const $ = (s, el = document) => el.querySelector(s);
const esc = (s = "") => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function embedHTML(v, autoplay = false) {
  const ap = autoplay ? 1 : 0;
  if (v.type === "youtube" && v.id)
    return `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?rel=0&autoplay=${ap}" title="${esc(v.title || "Showreel")}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  if (v.type === "vimeo" && v.id)
    return `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.id)}?autoplay=${ap}" title="${esc(v.title || "Showreel")}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  if (v.type === "file" && v.src)
    return `<video src="${esc(v.src)}" controls playsinline ${autoplay ? "autoplay" : ""}></video>`;
  return null;
}

/* ---- Showreel ---- */
$("#reelMain").innerHTML = embedHTML(SHOWREEL) ||
  `<div style="height:100%;display:grid;place-items:center;color:#FFC93C;font:800 clamp(1.4rem,4vw,2.6rem) var(--font-head);text-align:center;padding:20px">
     ▶ Your showreel goes here<br><small style="font:500 1rem var(--font-body);color:#fff;opacity:.7">Add your YouTube or Vimeo ID in script.js</small></div>`;

/* ---- Clips ---- */
$("#clips").innerHTML = CLIPS.map((c, i) => `
  <button class="clip card reveal" data-i="${i}">
    <div class="clip-thumb" style="background-image:url('${esc(c.thumb)}')">
      ${c.type === "file" && c.src ? `<video src="${esc(c.src)}" muted loop playsinline preload="metadata"></video>` : ""}
      <span class="play">▶</span>
    </div>
    <div class="clip-info"><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></div>
  </button>`).join("");

document.querySelectorAll(".clip").forEach(el => {
  const vid = $("video", el);
  if (vid) {
    el.addEventListener("mouseenter", () => vid.play().catch(() => {}));
    el.addEventListener("mouseleave", () => { vid.pause(); vid.currentTime = 0; });
  }
  el.addEventListener("click", () => openVideo(CLIPS[el.dataset.i]));
});

/* ---- Gallery ---- */
/* Filter buttons, in this order (the first one is shown when the page opens).
   Any other tag you use in ARTWORK is added at the end automatically. */
const TAG_ORDER = ["Style frames", "Characters", "Backgrounds", "Illustration"];
const tags = [...new Set([...TAG_ORDER.filter(t => ARTWORK.some(a => a.tag === t)), ...ARTWORK.map(a => a.tag)])];
$("#filters").innerHTML = tags.map((t, i) => `<button class="filter${i ? "" : " active"}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");
$("#masonry").innerHTML = ARTWORK.map((a, i) => `
  <button class="art card reveal${a.tag === tags[0] ? "" : " hide"}" data-i="${i}" data-tag="${esc(a.tag)}" aria-label="Open ${esc(a.title)}">
    <img src="${esc(a.src)}" alt="${esc(a.title)}" loading="lazy">
    <figcaption>${esc(a.title)}</figcaption>
  </button>`).join("");
$("#masonry").classList.add("justified");
// Rows keep each picture's real shape: once an image loads, tell its tile its width/height ratio.
document.querySelectorAll("#masonry .art img").forEach(img => {
  const setRatio = () => img.naturalWidth && img.parentElement.style.setProperty("--ar", (img.naturalWidth / img.naturalHeight).toFixed(3));
  img.complete ? setRatio() : img.addEventListener("load", setRatio);
});

$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".filter"); if (!b) return;
  document.querySelectorAll(".filter").forEach(f => f.classList.toggle("active", f === b));
  document.querySelectorAll(".art").forEach(a => a.classList.toggle("hide", a.dataset.tag !== b.dataset.tag));
});

/* ---- Clients ---- */
if ($("#clients")) $("#clients").innerHTML = CLIENTS.map(c => `<li><img src="${esc(c.src)}" alt="${esc(c.name)}" title="${esc(c.name)}" loading="lazy"></li>`).join("");

/* ---- Project cards → project.html (Projects, and Illustrated books = kind: "book") ---- */
const projectCard = p => `
    <a class="project-card card reveal" href="project.html?p=${encodeURIComponent(p.slug)}">
      ${p.cover
        ? `<div class="project-cover" style="background-image:url('${esc(p.cover)}');background-position:${esc(p.coverPosition || "center")}"></div>`
        : `<div class="project-cover no-cover"><span>${esc(p.title)}</span></div>`}
      <div class="project-info">
        <h3>${esc(p.title)}</h3>
        ${[p.year, p.role].filter(Boolean).length ? `<p class="project-meta">${esc([p.year, p.role].filter(Boolean).join(" · "))}</p>` : ""}
        ${p.summary ? `<p class="project-summary">${esc(p.summary)}</p>` : ""}
        ${(p.awards || []).length ? `<div class="laurels laurels-small">${p.awards.slice(0, 4).map(a => `<img src="${esc(a.src)}" alt="${esc(a.name)}" title="${esc(a.name)}" loading="lazy">`).join("")}${p.awards.length > 4 ? `<span class="laurels-more">+${p.awards.length - 4}</span>` : ""}</div>` : ""}
        <span class="project-more">${p.kind === "book" ? "View book" : "View project"} →</span>
      </div>
    </a>`;
if (typeof PROJECTS !== "undefined") {
  if ($("#projects")) $("#projects").innerHTML = PROJECTS.filter(p => p.kind !== "book").map(projectCard).join("");
  if ($("#books")) $("#books").innerHTML = PROJECTS.filter(p => p.kind === "book").map(projectCard).join("");
}

/* ---- Lightbox ---- */
const lb = $("#lightbox"), fig = $("figure", lb);
let current = -1;
const visibleArt = () => [...document.querySelectorAll(".art:not(.hide)")].map(el => +el.dataset.i);

function showArt(i) {
  current = i;
  const a = ARTWORK[i];
  fig.innerHTML = `<img src="${esc(a.src)}" alt="${esc(a.title)}"><figcaption>${esc(a.title)}</figcaption>`;
  lb.classList.remove("video"); $(".lb-prev").hidden = $(".lb-next").hidden = false;
  lb.hidden = false; document.body.style.overflow = "hidden";
}
function openVideo(v) {
  // YouTube won't play embeds on a page opened straight from your computer (Error 153),
  // so in that case open the video on YouTube instead. Once the site is live this is skipped.
  if (location.protocol === "file:" && v.type === "youtube" && v.id) {
    window.open("https://www.youtube.com/watch?v=" + encodeURIComponent(v.id), "_blank", "noopener");
    return;
  }
  current = -1;
  fig.innerHTML = (embedHTML(v, true) || `<p style="color:#fff;font-size:1.2rem;text-align:center">No video added yet for “${esc(v.title)}”.<br>Add its id/src in script.js.</p>`) + `<figcaption>${esc(v.title)}</figcaption>`;
  $(".lb-prev").hidden = $(".lb-next").hidden = true;
  lb.hidden = false; document.body.style.overflow = "hidden";
}
function closeLb() { lb.hidden = true; fig.innerHTML = ""; document.body.style.overflow = ""; }
function step(d) {
  const list = visibleArt(); if (current < 0 || !list.length) return;
  const pos = list.indexOf(current);
  showArt(list[(pos + d + list.length) % list.length]);
}

$("#masonry").addEventListener("click", e => { const a = e.target.closest(".art"); if (a) showArt(+a.dataset.i); });
$(".lb-close").onclick = closeLb;
$(".lb-prev").onclick = () => step(-1);
$(".lb-next").onclick = () => step(1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

/* ---- Skill tags that link to a showreel ----
   Any tag whose text matches a word below becomes a button that plays that reel.
   (The same list is in project.html.) */
const TAG_REELS = { "toon boom": "toon-boom", "toonboom": "toon-boom", "moho": "moho" };
const reelKeyFor = text => TAG_REELS[text.trim().toLowerCase()];
document.querySelectorAll(".tags li").forEach(li => {
  const key = reelKeyFor(li.textContent);
  if (key) li.innerHTML = `<a class="tag-link" href="#reel=${key}" data-reel="${key}" title="Watch the ${esc(li.textContent.trim())} showreel">${esc(li.textContent.trim())} ▶</a>`;
});
document.addEventListener("click", e => {
  const a = e.target.closest(".tag-link[data-reel]"); if (!a) return;
  const clip = CLIPS.find(c => c.key === a.dataset.reel); if (!clip) return;
  e.preventDefault(); openVideo(clip);
});
function openReelFromHash() {
  const m = location.hash.match(/^#reel=([\w-]+)/); if (!m) return;
  const clip = CLIPS.find(c => c.key === m[1]); if (!clip) return;
  $("#animation").scrollIntoView();
  history.replaceState(null, "", location.pathname + location.search + "#animation");
  // Opened from your computer, YouTube can't play here and a new tab would be blocked — just show the reels.
  if (location.protocol === "file:" && clip.type === "youtube") return;
  openVideo(clip);
}
window.addEventListener("hashchange", openReelFromHash);
openReelFromHash();

/* ---- Mobile menu ---- */
const toggle = $(".nav-toggle"), links = $(".nav-links");
toggle.onclick = () => { const o = links.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); };
links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

/* ---- Scroll reveal ---- */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal, .section-title, .about-grid, .contact").forEach(el => { el.classList.add("reveal"); io.observe(el); });

/* ---- Contact form (sent via Web3Forms to your inbox — your email stays private) ---- */
const form = $("#contactForm");
if (form) form.addEventListener("submit", async e => {
  e.preventDefault();
  const status = $(".cf-status", form), btn = $("button", form);
  if (form.access_key.value.includes("YOUR_ACCESS_KEY")) { status.textContent = "The form isn't connected yet — add your Web3Forms access key in index.html."; return; }
  btn.disabled = true; status.textContent = "Sending…";
  try {
    const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
    const data = await res.json();
    if (!data.success) throw new Error(data.message);
    form.reset(); status.textContent = "Thank you! Your message is on its way — I'll get back to you soon.";
  } catch (err) {
    status.textContent = "Sorry, something went wrong. Please try again, or message me on Instagram.";
  }
  btn.disabled = false;
});

$("#year").textContent = new Date().getFullYear();
