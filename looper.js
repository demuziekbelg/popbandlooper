// Array to store Howler.js sound objects for 4 tracks
const tracks = [
  new Howl({
      src: ['audio/drums.mp3'],
      loop: true,  // Make the track loop
      volume: 1,   // Initial volume (100%)
  }),
  new Howl({
      src: ['audio/keys.mp3'],
      loop: true, 
      volume: 1,
  }),
  new Howl({
      src: ['audio/guitar.mp3'],
      loop: true, 
      volume: 1,
  }),
  new Howl({
      src: ['audio/bass.mp3'],
      loop: true, 
      volume: 1,
  })
];

// Flag to track the mute state of each track
let muteState = [false, false, false, false];

// Function to toggle mute on click of track image
function toggleMute(index) {
  if (muteState[index]) {
      // Unmute the track
      tracks[index].volume(1);
      document.getElementById(`track${index + 1}`).style.opacity = 1;
  } else {
      // Mute the track
      tracks[index].volume(0);
      document.getElementById(`track${index + 1}`).style.opacity = 0.5;
  }
  
  // Toggle mute state
  muteState[index] = !muteState[index];
}

// Function to play all tracks
function playAll() {
  // Stop all tracks before playing
  tracks.forEach(track => {
    track.stop();  // Ensure the track is stopped before playing
    track.play();  // Start playing the track
  });
}

// Function to stop all tracks
function stopAll() {
  tracks.forEach(track => track.stop());
}