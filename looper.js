// Define Howler.js sounds for each track
const tracks = [
  new Howl({
    src: ['audio/drums.mp3'], // Replace with the actual path to your audio file
    loop: true,
    volume: 1,
  }),
  new Howl({
    src: ['audio/keys.mp3'], // Replace with the actual path to your audio file
    loop: true,
    volume: 1,
  }),
  new Howl({
    src: ['audio/guitar.mp3'], // Replace with the actual path to your audio file
    loop: true,
    volume: 1,
  }),
  new Howl({
    src: ['audio/bass.mp3'], // Replace with the actual path to your audio file
    loop: true,
    volume: 1,
  }),
];

// Handle mute buttons
document.getElementById('mute1').addEventListener('click', () => toggleMute(0));
document.getElementById('mute2').addEventListener('click', () => toggleMute(1));
document.getElementById('mute3').addEventListener('click', () => toggleMute(2));
document.getElementById('mute4').addEventListener('click', () => toggleMute(3));

function toggleMute(trackIndex) {
  const track = tracks[trackIndex];
  track.volume(track.volume() === 0 ? 1 : 0); // Toggle volume between 1 and 0
}

// Handle volume sliders
document.getElementById('volume1').addEventListener('input', (e) => setVolume(0, e.target.value));
document.getElementById('volume2').addEventListener('input', (e) => setVolume(1, e.target.value));
document.getElementById('volume3').addEventListener('input', (e) => setVolume(2, e.target.value));
document.getElementById('volume4').addEventListener('input', (e) => setVolume(3, e.target.value));

function setVolume(trackIndex, value) {
  const track = tracks[trackIndex];
  track.volume(parseFloat(value)); // Set volume from the slider
}

// Play All button
document.getElementById('playAll').addEventListener('click', () => {
  tracks.forEach((track) => {
    if (!track.playing()) track.play(); // Play only if not already playing
  });
});

// Stop All button
document.getElementById('stopAll').addEventListener('click', () => {
  tracks.forEach((track) => {
    track.stop(); // Stop all tracks
  });
});