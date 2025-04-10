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

function getRaceIcon(race) {
  switch (race.toLowerCase()) {
    case "hylian": return "icons/hylian-crest.png";
    case "sheikah": return "icons/sheikah-eye.png";
    case "goron": return "icons/goron-symbol.png";
    case "zora": return "icons/zora-symbol.png";
    case "rito": return "icons/rito-symbol.png";
    case "gerudo": return "icons/gerudo-symbol.png";
    case "yiga": return "icons/yiga-symbol.png";
    case "korok": return "icons/korok-leaf.png";
    default: return ""; 
  }
}

