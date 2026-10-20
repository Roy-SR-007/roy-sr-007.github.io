---
title: "Research"
layout: single
showToc: false
hideMeta: true
url: "/research/"
slug: "research"
---


<div class="rk-htl">
  <button class="rk-htl-all rk-htl-all--active" data-year="all">All</button>
  <div class="rk-htl-sep"></div>
  <button class="rk-htl-node" data-year="2026">
    <div class="rk-htl-dot rk-htl-dot--recent"></div>
    <div class="rk-htl-lbl">2026</div>
  </button>
  <div class="rk-htl-conn"></div>
  <button class="rk-htl-node" data-year="2024">
    <div class="rk-htl-dot"></div>
    <div class="rk-htl-lbl">2024</div>
  </button>
  <div class="rk-htl-conn"></div>
  <button class="rk-htl-node" data-year="2022">
    <div class="rk-htl-dot"></div>
    <div class="rk-htl-lbl">2022</div>
  </button>
</div>

<section class="rk-tl">

  <!-- 2026 -->
<div class="rk-group" data-year="2026">

<div class="rk-year">2026</div>

<div class="rk-items">

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">TAVIE-SSG</span></div>
<div class="rk-body">
<h3 class="rk-title">A Generalized Tangent Approximation based Variational Inference Framework for Strongly Super-Gaussian Likelihoods</h3>
<div class="rk-meta">
<strong>Somjit Roy</strong>, Pritam Dey, Debdeep Pati, and Bani K. Mallick
<span class="rk-status"><em>JASA Theory &amp; Methods</em></span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--vi">Variational Inference</span></div>
<div class="rk-pills">
<details class="rk-details">
  <summary class="rk-pill">Abstract</summary>
  <div class="rk-abstract">Variational inference, as an alternative to Markov chain Monte Carlo sampling, has played a transformative role in enabling scalable computation for complex Bayesian models. Nevertheless, existing approaches often depend on either rigid model-specific formulations or stochastic black-box optimization routines. Tangent approximation is a principled class of structured variational methods that exploits the geometry of the underlying probability model. However, its utility has largely been confined to logistic regression and related modeling regimes. In this article, we propose a novel variational framework based on tangent transformation for a broad class of probability models characterized by strongly super-Gaussian likelihoods. Our method leverages convex duality to construct tangent minorants of the log-likelihood, thereby inducing conjugacy with Gaussian priors over model parameters in an otherwise intractable setup. Under mild assumptions on the data-generating mechanism, we establish algorithmic convergence guarantees, a contribution that stands in contrast to the limited theoretical assurances typically available for black-box variational methods. Additionally, we derive near-parametric variational risk bounds. Superior performance of our proposed methodology is illustrated on simulated and real-data scenarios that challenge state-of-the-art variational algorithms in terms of scalability and their ability to consistently capture complex underlying data structure.</div>
</details>
<a class="rk-pill rk-external" href="https://doi.org/10.1080/01621459.2026.2749698" target="_blank" rel="noopener noreferrer">Journal</a>
<a class="rk-pill rk-external" href="https://arxiv.org/abs/2504.05431" target="_blank" rel="noopener noreferrer">arXiv</a>
</div>
</div>
</article>

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">VaSST</span></div>
<div class="rk-body">
<h3 class="rk-title">VaSST: Variational Inference for Symbolic Regression using Soft Symbolic Trees</h3>
<div class="rk-meta">
<strong>Somjit Roy</strong>, Pritam Dey, and Bani K. Mallick 
<span class="rk-status"><em>UAI 2026</em></span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--sr">Symbolic Regression</span><span class="rk-topic rk-topic--vi">Variational Inference</span></div>
<div class="rk-pills">
<!--<details class="rk-details">
<summary class="rk-pill">Awards</summary>
<ul class="rk-awards"><li>🥈 Silver Prize – 2024 SETCASA Poster Session</li></ul>
</details>-->
<details class="rk-details">
<summary class="rk-pill">Abstract</summary>
<div class="rk-abstract">
Symbolic regression (SR) has gained recent traction in AI-driven scientific discovery for learning closed-form physical laws. Yet existing methods are dominated by heuristic search or data-intensive approaches that often assume low-noise regimes and lack principled uncertainty quantification, while fully probabilistic SR formulations remain scarce. We introduce a scalable probabilistic framework for SR, VaSST, based on variational inference. VaSST uses soft symbolic trees, a continuous relaxation of symbolic expression trees in which discrete operator and feature assignments are replaced by probability distributions over allowable components. This transforms combinatorial symbolic search through an astronomically large expression space into efficient gradient-based optimization while preserving a coherent probabilistic interpretation. The learned soft representations induce posterior distributions over symbolic structures, enabling uncertainty quantification across plausible symbolic forms through posterior-aware symbolic model selection. On simulated experiments and the Feynman Symbolic Regression Database, VaSST achieves strong structural recovery and predictive accuracy compared to state-of-the-art competing SR methods.
</div>
</details>
<a class="rk-pill rk-external"
    href="https://proceedings.mlr.press/v337/roy26a.html"
    target="_blank" rel="noopener noreferrer">PMLR</a>
