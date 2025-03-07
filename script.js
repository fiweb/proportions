document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const resetButton = document.getElementById("reset");
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const cInput = document.getElementById("c");
  const dInput = document.getElementById("d");

  calculateButton.addEventListener("click", function () {
    const a = aInput.value;
    const b = bInput.value;
    const c = cInput.value;
    const d = dInput.value;

    if (a === "x") {
      aInput.value = ((b * c) / d).toFixed(1);
    } else if (b === "x") {
      bInput.value = ((a * d) / c).toFixed(1);
    } else if (c === "x") {
      cInput.value = ((a * d) / b).toFixed(1);
    } else if (d === "x") {
      dInput.value = ((b * c) / a).toFixed(1);
    }
  });

  resetButton.addEventListener("click", function () {
    aInput.value = "";
    bInput.value = "";
    cInput.value = "x";
    dInput.value = "";
  });

  const themeToggleButton = document.getElementById("theme-toggle-button");
  const body = document.body;
  const themeIconContainer = themeToggleButton.querySelector(
    ".theme-icon-container"
  );
  const storedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  function setThemeIcon(theme) {
    if (theme === "dark") {
      themeIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" data-replit-metadata="client/src/components/ui/theme-toggle.tsx:18:10" data-component-name="Sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
    } else {
      themeIconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" data-replit-metadata="client/src/components/ui/theme-toggle.tsx:19:10" data-component-name="Moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
    }
  }

  if (storedTheme) {
    body.classList.add(storedTheme);
    setThemeIcon(storedTheme);
  }

  themeToggleButton.addEventListener("click", function () {
    body.classList.toggle("dark");
    let theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    setThemeIcon(theme);
  });
});
