var video = document.querySelector("#myVideo");
var volume;
window.addEventListener("load", function() {
	//console.log("Good job opening the window")

	volume = document.querySelctor("#volume");
});

//document.querySelctor("play").addEventListener("click", function() {
	//console.log("Play Video");
	//video.play();
	//volume.innerHTML = "100%"
//});

//document.querySelector("#pause").addEventListener("click", function(){
//	console.log("Pause Video");
//	video.pause();
//});

function getVid(){
	video = document.querySelector("#myVideo");
}
function playVid(){
	console.log("Play Video");
	volume.innerHTML = "100%"
	video.play();
	

}

function pauseVid(){
	console.log("Pause Video");
	video.pause();
}

function increaseSpeed(){
	video.playbackRate = video.playbackRate * 0.95;
	console.log("Speed is "+ video.playbackRate);
}

function descreaseSpeed(){
	video.playbackRate = video.playbackRate * 1.05;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead(){
	video.currentTime = video.currentTime + 15;
	if (video.ended){
		video.load();
		video.play();
		playbackRate = 1;
	}
	console.log("Cureent location is " + video.currentTime)
}

function mute(){
	if(video.muted){
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted")
	}
}

function changeVolume(){
	console.log(volumeSlider.value);
	var val_slider = document.querySelector("#volume").innerHTML;
	val_slider = volumeSlider.value;
	video.volume = val_slider / 100;
	document.querySelector('#volume').innerHTML = val_slider + '%';
}

function gray(){
	video.classList.add("grayscale");
	console.log("In grayscale");
}








