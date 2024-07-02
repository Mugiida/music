// main.js

function playSong(songName) {
	var audio = document.getElementById("myAudio");
	var source = document.getElementById("audioSource");

	// Set the source of the audio element based on the song name
	switch (songName) {
		case "hynm":
			source.src = "hynmfortheweekend.mp3";
			break;
		case "duvet":
			source.src = "duvvet.mp3";
			break;
		case "new":
			source.src = "new.mp3";
			break;
		case "streams":
			source.src = "streams.mp3";
			break;
		default:
			source.src = "";
	}

	// Load and play the audio
	audio.load();
	audio.play();
}
