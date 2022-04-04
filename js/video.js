var video = document.querySelector(".video");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function (){
	console.log("Pause Video");
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function (){
	video.playbackRate -= 0.05
	console.log("The playback speed now is " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function (){
	video.playbackRate += 0.05
	console.log("The playback speed now is " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function (){
	console.log("Skip ahead by 15s")
	video.currentTime += 15
})