(function () {
    // --- Hamburger menu toggle ---
    const trigger = document.querySelector(".menu-trigger");
    if (trigger) {
      trigger.addEventListener("click", () => {
        document.body.classList.toggle("menu-open");
      });
    }
  
    // Close dropdown when a menu link is clicked
    const menu = document.querySelector("#menu");
    if (menu) {
      menu.addEventListener("click", (e) => {
        if (e.target.closest("a")) document.body.classList.remove("menu-open");
      });
    }
  
    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const isMenu = e.target.closest("#menu");
      const isTrigger = e.target.closest(".menu-trigger");
      if (!isMenu && !isTrigger) document.body.classList.remove("menu-open");
    });
  
    // --- Theme handling (PaperMod-compatible) ---
    // PaperMod uses localStorage key "pref-theme" ("dark" or "light")
    const applyTheme = () => {
      const pref = localStorage.getItem("pref-theme");
      if (pref === "dark") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    };
  
    // In case user uses any theme toggle elsewhere
    window.addEventListener("storage", applyTheme);
    applyTheme();
  })();
  