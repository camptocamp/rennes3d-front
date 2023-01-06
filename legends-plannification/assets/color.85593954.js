const lineColors = {
  1: "indigo",
  2: "pink",
  3: "emerald",
  4: "purple"
};
function getColor(colorType, lineNumber, variant) {
  return `${colorType}-${lineColors[lineNumber]}-${variant}`;
}
export {
  getColor as g
};