<a class="rk-pill rk-external"
    href="https://arxiv.org/abs/2602.23561"
    target="_blank" rel="noopener noreferrer">arXiv</a>
</div>
</div>
</article>

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">HierBOSSS</span></div>
<div class="rk-body">
<h3 class="rk-title">Probabilistic Symbolic Regression for Equation Discovery via Operator-induced and Regularized Symbolic Forests</h3>
<div class="rk-meta">
<strong>Somjit Roy</strong>, Pritam Dey, Bani K. Mallick, and Debdeep Pati
<span class="rk-status"><em>Submitted, Under review</em></span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--sr">Symbolic Regression</span></div>
<div class="rk-pills">
<details class="rk-details">
  <summary class="rk-pill">Abstract</summary>
  <div class="rk-abstract">Symbolic regression has emerged as a powerful tool for artificial intelligence-driven scientific discovery by learning interpretable analytical expressions that reveal governing relationships directly from data. Existing methods, however, often rely on heuristic search, struggle to balance predictive accuracy with expression complexity in noisy settings, and offer limited characterization of symbolic uncertainty. Probabilistic approaches that address these challenges in a unified manner remain underexplored. We introduce a probabilistic symbolic regression framework that represents mathematical expressions as ensembles of symbolic trees. A regularizing prior over tree topology controls expression complexity, while an Occam's window-based posterior summary captures uncertainty across multiple plausible symbolic models. Given the limited existing theoretical treatment of symbolic regression, we develop posterior concentration guarantees when symbolic expressions approximate the underlying relationship arbitrarily well, with a near-parametric rate when an exact finite formula exists. Additionally, we establish a sharp oracle concentration result under symbolic misspecification. Comparisons of our proposed framework with state-of-the-art competitors demonstrate superior predictive accuracy, optimal symbolic complexity, and stable structural recovery when learning benchmark scientific equations, together with the identification of scientifically interpretable descriptor formulas in a challenging materials discovery application.</div>
</details>
<a class="rk-pill rk-external"
    href="https://arxiv.org/abs/2509.19710"
    target="_blank" rel="noopener noreferrer">arXiv</a>

<details class="rk-details">
  <summary class="rk-pill">Awards</summary>
  <ul class="rk-awards"><li>2026 IMS Hannan Graduate Student Travel Award</li></ul>
  <ul class="rk-awards"><li>2026 ASA SBSS Student Paper Award</li></ul>
  <ul class="rk-awards"><li>2026 ASA SDSS Student and Early Career Scholarship</li></ul>
  <ul class="rk-awards"><li>2026 ASA SDSS Refereed Talk</li></ul>
  <ul class="rk-awards"><li>Texas A&M Graduate Research and Presentation (RAP) Travel Award</li></ul>
  <ul class="rk-awards"><li>Texas A&amp;M Institute of Data Science (TAMIDS) Student Travel Grant</li></ul>
