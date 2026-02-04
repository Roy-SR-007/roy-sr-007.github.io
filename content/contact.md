---
title: "Get in Touch ✉️"
date: 2026-02-04
hidemeta: true
hideTitle: false
description: "How to reach me — email, office, and a map."
slug: "contact"
---

<!-- ======================================================
     Contact page ONLY overrides
     ====================================================== -->
<style>
  /* Remove the editorial vertical rail ONLY on this page */
  html:has(head link[rel="canonical"][href*="/contact"]) .post-content{
    border-left: none !important;
    padding-left: 0 !important;
  }

  /* Remove excess header spacing */
  .post-single .post-header{ margin-bottom: 0 !important; }
  .post-single .post-content{ padding-top: 0 !important; margin-top: 0 !important; }

  /* Floating envelope animation */
  .emoji-float{
    display:inline-block;
    animation: float 2.8s ease-in-out infinite;
    margin-left: .3rem;
  }
  @keyframes float{
    0%,100%{ transform: translateY(0); }
    50%{ transform: translateY(-6px); }
  }

  @media (prefers-reduced-motion: reduce){
    .emoji-float{ animation: none; }
  }
</style>

<!-- ======================================================
     Inline SVG icons (reusable)
     ====================================================== -->
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="icon-mail" viewBox="0 0 24 24">
    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01l9 5.49 9-5.5V7H3zm0 2.51V17h18V9.5l-9 5.5-9-5.49z"/>
  </symbol>

  <symbol id="icon-pin" viewBox="0 0 24 24">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </symbol>
</svg>

<!-- ======================================================
     Layout + typography
     ====================================================== -->
<style>
  .icon{
    width:1em;
    height:1em;
    vertical-align:-0.15em;
    fill:currentColor;
  }

  .contact-row{
    display:flex;
    flex-wrap:wrap;
    gap:2.6rem;
    margin-top:1.6rem;
  }

  .contact-col{
    flex:1;
    min-width:260px;
    line-height:1.65;
    font-size:1.03rem;
  }

  .contact-label{
    display:inline-flex;
    align-items:center;
    gap:.45em;
    font-weight:800;
    text-transform:uppercase;
    letter-spacing:.06em;
    margin-bottom:.7rem;
    color:var(--nk-accent, #500000);
  }

  body.dark .contact-label{
    color:#ddd8d8;
  }

  .contact-col div,
  .contact-col span{
    margin-left:1.4em;
  }
</style>

<!-- ======================================================
     Content
     ====================================================== -->
<div class="contact-row">

  <div class="contact-col">
    <h3 class="contact-label">
      <svg class="icon"><use href="#icon-mail"/></svg>
      Email
    </h3>
    <span style="font-family:var(--font-mono);">
      sroy_123[at]tamu[dot]edu
    </span>
  </div>

  <div class="contact-col">
    <h3 class="contact-label">
      <svg class="icon"><use href="#icon-pin"/></svg>
      Office location
    </h3>
    <div>
      Room 463B<br>
      Blocker Building (BLOC)<br>
      Department of Statistics<br>
      3143 TAMU | 155 Ireland St<br>
      College Station, TX 77843-3143<br>
      USA
    </div>
  </div>

</div>

<!-- ======================================================
     Map
     ====================================================== -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.5804583667828!2d-96.34321489613892!3d30.619516895521986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683966993d2d7%3A0x5c96a35581fb22a4!2sDepartment%20of%20Statistics!5e1!3m2!1sen!2sus!4v1762360573317!5m2!1sen!2sus"
  width="100%"
  height="420"
  style="border:0;border-radius:.6rem;margin-top:2.2rem;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
