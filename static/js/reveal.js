(function(){
    const els = [...document.querySelectorAll('.post-content > *')];
    els.forEach(el => el.classList.add('reveal'));
  
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('is-visible');
      });
    }, { threshold: 0.08 });
  
    els.forEach(el => io.observe(el));
  })();
  