</details>
</div>
</div>
</article>

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">GP-TS</span></div>
<div class="rk-body">
<h3 class="rk-title">Frequentist Regret Analysis of Gaussian Process Thompson Sampling via Fractional Posteriors</h3>
<div class="rk-meta">
<strong>Somjit Roy</strong>, Prateek Jaiswal, Anirban Bhattacharya, Debdeep Pati, and Bani K. Mallick 
<span class="rk-status"><em>To be submitted</em></span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--bo">Bayesian Optimization</span></div>
<div class="rk-pills">
<!--<details class="rk-details">
<summary class="rk-pill">Awards</summary>
<ul class="rk-awards"><li>🥈 Silver Prize – 2024 SETCASA Poster Session</li></ul>
</details>-->
<details class="rk-details">
<summary class="rk-pill">Abstract</summary>
<div class="rk-abstract">
We study Gaussian Process Thompson Sampling (GP-TS) for sequential decision-making over compact, continuous action spaces and provide a frequentist regret analysis based on fractional Gaussian process posteriors, without relying on domain discretization as in prior work. We show that the variance inflation commonly assumed in existing analyses of GP-TS can be interpreted as Thompson Sampling with respect to a fractional posterior with tempering parameter $\alpha \in (0,1)$. We derive a kernel-agnostic regret bound expressed in terms of the information gain parameter $\gamma_t$ and the posterior contraction rate $\epsilon_t$, and identify conditions on the Gaussian process prior under which $\epsilon_t$ can be controlled. As special cases of our general bound, we recover regret of order $\mathcal{\tilde O}(T^{\frac{1}{2}})$ for the squared exponential kernel, $\mathcal{\tilde O}(T^{\frac{2\nu+3d}{2(2\nu+d)}} )$ for the Mat&eacutern-$\nu$ kernel, and a bound of order $\tilde{\mathcal O}(T^{\frac{2\nu+3d}{2(2\nu+d)}})$ for the rational quadratic kernel. Overall, our analysis provides a unified and discretization-free regret framework for GP-TS that applies broadly across kernel classes.
</div>
</details>
<a class="rk-pill rk-external"
    href="https://arxiv.org/abs/2602.14472"
    target="_blank" rel="noopener noreferrer">arXiv</a>
</div>
</div>
</article>
</div>
</div>

<!-- 2024 -->
<div class="rk-group" data-year="2024">

<div class="rk-year">2024</div>

<div class="rk-items">

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">APMUBs</span></div>
<div class="rk-body">
<h3 class="rk-title">Almost Perfect Mutually Unbiased Bases that are Sparse</h3>
<div class="rk-meta">
Ajeet Kumar, Subhamoy Maitra, and <strong>Somjit Roy</strong>
<span class="rk-status"><em></em>Journal of Statistical Theory and Practice</span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--qc">Quantum Cryptography</span></div>
<div class="rk-pills">
<!--<details class="rk-details">
<summary class="rk-pill">Awards</summary>
<ul class="rk-awards"><li>🥈 Silver Prize – 2024 SETCASA Poster Session</li></ul>
</details>-->
<details class="rk-details">
<summary class="rk-pill">Abstract</summary>
<div class="rk-abstract">
Selected ideas of statistical designs are exploited in this paper in constructions related to Mutually Unbiased Bases (MUBs). In dimension $d$, MUBs are a collection of orthonormal bases over $\mathbb{C}^{d}$ such that for any two vectors $v_1, v_2$ belonging to different bases, the dot or scalar product $|\braket{v_1 | v_2}| = \frac{1}{\sqrt{d}}$. The upper bound on the number of such bases is $d+1$. Construction methods to achieve this bound are known for cases when $d$ is some power of prime. The situation is more restrictive in other cases and also when we consider the results over real rather than complex. Thus, certain relaxations of this model are considered in literature and consequently Approximate MUBs (AMUBs) are studied. This enables one to construct potentially large number of such objects for $\mathbb{C}^{d}$ as well as in $\mathbb{R}^{d}$. In this regard, we propose the concept of Almost Perfect MUBs (APMUB), where we restrict the absolute value of inner product $|\braket{v_1 | v_2}|$ to be two-valued, one being $0$ and the other $\leq \frac{1 + \mathcal{O}(d^{-\lambda})}{\sqrt{d}}$, such that $\lambda > 0$ and the numerator $1 + \mathcal{O}(d^{-\lambda}) \leq 2$. Ech such vector constructed, has an important feature that large number of its components are zero and the non-zero components are of equal magnitude. Our techniques are based on combinatorial structures related to Resolvable Block Deisgns (RBDs), that are used extensively in statistical designs. We show that for several composite dimensions $d$, one can construct $\mathcal{O}(\sqrt{d})$ many APMUBs, in which cases the number of MUBs are significantly small. To be specific, this result works for $d$ of the form $(q-e)(q+f)$, $q$, $e$, $f \in \mathbb{N}$, with the conditions $0\leq f \leq e$ for constant $e$, $f$ and $q$ some power of prime. We also show that such APMUBs provide sets of Bi-angular vecotrs which are of the order of $\mathcal{O}(d^{\frac{3}{2}})$ in numbers, having high angular distances among them. Finally, as the MUBs are equivalent to aset of Hadamard matrices, we show that the APMUBs are so with the set of Weighing matrices.
</div>
</details>
<a class="rk-pill rk-external"
    href="https://link.springer.com/article/10.1007/s42519-024-00414-2"
    target="_blank" rel="noopener noreferrer">Journal</a>
