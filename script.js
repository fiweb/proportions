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

    if (a === "x" || a === "X") {
      aInput.value = ((b * c) / d).toFixed(1);
    } else if (b === "x" || b === "X") {
      bInput.value = ((a * d) / c).toFixed(1);
    } else if (c === "x" || c === "X") {
      cInput.value = ((a * d) / b).toFixed(1);
    } else if (d === "x" || d === "X") {
      dInput.value = ((b * c) / a).toFixed(1);
    }
  });

  resetButton.addEventListener("click", function () {
    aInput.value = "";
    bInput.value = "";
    cInput.value = "";
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
      themeIconContainer.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    } else {
      themeIconContainer.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
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
