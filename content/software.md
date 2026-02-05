---
title: "Software"
layout: single
showToc: false
hideMeta: true
url: "/software/"
slug: "software"
---

<style>
/* =========================================================
   software PAGE — no editorial rail, no timeline rail, no bullets
   Keeps: flip cards, corner hover, progress ring, dark mode
   Adds: nicer spacing, subtle “ink” hover tint, better typography
   Scope: /software/
   ========================================================= */

/* 0) Remove theme’s editorial vertical rail ONLY on /software/ */
html:has(head link[rel="canonical"][href$="/software/"]) .post-content{
  border-left: none !important;
  padding-left: 0 !important;
}

/* 1) Core variables */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach{
  --accent: var(--nk-accent, #7a0019);
  --line: color-mix(in srgb, currentColor 16%, transparent);
  --line-dark: color-mix(in srgb, currentColor 22%, transparent);

  --radius: 14px;
  --gap: 1.05rem;
  --left-col: 170px;
  --dot: 12px;

  /* soft card surface */
  --card-bg: color-mix(in srgb, var(--nk-paper, #fff) 92%, white);
  --card-border: color-mix(in srgb, currentColor 14%, transparent);
  --shadow: var(--nk-shadow, 0 10px 30px rgba(17,24,39,.06));
}

/* Dark mode compatibility (PaperMod style + system dark) */
@media (prefers-color-scheme: dark){
  html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach{
    --accent: #ddd8d8;
    --line: var(--line-dark);
    --card-bg: color-mix(in srgb, var(--nk-paper, #111) 88%, black);
    --card-border: color-mix(in srgb, currentColor 18%, transparent);
  }
}
html[data-theme='dark'] html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach,
html.dark html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach,
body.dark html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach{
  --accent: #ddd8d8;
  --line: var(--line-dark);
  --card-bg: color-mix(in srgb, var(--nk-paper, #111) 88%, black);
  --card-border: color-mix(in srgb, currentColor 18%, transparent);
}

/* 2) Remove any bullets globally inside this widget (safety) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach ul,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-teach ol{
  list-style: none !important;
  padding-left: 0 !important;
  margin-left: 0 !important;
}

/* 3) Timeline layout — NO RAIL */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-timeline{
  position: relative;
  padding-left: 0 !important;          /* remove old rail gutter */
  margin-top: 1.0rem;
}

/* Rows */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item{
  position: relative;
  display: grid;
  grid-template-columns: var(--left-col) 1fr;
  gap: var(--gap);
  align-items: center;
  min-height: 92px;
  margin: 0 0 1.05rem 0;
}

/* Remove any rail/dots from earlier timeline styles */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item::before{ content:none !important; }
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item > :first-child::before{ content:none !important; }

/* 4) Semester pill — fancier, still with progress ring */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .32rem .75rem;
  border-radius: 999px;
  font-weight: 750;
  letter-spacing: .02em;
  white-space: nowrap;

  border: 1.5px solid color-mix(in srgb, var(--accent) 55%, transparent);
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  color: var(--accent);
}

/* Progress ring (kept) */
@property --p { syntax:'<angle>'; initial-value:0turn; inherits:false; }
html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:999px;
  padding:2.5px;
  background: conic-gradient(var(--accent) var(--p), transparent 0) border-box;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  pointer-events:none;
  opacity:.98;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item.is-timing .nk-sem::after{
  animation: nk-sem-progress var(--timer-ms, 5000ms) linear both;
}
@keyframes nk-sem-progress { from{ --p:0turn; } to{ --p:1turn; } }

/* 5) Flip card — add “news-card” surface + hover lift (but keep corners) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  position: relative;
  cursor: pointer;
  outline: none;

  border-radius: var(--radius);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: none;
  overflow: hidden;

  transition: transform .16s ease, box-shadow .18s ease, border-color .18s ease;
}

html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover{
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: color-mix(in srgb, var(--accent) 24%, transparent);
}

html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:focus-visible{
  outline: 2px solid color-mix(in srgb, var(--accent) 55%, transparent);
  outline-offset: 3px;
}

/* Ensure your old connector elements stay hidden */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card .nk-conn-h,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card .nk-conn-elbow{
  display:none !important;
}

/* Flip mechanics kept */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card-inner{
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 116px;
  transform-style: preserve-3d;
  transition: transform .45s ease;
  transform-origin: center center;
  will-change: transform;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card.is-flipped .nk-card-inner{
  transform: rotateX(180deg);
}

html:has(head link[rel="canonical"][href$="/software/"]) .nk-face{
  position: relative;
  padding: .95rem 1.05rem;
  border-radius: var(--radius);
  background: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* Soft “ink” tint on hover/flip (matches your other pages) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover .nk-face.front{
  background: color-mix(in srgb, var(--accent) 7%, transparent);
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card.is-flipped .nk-face.back{
  background: color-mix(in srgb, var(--accent) 7%, transparent);
}

html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.front{ transform: rotateX(0); }
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.back{
  transform: rotateX(180deg);
  position: absolute;
  inset: 0;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:not(.is-flipped) .back{ pointer-events:none; }
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card.is-flipped .front{ pointer-events:none; }

/* 6) Your ultra-bold corner hover lines (kept exactly, but scoped) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::after,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-tl,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-br{
  content:"";
  position:absolute;
  width:46px; height:46px;
  border:6px solid var(--accent);
  opacity:0;
  transition: opacity .35s cubic-bezier(.4,0,.2,1),
              transform .35s cubic-bezier(.4,0,.2,1);
  pointer-events:none;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::before{
  top:-4px; left:-4px;
  border-right:none; border-bottom:none;
  transform:translate(-12px,-12px);
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::after{
  bottom:-4px; right:-4px;
  border-left:none; border-top:none;
  transform:translate(12px,12px);
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-tl{
  top:-4px; right:-4px;
  border-left:none; border-bottom:none;
  transform:translate(12px,-12px);
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-br{
  bottom:-4px; left:-4px;
  border-right:none; border-top:none;
  transform:translate(-12px,12px);
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover::after,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover > .corner-tl,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover > .corner-br,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:focus-visible::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:focus-visible::after,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:focus-visible > .corner-tl,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:focus-visible > .corner-br{
  opacity:1;
  transform:translate(0,0);
}

/* 7) Typography polish (kept from yours, slightly cleaner) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.front .nk-title{
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.3;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.front .nk-desc{
  margin-top: .18rem;
  font-size: 1.0rem;
  line-height: 1.45;
  opacity: .9;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.back .nk-duty-title{
  font-size: 1.0rem;
  font-weight: 750;
  margin-bottom: .25rem;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face.back .nk-duty{
  font-size: .97rem;
  line-height: 1.45;
  opacity: .9;
}

/* 8) Responsive */
@media (max-width:640px){
  html:has(head link[rel="canonical"][href$="/software/"]) .nk-item{
    grid-template-columns: 1fr;
    align-items: start;
  }
  html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem{
    margin-bottom: .2rem;
  }
}

/* =========================================================
   software — Make cards look like Research cards
   + gradient border (same as research blurb)
   + same hover lift/ink tint
   + semester "year" pill styled like research tags
   + progress ring uses the same gradient + keeps animation
   Scope: /software/
   ========================================================= */

/* 0) Remove the theme editorial rail ONLY on /software/ */
html:has(head link[rel="canonical"][href$="/software/"]) .post-content{
  border-left: none !important;
  padding-left: 0 !important;
}

/* 1) software: remove any timeline rail/dots (hard-off) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-timeline{
  padding-left: 0 !important;
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item > :first-child::before{
  content: none !important;
  display: none !important;
}

/* 2) Layout spacing (keeps your two-col layout on desktop) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item{
  gap: 1.05rem;
  margin: 0 0 1.05rem 0;
}

/* =========================================================
   3) AWARD CARD = Research-card look + gradient border
   ========================================================= */

/* Base card surface like research/news cards */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  position: relative;
  border-radius: 14px;
  background: color-mix(in srgb, var(--nk-paper, #fff) 92%, white);
  box-shadow: none;
  overflow: hidden;

  /* IMPORTANT: make border handled by ::before gradient */
  border: 1px solid transparent !important;

  transition: transform .16s ease, box-shadow .18s ease;
}

/* Gradient border (same “pattern” as research blurb) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::before{
  content:"";
  position:absolute;
  inset:0;
  padding: 1.5px;                /* border thickness */
  border-radius: 14px;
  background: var(--nk-inkgrad);  /* your gradient */
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events:none;
  opacity: .55;                  /* calm at rest */
  transition: opacity .18s ease;
}

/* Hover = same lift as research cards + gradient border pops */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover{
  transform: translateY(-2px);
  box-shadow: var(--nk-shadow, 0 10px 30px rgba(17,24,39,.06));
}
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover::before{
  opacity: 1;
}

/* Soft ink tint inside on hover (matches your site feel) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover .nk-face.front,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card.is-flipped .nk-face.back{
  background: color-mix(in srgb, var(--nk-accent, #500000) 7%, transparent);
}

/* Dark mode: keep surface sensible */
body.dark html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  background: color-mix(in srgb, var(--nk-paper, #111) 88%, black);
}

/* Hide old connectors (keep) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card .nk-conn-h,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card .nk-conn-elbow{
  display:none !important;
}

/* =========================================================
   4) “YEAR / TERM” pill like Research tag pills (high contrast)
   (You can keep text like "Fall 2025" or switch to "FA25" manually)
   ========================================================= */

html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem{
  display: inline-flex;
  align-items:center;
  justify-content:center;

  padding: .28rem .68rem;
  border-radius: 999px;

  /* research-tag vibe */
  font-weight: 800;
  font-size: .92rem;
  letter-spacing: .06em;
  text-transform: uppercase;

  color: var(--nk-accent, #500000);
  background: color-mix(in srgb, var(--nk-accent, #500000) 7%, transparent);

  /* gradient edge like blurb */
  border: 1px solid transparent;
  position: relative;
  isolation: isolate;
}

/* Gradient border on the pill too */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem::before{
  content:"";
  position:absolute;
  inset:0;
  padding: 1.2px;
  border-radius: 999px;
  background: var(--nk-inkgrad);
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events:none;
  opacity:.75;
}

/* Dark mode contrast */
body.dark html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem{
  color: #ddd8d8;
  background: color-mix(in srgb, #ddd8d8 10%, transparent);
}

/* =========================================================
   5) Progress ring uses SAME gradient “pattern” + animation kept
   ========================================================= */

@property --p { syntax:'<angle>'; initial-value:0turn; inherits:false; }

html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:999px;
  padding: 2.5px;

  /* gradient ring “paint” */
  background:
    conic-gradient(from 0turn,
      color-mix(in srgb, var(--nk-accent, #500000) 35%, transparent),
      var(--nk-accent, #500000),
      color-mix(in srgb, var(--nk-accent, #500000) 35%, transparent),
      var(--nk-accent, #500000)
    ) border-box;

  /* mask into a ring */
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;

  pointer-events:none;
  opacity:.98;

  /* animate fill via --p (same behavior you had) */
  background:
    conic-gradient(from 0turn,
      /* the “filled” part */
      var(--nk-accent, #500000) var(--p),
      /* the “unfilled” part uses your blurb gradient */
      transparent 0
    ) border-box;

  /* IMPORTANT: use gradient as the stroke look (overlay) */
  box-shadow: inset 0 0 0 999px transparent;
}

/* When timing, animate the ring */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-item.is-timing .nk-sem::after{
  animation: nk-sem-progress var(--timer-ms, 5000ms) linear both;
}

/* Dark mode ring color */
body.dark html:has(head link[rel="canonical"][href$="/software/"]) .nk-sem::after{
  background:
    conic-gradient(from 0turn,
      #ddd8d8 var(--p),
      transparent 0
    ) border-box;
}

/* Keep your existing animation keyframes name */
@keyframes nk-sem-progress { from{ --p:0turn; } to{ --p:1turn; } }

/* =========================================================
   6) Optional: reduce motion
   ========================================================= */
@media (prefers-reduced-motion: reduce){
  html:has(head link[rel="canonical"][href$="/software/"]) .nk-card,
  html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::before{
    transition: none !important;
  }
}

/* =========================================================
   HOTFIX: restore software cards (I accidentally hid .nk-card)
   Scope: /software/
   Paste at the very END of your CSS
   ========================================================= */

/* 0) Bring the cards back no matter what earlier rules did */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  display: block !important;
}

/* 1) Kill ONLY the decorative corner elements (NOT the card) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card::after,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-tl,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card > .corner-br{
  content: none !important;
  display: none !important;
}

/* 2) Base card = SAME as Research cards */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  position: relative;
  border-radius: 14px;
  border: 1px solid var(--nk-line) !important;
  background: color-mix(in srgb, var(--nk-paper) 92%, white);
  box-shadow: none !important;
  overflow: hidden;

  transition:
    transform .16s ease,
    box-shadow .18s ease,
    border-color .18s ease;
}

/* 3) Hover = identical to Research hover */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover{
  transform: translateY(-2px);
  box-shadow: var(--nk-shadow, 0 10px 30px rgba(17,24,39,.06)) !important;
  border-color: color-mix(in srgb, var(--nk-accent) 24%, transparent) !important;
}

/* 4) Dark mode parity */
body.dark
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card{
  background: color-mix(in srgb, var(--nk-paper) 88%, black);
}
body.dark
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card:hover{
  border-color: color-mix(in srgb, #ddd8d8 22%, transparent) !important;
}

/* 5) Keep faces clean (no extra borders) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-face{
  border: none !important;
}

/* =========================================================
   software — links: NO underline at rest, animated underline on hover
   Scope: /software/
   ========================================================= */

html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:link,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:visited{
  /* remove the always-on underline */
  text-decoration: none !important;
  border-bottom: none !important;

  /* ensure the About-style hover underline system can work */
  background-repeat: no-repeat !important;
  background-size: 0% 2.4px !important;     /* OFF by default */
  background-position: 0 118% !important;
}

/* hover: animate underline (same gradient/pattern as About) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:hover{
  background-size: 100% 2.4px !important;   /* ON on hover */
}

/* IMPORTANT: if your theme uses ::after underline globally, keep it OFF at rest,
   but allow it on hover if you prefer pseudo-element style instead of background */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a::after{
  content: none !important; /* kills any static underline coming from global ::after rules */
}

/* Use the SAME gradient variable you used elsewhere */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a{
  background-image: var(--nk-inkgrad) !important;
}

/* =========================================================
   software — kill ALL static link underlines, keep hover animation only
   Scope: /software/
   ========================================================= */

html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:link,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:visited{
  /* 1) remove any static underline sources */
  text-decoration: none !important;
  border-bottom: 0 !important;
  box-shadow: none !important;

  /* 2) remove any pseudo underline systems */
  background-image: none !important;
  background-size: 0% 0% !important;
}

html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a::before,
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a::after{
  content: none !important;
  display: none !important;
}

/* ONLY ON HOVER: apply the About-page underline animation (gradient) */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:hover{
  text-decoration: none !important;
  border-bottom: 0 !important;

  /* About-style underline animation */
  display: inline;
  position: relative;
  padding-bottom: 3px !important;
  background-origin: content-box;

  background-image: var(--nk-inkgrad) !important;  /* your gradient var */
  background-repeat: no-repeat !important;
  background-position: 0 118% !important;
  background-size: 100% 2.4px !important;
  transition: background-size .3s ease;
}

/* make sure non-hover ALWAYS stays off, even if another rule fights it */
html:has(head link[rel="canonical"][href$="/software/"]) .nk-card a:not(:hover){
  background-image: none !important;
  background-size: 0% 0% !important;
}
</style>


<!-- 
<h2 class="section-title">Texas A&M University </h2>
<h3 class="section-subtitle">Teaching Assistant – Department of Statistics</h3> -->


<div class="nk-teach">
  <div class="nk-timeline">

<!-- ITEM -->
<div class="nk-item">
<div><span class="nk-sem">HierBOSSS</span></div>

<div class="nk-card" tabindex="0" role="button" aria-pressed="false" aria-label="Toggle details for HierBOSSS">
<span class="nk-conn-h" aria-hidden="true"></span>
<span class="nk-conn-elbow" aria-hidden="true"></span>

<div class="nk-card-inner">
<div class="nk-face front">
<div class="nk-title">HierBOSSS on Github</div>
<div class="nk-desc">
    <a href="https://github.com/Roy-SR-007/HierBOSSS" target="_blank" rel="noopener">HierBOSSS-v1.0.0</a> (2025) Github repository. This is based on <a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a>: <em>Hierarchical Bayesian Operator-induced Symbolic Regression Trees for Structural Learning of Scientific Expressions</em>.
</div>
</div>

<div class="nk-face back">
<div class="nk-duty-title">Github Repo</div>
<div class="nk-duty">
    <strong>Somjit Roy</strong> (Maintainer and Developer) and Pritam Dey (Maintainer and Developer); 
    [<a href="https://github.com/Roy-SR-007/HierBOSSS" target="_blank" rel="noopener">GitHub</a>].
</div>
</div>
</div>
</div>
</div>


<!-- ITEM -->
<div class="nk-item">
<div><span class="nk-sem">TAVIE-SSG</span></div>

<div class="nk-card" tabindex="0" role="button" aria-pressed="false" aria-label="Toggle details for TAVIE-SSG">
<span class="nk-conn-h" aria-hidden="true"></span>
<span class="nk-conn-elbow" aria-hidden="true"></span>

<div class="nk-card-inner">
<div class="nk-face front">
<div class="nk-title">TAVIE-SSG on Github</div>
<div class="nk-desc">
    <a href="https://github.com/Roy-SR-007/TAVIE-SSG" target="_blank" rel="noopener">TAVIE-SSG v2.0.0</a> (2025) Github repository. This is based on <a href="https://arxiv.org/abs/2504.05431" target="_blank" rel="noopener">TAVIE-SSG</a>: <em>A Generalized Tangent Approximation based Variational Inference Framework for Strongly Super-Gaussian Likelihoods</em>.
</div>
</div>

<div class="nk-face back">
<div class="nk-duty-title">Github Repo</div>
<div class="nk-duty">
    <strong>Somjit Roy</strong> (Maintainer and Developer) and Pritam Dey (Maintainer and Developer); 
    [<a href="https://github.com/Roy-SR-007/TAVIE-SSG" target="_blank" rel="noopener">GitHub</a>].
</div>
</div>
</div>
</div>
</div>

<!-- ITEM -->
<div class="nk-item">
<div><span class="nk-sem">bayesestdft</span></div>

<div class="nk-card" tabindex="0" role="button" aria-pressed="false" aria-label="Toggle details for TAVIE-SSG">
<span class="nk-conn-h" aria-hidden="true"></span>
<span class="nk-conn-elbow" aria-hidden="true"></span>

<div class="nk-card-inner">
<div class="nk-face front">
<div class="nk-title">bayesestdft on CRAN</div>
<div class="nk-desc">
    <a href="https://cran.r-project.org/web/packages/bayesestdft/index.html" target="_blank" rel="noopener">bayesestdft</a>: <em>Estimating the Degrees of Freedom of the Student's t-Distribution under a Bayesian Framework</em> (2025) R package on CRAN. This is based on <em>The Use of a Log-Normal Prior for the Student t-Distribution</em>; [<a href="https://www.mdpi.com/2075-1680/11/9/462" target="_blank" rel="noopener">mdpi</a>].
</div>
</div>

<div class="nk-face back">
<div class="nk-duty-title">CRAN & Github Repo</div>
<div class="nk-duty">
<strong>Somjit Roy</strong> (Maintainer and Developer) and Se Yoon Lee (Contributor); 
[<a href="https://cran.r-project.org/web/packages/bayesestdft/index.html" target="_blank" rel="noopener">CRAN</a> | <a href="https://github.com/Roy-SR-007/bayesestdft" target="_blank" rel="noopener">Github</a>].
</div>
</div>
</div>
</div>
</div>

<div class="nk-item">
<div><span class="nk-sem">GoodFitSBM</span></div>

<div class="nk-card" tabindex="0" role="button" aria-pressed="false" aria-label="Toggle details for GoodFitSBM">
<span class="nk-conn-h" aria-hidden="true"></span>
<span class="nk-conn-elbow" aria-hidden="true"></span>

<div class="nk-card-inner">
<div class="nk-face front">
<div class="nk-title">GoodFitSBM on CRAN</div>
<div class="nk-desc">
    <a href="https://cran.r-project.org/web/packages/GoodFitSBM/index.html" target="_blank" rel="noopener">GoodFitSBM</a>: <em>Monte Carlo goodness-of-fit tests for Stochastic Block Models</em> (2024) R package on CRAN. This is based on <em>Monte Carlo goodness-of-fit tests for degree corrected and related stochastic blockmodels</em>; [<a href="https://doi.org/10.1093/jrsssb/qkad084" target="_blank" rel="noopener">JRSS-B</a>].
</div>
</div>

<div class="nk-face back">
<div class="nk-duty-title">CRAN & Github Repo</div>
<div class="nk-duty">
    Soham Ghosh (Maintainer and Co-developer), <strong>Somjit Roy</strong> (Developer), and Debdeep Pati (Contributor);
    [<a href="https://cran.r-project.org/web/packages/GoodFitSBM/index.html" target="_blank" rel="noopener">CRAN</a> |
    <a href="https://github.com/Roy-SR-007/GoodFitSBM" target="_blank" rel="noopener">GitHub</a>].
</div>
</div>
</div>
</div>
</div>


  </div>
</div>

<script>
(function(){
  const FLIP_MS = 5000;                // match your auto-revert time
  const timers = new WeakMap();

  function markTiming(card, on){
    const item = card.closest('.nk-item');
    if(!item) return;
    if(on){
      item.style.setProperty('--timer-ms', FLIP_MS + 'ms');
      item.classList.add('is-timing');
      card.classList.add('nk-active');
    }else{
      // reset animation so next start begins from 0
      item.classList.remove('is-timing');
      item.style.removeProperty('--timer-ms');
      void item.offsetWidth; // reflow to restart animation next time
      card.classList.remove('nk-active');
    }
  }

  function clearAuto(card){
    const id = timers.get(card);
    if(id){ clearTimeout(id); timers.delete(card); }
  }

  function revert(card){
    if(!card.classList.contains('is-flipped')) return;
    card.classList.remove('is-flipped');
    card.setAttribute('aria-pressed','false');
    markTiming(card, false);
    clearAuto(card);
  }

  function setAutoRevert(card){
    clearAuto(card);
    timers.set(card, setTimeout(()=>revert(card), FLIP_MS));
  }

  function toggle(card){
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
    if(flipped){ markTiming(card,true);  setAutoRevert(card); }
    else       { markTiming(card,false); clearAuto(card);     }
  }

  document.addEventListener('click', (e)=>{
    const card = e.target.closest('.nk-card');
    if(card) toggle(card);
  });

  document.addEventListener('keydown', (e)=>{
    if((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('nk-card')){
      e.preventDefault(); toggle(e.target);
    }
  });
})();
</script>


