function showTooltip(e, text) {
  const tooltip = document.getElementById("tooltip");
  tooltip.innerText = text;
  tooltip.style.display = "block";
  tooltip.style.left = e.pageX + 10 + "px";
  tooltip.style.top = e.pageY + 10 + "px";
}

function hideTooltip() {
  document.getElementById("tooltip").style.display = "none";
}
