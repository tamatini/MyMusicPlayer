let player = document.getElementById("player");
let volume = document.getElementById("volume");
let playButton = document.getElementById("play");
let playbar = document.getElementById("playbar");

let playImage = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
    "  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
    "  <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
    "</svg>"

let pauseImage = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause-circle\" viewBox=\"0 0 16 16\">\n" +
    "  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
    "  <path d=\"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z\"/>\n" +
    "</svg>"

function play() {
    if (player.paused) {
        playButton.innerHTML = pauseImage;
        player.play();
    } else {
        playButton.innerHTML = playImage;
        player.pause();
    }
}

function volumeDown() {
    player.volume-=.1;
}

function volumeUp() {
    player.volume+=.1;
}

volume.value = player.volume*10;
player.addEventListener("volumechange", () => {
    volume.value = player.volume*10;
})

volume.addEventListener("change", () => {
    player.volume = volume.value/10;
})

playButton.addEventListener("click", () => {
    play();
})

player.ontimeupdate = () => {
    let percent = 100;
    playbar.value = player.currentTime*percent/player.duration;
}