</div>
</div>
</article>
</div>
</div>

<!-- 2022 -->
<div class="rk-group" data-year="2022">

<div class="rk-year">2022</div>

<div class="rk-items">

<article class="rk-item">
<div class="rk-left"><span class="rk-tag">AMUBs</span></div>
<div class="rk-body">
<h3 class="rk-title">A Heuristic Framework to Search for Approximate Mutally Unbiased Bases</h3>
<div class="rk-meta">
Sreejit Chaudhury, Ajeet Kumar, Subhamoy Maitra, <strong>Somjit Roy</strong>, and Sourav Sen Gupta
<span class="rk-status"><em></em>In Cyber Security, Cryptology, and Machine Learning</span>
</div>
<div class="rk-topics"><span class="rk-topic rk-topic--qc">Quantum Cryptography</span></div>
<div class="rk-pills">
<!--<details class="rk-details">
<summary class="rk-pill">Awards</summary>
<ul class="rk-awards"><li>🥈 Silver Prize – 2024 SETCASA Poster Session</li></ul>
</details>-->
<details class="rk-details">
<summary class="rk-pill">Abstract</summary>
<div class="rk-abstract">
Mutually Unbiased Bases (MUBs) have varied applications in quantum information. However, obtaining the optimal number of MUBs is a challenging problem for different dimensions. The problem has received serious attention for several decades and still number of questions are unsolved in this domain. As optimal number of MUBs may not always be available for different composite dimensions, Approximate MUBs (AMUBs) received serious attention in recent time. In this paper, we present a heuristic to obtain AMUBs with significantly good parameters. Given a non-prime dimension $d$, we note the closest prime $d' > d$ and form $d'+1$ MUBs through the existing methods. Then our proposed idea is (i) to apply basis reduction techniques (that are well studied in Machine Learning literature) in obtaining the initial solutions, and finally (ii) to exploit the steepest ascent kind of search to achieve further improved results. The efficacy of our technique is shown through construction of AMUBs in dimensions $d = 6, 10, 46$ from $d' = 7, 11$ and $47$ respectively. Our technique provides a novel framework in construction of AMUBs that can be refined in a case-specific manner. From a kore general view, this approach considers approximately solving a challenge (where efficient deterministic algorithms are not known) mathematical problem in discrete domainthrough state-of-the-art heuristic ideas.
</div>
</details>
<a class="rk-pill rk-external"
    href="https://link.springer.com/chapter/10.1007/978-3-031-07689-3_16"
    target="_blank" rel="noopener noreferrer">Proceedings</a>
</div>
</div>
</article>
</div>
</div>


