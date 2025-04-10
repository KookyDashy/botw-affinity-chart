function showTooltip(e, element) {
  const name = element.getAttribute("data-name");
  const subtitle = element.getAttribute("data-subtitle");
  const race = element.getAttribute("data-race");
  const location = element.getAttribute("data-location");

  const raceImage = getRaceIcon(race);

  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = `
    <img src="${raceImage}" class="race-icon" alt="${race} symbol" />
    <strong>${name}</strong><br>
    <em>${subtitle}</em><br>
    Race: ${race}<br>
    Location: ${location}
  `;

  tooltip.style.display = "block";
  tooltip.style.left = e.pageX + 20 + "px";
  tooltip.style.top = e.pageY + 20 + "px";
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

