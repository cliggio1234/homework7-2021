var video;
var volume;
window.addEventListener("load", function() {
	//console.log("Good job opening the window")
	video =document.querySelector("#player1");
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
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
		console.log("Start of Video");
	}
	console.log(video.duration)
	console.log("Current Viewing Location" + video.currentTime);
	video.play();
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


document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Volume Slider");
	video.volume = this.value/100;
	console.log(this.value)
	volume.innerHTML = this.value + "%"
});