</section>

<script>
(function(){
  const allBtn = document.querySelector('.rk-htl-all');
  const nodes  = document.querySelectorAll('.rk-htl-node[data-year]');
  const htl    = document.querySelector('.rk-htl');
  const groups = document.querySelectorAll('.rk-group[data-year]');

  function activate(year) {
    const isAll = year === 'all';
    allBtn.classList.toggle('rk-htl-all--active', isAll);
    htl.classList.toggle('rk-htl--filtered', !isAll);
    nodes.forEach(n => {
      n.classList.toggle('rk-htl-node--selected', !isAll && n.dataset.year === year);
    });
    groups.forEach(g => {
      g.style.display = (isAll || g.dataset.year === year) ? '' : 'none';
    });
  }

  allBtn.addEventListener('click', () => activate('all'));
  nodes.forEach(n => n.addEventListener('click', () => activate(n.dataset.year)));
})();
</script>

<!-- ── Live citation counts ───────────────────────────────────────────────
     Shows "Cited by N" on each card. N is the highest of: the last-known counts
     below, Semantic Scholar (live), and OpenAlex (live). Each card's ID is read
     from its arXiv or DOI link; add data-s2="arXiv:XXXX.XXXXX" (or "DOI:…") on an
     <article class="rk-item"> to override. Cards with 0 citations show no tab.
     To remove this feature, delete this comment and the <style> + <script> below. -->
