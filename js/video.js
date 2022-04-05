var video = document.querySelector(".video");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
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
	var t = video.currentTime + 15
	if(t>=video.duration){
		video.currentTime = 0
	}
	else{
		video.currentTime = t
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function (){
	video.muted = video.muted === false;
	if(video.muted){
		document.querySelector("#mute").innerHTML="Unmute"
		console.log("video muted")
	}else {
		document.querySelector("#mute").innerHTML="Mute"
		console.log("video unmuted")
	}
})

document.querySelector("#slider").onchange = function (){
	video.volume = this.value/100
	document.querySelector("#volume").innerHTML = this.value + "%"
	console.log("the current volume is "+this.value+"%")
}

document.querySelector("#vintage").addEventListener("click", function (){
	video.className = "oldSchool"
	console.log("Old School Style!!!")
})
document.querySelector("#orig").addEventListener("click", function (){
	video.className = "video"
	console.log("Back to original style.")
})