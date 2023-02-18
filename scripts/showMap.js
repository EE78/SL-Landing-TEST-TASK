let numOfMap = 0;
let arrOfMaps = new Array(
  "images/map.svg",
  "images/center.svg",
  "images/farEast.svg",
  "images/moscow.svg",
  "images/northWest.svg",
  "images/siberia.svg",
  "images/south.svg",
  "images/ural.svg",
  "images/volga.svg"
);
let map = document.getElementById("map");
function setMoscowMap() {
  map.src = "images/moscow.svg";
}
function setCenterMap() {
  map.src = "images/center.svg";
}
function setAllMap() {
  map.src = "images/map.svg";
}
function setNWMap() {
  map.src = "images/northWest.svg";
}
function setSouthMap() {
  map.src = "images/south.svg";
}
function setVolgaMap() {
  map.src = "images/volga.svg";
}
function setUralMap() {
  map.src = "images/ural.svg";
}
function setSiberiaMap() {
  map.src = "images/siberia.svg";
}
function setFEMap() {
  map.src = "images/farEast.svg";
}