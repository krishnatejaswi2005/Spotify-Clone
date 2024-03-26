let audioElement = new Audio("music1.mp3");
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let forward = document.getElementById("forward");
let myProgressBar = document.getElementById("scroll");
let songInfo = document.getElementById("songInfo");
let idx = 0;
let songs = [
	{
		songName: "Chaleya",
		filePath: "music1.mp3",
		
	},
	{
		songName: "Bandeya Re Bandeya",
		filePath: "music2.mp3",
		
	},
	{
		songName: "Jhoome Jo Pathaan",
		filePath: "music3.mp3",
		
	},
	{
		songName: "Sooraj Dooba Hain",
		filePath: "music4.mp3",
		
	},
	{
		songName: "Main Tera Boyfriend",
		filePath: "music5.mp3",
		
	},
	{
		songName: "Lehra Do",
		filePath: "music6.mp3",
		
	},
];
masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play");
		masterPlay.classList.add("fa-pause");
		const currentSongElement = document.getElementsByClassName("songItem")[idx];
		currentSongElement
			.querySelector(".songItemPlay")
			.classList.remove("fa-play-circle");
		currentSongElement
			.querySelector(".songItemPlay")
			.classList.add("fa-pause-circle");
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-pause");
		masterPlay.classList.add("fa-play");
		changeIcon();
	}
});
previous.addEventListener("click", () => {
	if (idx == 0) {
		idx = 0;
	} else {
		idx -= 1;
	}
	audioElement.src = songs[idx].filePath;
	audioElement.currentTime = 0;
	audioElement.play();
	songInfo.innerText = songs[idx].songName;
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play");
		masterPlay.classList.add("fa-pause");
		const currentSongElement = document.getElementsByClassName("songItem")[idx];
		changeIcon();

		currentSongElement
			.querySelector(".songItemPlay")
			.classList.remove("fa-play-circle");
		currentSongElement
			.querySelector(".songItemPlay")
			.classList.add("fa-pause-circle");
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-pause");
		masterPlay.classList.add("fa-play");
		changeIcon();
	}
});
forward.addEventListener("click", () => {
	if (idx == 5) {
		idx = 0;
	} else {
		idx += 1;
	}
	audioElement.src = songs[idx].filePath;
	audioElement.currentTime = 0;
	audioElement.play();
	songInfo.innerText = songs[idx].songName;
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play");
		masterPlay.classList.add("fa-pause");
		const currentSongElement = document.getElementsByClassName("songItem")[idx];
		changeIcon();

		currentSongElement
			.querySelector(".songItemPlay")
			.classList.remove("fa-play-circle");
		currentSongElement
			.querySelector(".songItemPlay")
			.classList.add("fa-pause-circle");
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-pause");
		masterPlay.classList.add("fa-play");
		changeIcon();
	}
});

audioElement.addEventListener("timeupdate", () => {
	progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
	myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
	audioElement.currentTime =
		(myProgressBar.value * audioElement.duration) / 100;
});
let changeIcon = () => {
	Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
		element.querySelector(".songItemPlay").classList.add("fa-play-circle");
		element.querySelector(".songItemPlay").classList.remove("fa-pause-circle");
	});
};
Array.from(document.getElementsByClassName("songItem")).forEach(
	(element, index) => {
		element.addEventListener("click", () => {
			audioElement.src = songs[index].filePath;
			idx = index;
			audioElement.currentTime = 0;
			audioElement.play();
			masterPlay.classList.remove("fa-play");
			masterPlay.classList.add("fa-pause");
			changeIcon();
			element.querySelector(".songItemPlay").classList.remove("fa-play-circle");
			element.querySelector(".songItemPlay").classList.add("fa-pause-circle");
			songInfo.innerText = songs[index].songName;
		});
	}
);
