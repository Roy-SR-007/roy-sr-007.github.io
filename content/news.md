---
title: "News"
layout: single
showToc: false
hideMeta: true
url: "/news/"
slug: "news"
---

<div class="ns-accord">

<!-- ===== 2026 ===== -->
<details class="ns-year" open>
<summary>
<span class="ns-yearlabel">2026</span>
</summary>

<ul class="ns-list">
<li>
<span class="ns-month">Feb</span>
<span class="ns-body">
<a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">HierBOSSS</a> got featured in Texas A&M College News [<a href="http://tx.ag/SomjitRoy" target="_blank" rel="noopener">http://tx.ag/SomjitRoy</a>].
</span>
</li>

<li>
<span class="ns-month">Feb</span>
<span class="ns-body">
Work on <em>Frequentist Regret Analysis of Gaussian Process Thompson Sampling via Fractional Posteriors</em>
submitted (<a href="https://arxiv.org/abs/2602.14472" target="_blank" rel="noopener">arXiv</a>).
</span>
</li>

<li>
<span class="ns-month">Jan</span>
<span class="ns-body">
Invited talk on <em>Hierarchical Bayesian Operator-induced Symbolic Regression Trees for Structural Learning of Scientific Expressions</em>
(<a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">arXiv:2509.19710</a>)
at the <a href="https://ww2.amstat.org/meetings/sdss/2026/" target="_blank" rel="noopener">
2026 Symposium on Data Science & Statistics</a> in Milwaukee, Wisconsin.
</span>
</li>

<li>
<span class="ns-month">Jan</span>
<span class="ns-body">
Our work <em>Hierarchical Bayesian Operator-induced Symbolic Regression Trees for Structural Learning of Scientific Expressions</em>
(<a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">arXiv:2509.19710</a>)
was awarded the
<a href="https://community.amstat.org/sbss/awards" target="_blank" rel="noopener">
2026 Section on Bayesian Statistical Science (SBSS) Student Paper Award</a>
by the <a href="https://www.amstat.org/" target="_blank" rel="noopener">
American Statistical Association</a>.
</span>
</li>
</ul>
</details>

<!-- ===== 2025 ===== -->
<details class="ns-year">
<summary>
<span class="ns-yearlabel">2025</span>
</summary>

<ul class="ns-list">
<li>
<span class="ns-month">Nov</span>
<span class="ns-body">
Preprint on <em>Tangent approximation based variational inference for strongly super-Gaussian likelihoods</em> submitted
(<a href="https://arxiv.org/abs/2504.05431" target="_blank" rel="noopener">arXiv</a>).
</span>
</li>

<li>
<span class="ns-month">Nov</span>
<span class="ns-body">
GitHub release of
<a href="https://github.com/Roy-SR-007/TAVIE-SSG" target="_blank" rel="noopener">TAVIE-SSG</a>.
</span>
</li>

<li>
<span class="ns-month">Oct</span>
<span class="ns-body">
Talk on <em>Bayesian Symbolic Regression for Structural Learning of Scientific Expressions</em>
at <a href="https://tamusgsa.github.io/stat%20cafe/2025/10/21/stat-cafe-roy/" target="_blank" rel="noopener">
STAT CAFÉ</a>, Texas A&amp;M University.
</span>
</li>

<li>
<span class="ns-month">Sep</span>
<span class="ns-body">
Invited talk on <em>SPINWAVE</em> at the minisymposium
<em>Computational Methods for Multiscale and Multiphysics Problems</em>
during the
<a href="https://www.siam.org/conferences-events/section-meetings/texas-louisiana-section-of-siam-8th-annual-meeting/"
    target="_blank" rel="noopener">
8th Annual SIAM Texas–Louisiana Workshop</a>, Austin, TX.
</span>
</li>

<li>
<span class="ns-month">Sep</span>
<span class="ns-body">
Preprint on <em>Bayesian Scientific Machine Learning for Structural Learning of Scientific Expressions</em>
submitted (<a href="https://arxiv.org/abs/2509.19710" target="_blank" rel="noopener">arXiv</a>).
</span>
</li>

<li>
<span class="ns-month">Sep</span>
<span class="ns-body">
First official GitHub release of
<a href="https://github.com/Roy-SR-007/HierBOSSS" target="_blank" rel="noopener">HierBOSSS</a>.
</span>
</li>

<li>
<span class="ns-month">May</span>
<span class="ns-body">
Graduate Intern in the Earth and Environmental Sciences (EES) Division
at <em>Los Alamos National Laboratory</em>.
</span>
</li>
</ul>
</details>

<!-- ===== 2024 ===== -->
<details class="ns-year">
<summary>
<span class="ns-yearlabel">2024</span>
</summary>

<ul class="ns-list">
<li>
<span class="ns-month">Dec</span>
<span class="ns-body">
Talk on <em>TAVIE: Tangent Approximation for Variational Inference in Different Exponential Families</em>
at <em>IISA 2024</em>.
</span>
</li>

<li>
<span class="ns-month">Nov</span>
<span class="ns-body">
Paper on <em>Sparse Almost Perfect Mutually Unbiased Bases (APMUBs)</em>
published in the <em>Journal of Statistical Theory and Practice</em>
(<a href="https://link.springer.com/article/10.1007/s42519-024-00414-2"
  target="_blank" rel="noopener">Journal</a>).
</span>
</li>
</ul>
</details>

</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const CURRENT_YEAR = "2026";

  document.querySelectorAll("details.ns-year").forEach((el) => {
    const label = el.querySelector(".ns-yearlabel");
    const list  = el.querySelector(".ns-list");
    if (!label || !list) return;

    const baseYear = label.textContent.trim();

    // Keep only CURRENT_YEAR open on load
    if (baseYear !== CURRENT_YEAR) {
      el.removeAttribute("open");
    } else {
      el.setAttribute("open", "");
    }
  });
});
</script>
