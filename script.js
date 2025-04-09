// Función para manejar la navegación del desplegable en index.html
function navigateToCity() {
  const citySelector = document.getElementById("city-selector");
  const selectedCity = citySelector.value;

  if (selectedCity) {
    window.location.href = `/cities/${selectedCity}.html`; // Usamos rutas absolutas
  }
}

// Añadir el evento onchange al desplegable y manejar el smooth scrolling
document.addEventListener("DOMContentLoaded", () => {
  // Manejar el desplegable
  const citySelector = document.getElementById("city-selector");
  if (citySelector) {
    citySelector.addEventListener("change", navigateToCity);
  }

  // Smooth scrolling para enlaces con anclas
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
