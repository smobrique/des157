
document.addEventListener("DOMContentLoaded", function(event) {

var music = document.getElementById('music');
var songlength;
var button = document.getElementById('button');
var scrobble = document.getElementById('scrobble');
var timeline = document.getElementById('timeline');
var timelineWidth = timeline.offsetWidth - scrobble.offsetWidth;

button.addEventListener("click", play);
music.addEventListener("timeupdate", timeUpdate, false);
timeline.addEventListener("click", function(event) {
    movescrobble(event);
    music.currentTime = songlength * clickPercent(event);
}, false);
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}
scrobble.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

var onscrobble = false;

function mouseDown() {
    onscrobble = true;
    window.addEventListener('mousemove', movescrobble, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

function mouseUp(event) {
    if (onscrobble == true) {
        movescrobble(event);
        window.removeEventListener('mousemove', movescrobble, true);
        music.currentTime = songlength * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onscrobble = false;
}

function movescrobble(event) {
    var newMargLeft = event.clientX - getPosition(timeline);
    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        scrobble.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        scrobble.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        scrobble.style.marginLeft = timelineWidth + "px";
    }
}

function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / songlength);
    scrobble.style.marginLeft = playPercent + "px";
    if (music.currentTime == songlength) {
        button.className = "";
        button.className = "play";
    }
}

function play() {
    if (music.paused) {
        music.play();
        button.className = "";
        button.className = "pause";
    } else {
        music.pause();
        button.className = "";
        button.className = "play";
    }
}

music.addEventListener("canplaythrough", function() {
    songlength = music.songlength;
}, false);
});
