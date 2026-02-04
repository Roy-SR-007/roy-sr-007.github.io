(function(){
    document.querySelectorAll('.post-content pre').forEach(pre=>{
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.textContent = 'Copy';
  
      btn.onclick = async () => {
        const code = pre.querySelector('code')?.innerText || '';
        try{
          await navigator.clipboard.writeText(code);
          btn.textContent = 'Copied';
        }catch(e){
          btn.textContent = 'Failed';
        }
        setTimeout(()=>btn.textContent='Copy', 900);
      };
  
      pre.appendChild(btn);
    });
  })();
  