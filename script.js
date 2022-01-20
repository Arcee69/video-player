document.addEventListener("DOMContentLoaded", 
                            function () {startPlayer(); }, 
                            false);

                            //Created a player variable
let player;
let d;

// Function to start the player and remove the browser default controls 
function startPlayer() {
    player = document.getElementById("video-player");
    player.controls = false;
    player.autoplay = true;
    player.muted = true;    
}

// Play function
function playVid() {
    player.play();
}

// Pause function 
function pauseVid() {
    player.pause();
}

// Stop function
function stopVid() {
    player.pause();
    player.currentTime = 0;
}

// Volume function
function setVolume() {
    player.volume = document.getElementById('change-vol').value;
}

// Autoplay
function setAutoPlay() {
    if (player.autoplay === true) {
        return playVid();
    };
}

// Mute
function isMuted() {
    if (player.muted = true) {
        return player.volume = 0;
    } else if (player.muted = false) {
        return player.volume = 0.5;
    }
}


function getMute() {
    if (isMuted() === true) {
        console.log("Audio is muted");
    } else {
        console.log("Audio is unmuted");
    }
}

// Get Width
function getWidth() {
    console.log(player.width);
}

function getDuration() {
    d = new Date();
    duration = d.getSeconds();
    console.log ('Time Spent on this video is ' + duration + ' Seconds')
}