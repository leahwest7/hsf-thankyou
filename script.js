import "./buttonEffect.js";
import "./snowAnimation.js";
import generatePresent from "./3DPresent.js";

generatePresent({
  selector: ".presents-1",
  size: 140,
  highlight: "#8C1746",
  shadow: "#5B0F41",
  ribbonHighlight: "#B8225E",
  ribbonShadow: "#781356"
});

generatePresent({
  selector: ".presents-2",
  size: 55,
  highlight: "#329F4A",
  shadow: "#18744B",
  ribbonHighlight: "#8C1746",
  ribbonShadow: "#5B0F41"
});

generatePresent({
  selector: ".presents-3",
  size: 175,
  highlight: "#4F33F3",
  shadow: "#101987",
  ribbonHighlight: "#329F4A",
  ribbonShadow: "#183A31"
});
