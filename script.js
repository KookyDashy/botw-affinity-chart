function showTooltip(e, element) {
  const name = element.getAttribute("data-name");
  const subtitle = element.getAttribute("data-subtitle");
  const race = element.getAttribute("data-race");
  const location = element.getAttribute("data-location");

  const tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = `
    <strong>${name}</strong><br>
    <em>${subtitle}</em><br>
    Race: ${race}<br>
    Location: ${location}
  `;

  tooltip.style.display = "block";
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
}

function hideTooltip() {
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

