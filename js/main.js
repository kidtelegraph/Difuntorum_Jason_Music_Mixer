console.log("JS file is connected")

const b_marley = document.querySelector("#b_marley");
const f_mercury = document.querySelector("#f_mercury");
const j_hendrix = document.querySelector("#j_hendrix");
const j_lennon = document.querySelector("#j_lennon");
const k_cobain = document.querySelector("#k_cobain");
const r_smith = document.querySelector("#r_smith");

const electricguitar = document.querySelector("#electricguitar");
const guitar = document.querySelector("#guitar");
const piano = document.querySelector("#piano");
const microphone = document.querySelector("#microphone");
const violin = document.querySelector("#violin");



function logId() {
    console.log(this.id);
}

b_marley.addEventListener("click", logId);
f_mercury.addEventListener("click", logId);
j_hendrix.addEventListener("click", logId);
j_lennon.addEventListener("click", logId);
k_cobain.addEventListener("click", logId);
r_smith.addEventListener("click", logId);

const dropZone = document.getElementById('drop-zone');

/* dropZone.addEventListener('drop', function(event) {
  event.preventDefault();
  window.location.href = 'mixer.html';
});

//Can also be written like this:
//(() => {  })();   

*/



/* function instruAudio {
	
	let guitar = document.createElement("audio");
	guitar.src = "audio/melody_beat.mp3";
	guitar.load();
	document.body.appendChild(guitar);
	guitar.play();
} */

// Info about IIFE https://flaviocopes.com/javascript-iife/