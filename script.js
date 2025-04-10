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
    case "sheikah": return "images/icons/sheikah-eye.png";
    case "hylian": return "images/icons/hylian-crest.png";
    case "goron": return "images/icons/goron-symbol.png";
    case "zora": return "images/icons/zora-symbol.png";
    case "rito": return "images/icons/rito-symbol.png";
    case "gerudo": return "images/icons/gerudo-symbol.png";
    case "yiga": return "images/icons/yiga-symbol.png";
    case "korok": return "images/icons/korok-leaf.png";
    default: return "";
  }
}