<style>
.rk-pill.rk-cite {
  gap: .32rem;
  font-variant-numeric: tabular-nums;
  animation: rk-cite-in .35s ease both;
  /* undo the site-wide link underline so it matches the Abstract pill */
  box-shadow: none !important;
  border: 1px solid var(--rk-border) !important;
  color: var(--rk-text) !important;
  text-decoration: none !important;
}
.rk-pill.rk-cite:hover {
  background: color-mix(in srgb, var(--rk-accent) 8%, transparent) !important;
  border-color: color-mix(in srgb, var(--rk-accent) 35%, transparent) !important;
  color: var(--rk-accent) !important;
}
body.dark .rk-pill.rk-cite:hover {
  background: color-mix(in srgb, #ddd8d8 10%, transparent) !important;
  border-color: color-mix(in srgb, #ddd8d8 30%, transparent) !important;
  color: #ddd8d8 !important;
}
.rk-pill.rk-cite .rk-cite-n { font-weight: 700; color: var(--rk-accent); }
body.dark .rk-pill.rk-cite .rk-cite-n { color: #ddd8d8; }
.rk-pill.rk-cite:hover .rk-cite-n { color: inherit; }
@keyframes rk-cite-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
</style>
<script>
(function () {
  // Last-known counts (Semantic Scholar, 19 Oct 2026). Shown until a live lookup
  // returns a higher number; safe to update or delete.
  var KNOWN = {
    'arXiv:2504.05431': { c: 0, url: 'https://www.semanticscholar.org/paper/d45364376388f71d79c18512253e2ee30b23508b' },
    'arXiv:2602.23561': { c: 1, url: 'https://www.semanticscholar.org/paper/2bcd5c38a7c77985b08dae221fbd6265c2a66688' },
    'arXiv:2509.19710': { c: 1, url: 'https://www.semanticscholar.org/paper/95ce6d3a90a58a5d6cdc92aac26efcc038aa01f8' },
    'arXiv:2602.14472': { c: 1, url: 'https://www.semanticscholar.org/paper/ce99fd584a6d424021827b2cd82873591b1329a8' },
    'DOI:10.1007/s42519-024-00414-2': { c: 3, url: 'https://www.semanticscholar.org/paper/70a08f1ebcf18d784954d43acb2d0c8d77f18270' },
    'DOI:10.1007/978-3-031-07689-3_16': { c: 2, url: 'https://www.semanticscholar.org/paper/8fba40f7c48ab75b703b6e713cca89ee9d116e44' }
  };
  var S2 = 'https://api.semanticscholar.org/graph/v1/paper/batch?fields=citationCount,url';
  var OA = 'https://api.openalex.org/works?select=doi,cited_by_count&per-page=50&filter=doi:';
  var KEY = 'rk-citations-v2';
  var TTL = 12 * 60 * 60 * 1000;   // live lookups at most every 12 hours per visitor

  function paperId(item) {
    if (item.dataset.s2) return item.dataset.s2;
    var hrefs = Array.prototype.map.call(item.querySelectorAll('a[href]'), function (a) { return a.getAttribute('href'); });
    for (var i = 0; i < hrefs.length; i++) {
      var m = hrefs[i].match(/arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})/i);
      if (m) return 'arXiv:' + m[1];
    }
    for (var j = 0; j < hrefs.length; j++) {
      var d = hrefs[j].match(/(10\.\d{4,9}\/[^\s?#"]+)/);
      if (d) return 'DOI:' + decodeURIComponent(d[1]);
    }
    return null;
  }
  function doiOf(id) {
    return id.indexOf('arXiv:') === 0 ? '10.48550/arxiv.' + id.slice(6) : id.replace(/^DOI:/, '');
  }

  var items = Array.prototype.slice.call(document.querySelectorAll('.rk-item'));
  var ids = items.map(paperId);
  var wanted = ids.filter(Boolean);
  if (!wanted.length) return;

  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  var best = {};
  wanted.forEach(function (id) {
    var k = KNOWN[id] || { c: 0, url: null };
    var c = saved && saved.data && saved.data[id];
    best[id] = { c: Math.max(k.c, c ? c.c : 0), url: (c && c.url) || k.url };
  });

  function merge(id, count, url) {
    if (!(id in best) || typeof count !== 'number') return;
    if (count > best[id].c) best[id].c = count;
    if (url) best[id].url = url;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data: best })); } catch (e) {}
  }
  function render() {
    items.forEach(function (item, k) {
      var rec = ids[k] && best[ids[k]];
      if (!rec || !(rec.c > 0)) return;
      var a = item.querySelector('.rk-cite');
      if (a) { a.querySelector('.rk-cite-n').textContent = rec.c; a.setAttribute('aria-label', 'Cited by ' + rec.c); return; }
      var pills = item.querySelector('.rk-pills');
      if (!pills) return;
      a = document.createElement('a');
      a.className = 'rk-pill rk-cite';
      a.href = rec.url || 'https://www.semanticscholar.org/';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = 'Citation count (Semantic Scholar / OpenAlex)';
      a.setAttribute('aria-label', 'Cited by ' + rec.c);
      a.appendChild(document.createTextNode('Cited by '));
      var n = document.createElement('span');
      n.className = 'rk-cite-n';
      n.textContent = rec.c;
      a.appendChild(n);
      var links = pills.querySelectorAll(':scope > a.rk-external');
      var after = links.length ? links[links.length - 1] : null;
      if (after) after.insertAdjacentElement('afterend', a); else pills.appendChild(a);
    });
  }

  render();                                                        // instant, no network
  if (saved && saved.t && Date.now() - saved.t < TTL) return;      // looked up recently

  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function s2(attempt) {
    // text/plain keeps this a "simple" request (no CORS preflight); the API still parses JSON.
    return fetch(S2, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ ids: wanted }) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (rows) { wanted.forEach(function (id, i) { if (rows[i]) merge(id, rows[i].citationCount, rows[i].url); }); })
      .catch(function () { return attempt < 3 ? wait(1500 * attempt).then(function () { return s2(attempt + 1); }) : null; });
  }
  function oa() {
    var byDoi = {};
    wanted.forEach(function (id) { byDoi[doiOf(id).toLowerCase()] = id; });
    return fetch(OA + Object.keys(byDoi).join('|'))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (j) {
        (j.results || []).forEach(function (w) {
          var id = byDoi[String(w.doi || '').replace('https://doi.org/', '').toLowerCase()];
          if (id) merge(id, w.cited_by_count, null);
        });
      })
      .catch(function () {});
  }
  Promise.all([s2(1).then(render), oa().then(render)]).then(save);
})();
</script>
