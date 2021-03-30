var video;
var volume;
window.addEventListener("load", function() {
	//console.log("Good job opening the window")
	video =document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Original location" + video.currentTime);
	n_time = video,currentTime +15;
	if (n_time >= video.duration){
		video.load();
	}
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted == false){
		video.muted = true
		this.innerHTML = "Unmute"
	}
	else{
			this.innerHTML = "Mute"
			video.muted = false
	}
	console.log(video.muted)
});



document.querySelector("#original").addEventListener("click", function(){
	console.log("Original");
	video.classList.removed("oldSchool")
});

document.querySelector("#old").addEventListener("click", function(){
	console.log("Volume Slider");
	video.volume = this.value/100;
	console.log(this.value)
	volume.innerHTML = this.value + "%"
});


document.querySelector("#volumeSlider").addEventListener("change", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});