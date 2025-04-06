function navigateToCity() {
  const citySelector = document.getElementById("city-selector");
  const selectedCity = citySelector.value;

  if (selectedCity) {
    window.location.href = `cities/${selectedCity}.html`;
  }
}

// Add smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }
});
