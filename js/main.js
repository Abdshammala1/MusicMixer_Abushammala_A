const instrumentZones = document.querySelectorAll('.area1'),
instruments = document.querySelectorAll('.items img'),
dropZones = document.querySelectorAll('.elements-container');

const draggagles = [
	"t1",
	"t2",
	"t3",
	"g1",
	"g2",
	"g3",
	"d1",
	"d2",
	"d3",
	"p1",
	"p2",
	"p3"
];

function setInstruments(event) {
draggagles.forEach((piece, index) => {
	instruments[index].src = `images/${piece}.png`;
	instruments[index].id =`${piece}`; 
});
}

function dragStart(event) {
let zone = event.target.parentNode;
event.dataTransfer.setData("text/plain", this.id);
if (zone.classList.contains("filled")) {
	zone.classList.remove("filled");
}
}

function allowDragOver(event) {
event.preventDefault();
}

function allowDrop(event) {
let zone = event.target;
if (zone.classList.contains("filled")) { return false }
let currentPiece = event.dataTransfer.getData("text/plain", this.id);
let currentInstrument = document.querySelector(`#${currentPiece}`);
zone.appendChild(document.querySelector(`#${currentPiece}`));
zone.classList.add('filled');
currentInstrument.classList.add('filled');

tool = document.querySelector(`#${currentPiece}`).id;
audio_source = document.getElementsByClassName('audio_source');


}

window.addEventListener('load', setInstruments);

instruments.forEach(piece => piece.addEventListener('dragstart', dragStart));

dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));
instrumentZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));
instrumentZones.forEach(zone => zone.addEventListener('drop', allowDrop));

function reset() {

for (var i = 0; i < dropZones.length; i++) {
	dropZones[i].innerHTML = "";
	dropZones[i].classList.remove("filled");
}

draggagles.forEach((piece, index) => {
	if (instrumentZones[index].innerHTML == "") {
		instrumentZones[index].innerHTML = "<img src='images/" + piece + ".png' class='icon' id='" + piece + "'>";
	}
});
}