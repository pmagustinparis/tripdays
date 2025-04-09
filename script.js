// Función para enfocar el primer elemento de la sección de destinos (usada por el botón "Choose Your Destination")
function focusCitySelector() {
  const firstCityCard = document.querySelector(".city-card");
  if (firstCityCard) {
    firstCityCard.scrollIntoView({ behavior: "smooth" });
    firstCityCard.focus();
  } else {
    console.warn("No se encontraron tarjetas de ciudades.");
  }
}
