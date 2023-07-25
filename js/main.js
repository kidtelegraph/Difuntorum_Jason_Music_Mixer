// Variables
const dropZones = document.querySelectorAll(".drop-zone");
const musicInstru = document.querySelectorAll(".music-instru li");
const playBtn = document.getElementById("play-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const artistZone = document.querySelector(".drop-zone-artist");
const artistIcons = document.querySelectorAll(".artist-icons li");

let draggedPiece;
const activeAudios = []; // Array to store currently playing audio elements

// Functions
function handleDragOver(e) {
  e.preventDefault();
  console.log("Dragged over me");
}

const artists = [
    {
      name: "Bob Marley",
      description: "King of Reggae",
      details: ["Bob Marley, born on February 6, 1945, in Nine Mile, Jamaica, was a legendary Jamaican singer, songwriter, and musician who became an iconic figure in the history of reggae music. Raised in poverty, Marley's passion for music blossomed at a young age, influenced by the vibrant sounds of ska and rocksteady that swept through the Caribbean during the 1960s."],
    },
    {
      name: "Freddie Mercury",
      description: "Queen", 
      details: ["Freddie Mercury (1946-1991) was a British singer, songwriter, and the charismatic frontman of the legendary rock band Queen. Mercury's legacy as one of the greatest rock performers of all time endures, and his music continues to resonate with generations of fans long after his untimely death due to complications from AIDS."],
    },
    {
      name: "John Lennon",
      description: "The Beatles",
      details: ["John Lennon (1940-1980) was an English singer, songwriter, and peace activist, best known as one of the founding members of the legendary band, The Beatles. With his distinct songwriting style and poignant lyrics, Lennon played a crucial role in shaping the band's sound and image. After The Beatles' breakup, Lennon embarked on a successful solo career, producing hits like Imagine and Give Peace a Chance, which became anthems of the peace movement."]
    },
    {
      name: "Kurt Cobain",
      description: "Nirvana",
      details: ["Kurt Cobain (1967-1994) was an American singer, songwriter, and the iconic frontman of the grunge band Nirvana. With his raw, emotional vocals and powerful songwriting, Cobain became a symbol of the 1990s alternative rock movement. Nirvana's breakthrough album, Nevermind, featuring the iconic track Smells Like Teen Spirit, catapulted them to international fame, revolutionizing the music scene."]
    },
    {
      name: "Robert Smith",
      description: "The Cure",
      details: ["Robert Smith, born on April 21, 1959, is an English singer, songwriter, and the frontman of the iconic band The Cure. Known for his distinctive voice, signature hairstyle, and unique gothic appearance, Smith became a symbol of the post-punk and goth music movements in the 1980s."]
    },
    {
      name: "Jimi Hendrix",
      description: "Greatest Guitar Solo",
      details: ["Jimi Hendrix (1942-1970) was an American rock guitarist, singer, and songwriter who is widely regarded as one of the most influential and innovative musicians in the history of rock music. Born Johnny Allen Hendrix, he later adopted the stage name Jimi and achieved legendary status for his virtuosic guitar playing and groundbreaking approach to the instrument."]
    },
];
  
function handleDragStart() {
  console.log("Started dragging this piece:", this);
  draggedPiece = this;
  // Store the original parent element and position in the data attribute
  const originalParent = this.parentElement;
  const originalIndex = Array.from(originalParent.children).indexOf(this);
  draggedPiece.setAttribute("data-original-parent", originalParent.className);
  draggedPiece.setAttribute("data-original-index", originalIndex);
}

function handleDrop(e) {
  e.preventDefault();
  console.log("Dropped something on me");

  if (this.children.length >= 1) {
    return;
  }

  this.appendChild(draggedPiece);

  // Play the audio when dropped (for music instruments)
  const audioSrc = draggedPiece.querySelector("audio").src;
  const audio = new Audio(audioSrc);
  activeAudios.push(audio); // Add the audio to the active audios array
  audio.play();
}

function handlePlay() {
  // Play all the active audios
  activeAudios.forEach((audio) => audio.play());
}

function handleStop() {
  // Stop all the active audios
  activeAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function handleReset() {
  // Stop all the active audios and clear the active audios array
  activeAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  activeAudios.length = 0;

  // Move each draggable div back to its original parent element and position
  musicInstru.forEach((piece) => {
    const originalParentClass = piece.getAttribute("data-original-parent");
    const originalParent = document.querySelector(`.${originalParentClass}`);
    if (originalParent) {
      const originalIndex = piece.getAttribute("data-original-index");
      originalParent.insertBefore(piece, originalParent.children[originalIndex]);
    }
  });

  // Move each artist icon back to its original parent element and position
  artistIcons.forEach((piece) => {
    const originalParentClass = piece.getAttribute("data-original-parent");
    const originalParent = document.querySelector(`.${originalParentClass}`);
    if (originalParent) {
      const originalIndex = piece.getAttribute("data-original-index");
      originalParent.insertBefore(piece, originalParent.children[originalIndex]);
    }
  });
}

function handleArtistDrop(e) {
  e.preventDefault();
  console.log("Dropped an artist icon on me");

  if (this.children.length >= 1) {
    return;
  }

  this.appendChild(draggedPiece);
}

function playMixerAnimation() {
    var textElement = document.querySelector('.welcome-text');
    textElement.style.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event Listeners
musicInstru.forEach((piece) => piece.addEventListener("dragstart", handleDragStart));
dropZones.forEach((zone) => {
  zone.addEventListener("dragover", handleDragOver);
  zone.addEventListener("drop", handleDrop);
});

artistIcons.forEach((piece) => piece.addEventListener("dragstart", handleDragStart));
artistZone.addEventListener("dragover", handleDragOver);
artistZone.addEventListener("drop", handleArtistDrop);

playBtn.addEventListener("click", handlePlay);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);