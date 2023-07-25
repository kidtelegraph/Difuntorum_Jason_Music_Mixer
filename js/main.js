console.log("JS file connected");

// Variables
const theButtons = document.querySelectorAll("#buttonControls img"),
    soundStage = document.querySelector(".sound-stage"),
    musicInstruDiv = document.querySelector(".music-instru"),
    artistIconsDiv = document.querySelector(".artist-icons"),
    dropZones = document.querySelectorAll(".drop-zone"),
	artistZone = document.querySelectorAll(".drop-zone-artist"),
    playBtn = document.getElementById("play-btn"),
    stopBtn = document.getElementById("stop-btn"),
    trackBtn = document.getElementById("track-btn"),
    volumeBtn = document.getElementById("volume-btn"),
    audio = document.getElementById("audio"),
    musicInstru = document.querySelectorAll(".music-instru li");
	artistIcons = document.querySelectorAll(".artist-icons li");


let draggedPiece;


//functions
function handleDragOver(e) {
  e.preventDefault();
  console.log("Dragged over me");
}
    
function handleStartDrag() {
  console.log("Started dragging this piece:", this);
  draggedPiece = this;
}
    
function handleDrop(e) {
  e.preventDefault();
  console.log("Dropped something on me");
      if (this.children.length >= 1) {
        return;
    }
    
      this.appendChild(draggedPiece);
}

function resetMusicInstruDiv() {
	musicInstru.forEach((piece) => {
	  piece.classList.remove("dropped");
	  piece.parentNode.removeChild(piece);
	  musicInstruDiv.appendChild(piece);
	});
}

function resetArtistIconsDiv() {
	artistIcons.forEach((piece) => {
	  piece.classList.remove("dropped");
	  piece.parentNode.removeChild(piece);
	  artistIconsDiv.appendChild(piece);
	});
}

// Event Listeners
musicInstru.forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach((zone) => {
  zone.addEventListener("dragover", handleDragOver);
  zone.addEventListener("drop", handleDrop);
});

artistIcons.forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));
artistZone.forEach((zone) => {
	zone.addEventListener("dragover", handleDragOver);
	zone.addEventListener("drop", handleDrop);
});

playBtn.addEventListener("click", playBtn);
stopBtn.addEventListener("click", stopBtn);

const resetBtn = document.getElementById("reset-btn");
	resetBtn.addEventListener("click", resetMusicInstruDiv);
	resetBtn.addEventListener("click", resetArtistIconsDiv);
// resetButton.addEventListener("click", resetArtistIconsDiv);