let player = document.getElementById("player");
let volume = document.getElementById("volume");
let playButton = document.getElementById("play");
let playbar = document.getElementById("playbar");
let deck = document.getElementById("song_list");

let playImage = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
    "  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
    "  <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
    "</svg>"

let pauseImage = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause-circle\" viewBox=\"0 0 16 16\">\n" +
    "  <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
    "  <path d=\"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z\"/>\n" +
    "</svg>"

let songs = [
    {
        id: 1,
        title: "Blue Skies",
        author: "",
        image: [
            "public/images/pochettes/150/1.jpg",
            "public/images/pochettes/175/1.jpg",
            "public/images/pochettes/250/1.jpg",
            "public/images/pochettes/340/1.jpg"
        ],
        url: "public/audio/mp3/Blue_Skies.mp3"
    }, {
        id: 2,
        title: "Cartoon Hoedown",
        author: "",
        image: [
            "public/images/pochettes/150/2.jpg",
            "public/images/pochettes/175/2.jpg",
            "public/images/pochettes/250/2.jpg",
            "public/images/pochettes/340/2.jpg"
        ],
        url: "public/audio/mp3/Cartoon_Hoedown.mp3"
    }, {
        id: 3,
        title: "Earthy_Crust",
        author: "",
        image: [
            "public/images/pochettes/150/3.jpg",
            "public/images/pochettes/175/3.jpg",
            "public/images/pochettes/250/3.jpg",
            "public/images/pochettes/340/3.jpg"
        ],
        url: "public/audio/mp3/Earthy_Crust.mp3"
    }, {
        id: 4,
        title: "Hold on a minute",
        author: "",
        image: [
            "public/images/pochettes/150/4.jpg",
            "public/images/pochettes/175/4.jpg",
            "public/images/pochettes/250/4.jpg",
            "public/images/pochettes/340/4.jpg"
        ],
        url: "public/audio/mp3/Hold_On_a_Minute.mp3"
    }, {
        id: 5,
        title: "Stay with you",
        author: "",
        image: [
            "public/images/pochettes/150/5.jpg",
            "public/images/pochettes/175/5.jpg",
            "public/images/pochettes/250/5.jpg",
            "public/images/pochettes/340/5.jpg"
        ],
        url: "public/audio/mp3/Stay_With_You.mp3"
    }, {
        id: 6,
        title: "Symphony N°5",
        author: "",
        image: [
            "public/images/pochettes/150/6.jpg",
            "public/images/pochettes/175/6.jpg",
            "public/images/pochettes/250/6.jpg",
            "public/images/pochettes/340/6.jpg"
        ],
        url: "public/audio/mp3/Symphony_No_5_by_Beethoven.mp3"
    }
]

play = () => {
    if (player.paused) {
        playButton.innerHTML = pauseImage;
        player.play();
    } else {
        playButton.innerHTML = playImage;
        player.pause();
    }
}

for (let i=0; i<songs.length;i++) {
    deck.innerHTML += "" +
        `<div class="col d-flex">` +
        `    <div class="card shadow-sm flex-fill" onclick="player.src='${songs[i].url}'; play()" id="card"> \n`+
        `       <img src="${songs[i].image[0]}" alt="" class="card-img-top d-block d-sm-block d-md-none d-lg-none d-xl-none">\n` +
        `       <img src="${songs[i].image[1]}" alt="" class="card-img-top d-none d-sm-none d-md-block d-lg-none d-xl-none">\n` +
        `       <img src="${songs[i].image[2]}" alt="" class="card-img-top d-none d-sm-none d-md-none d-lg-block d-xl-none">\n` +
        `       <img src="${songs[i].image[3]}" alt="" class="card-img-top d-none d-sm-none d-md-none d-lg-none d-xl-block">\n` +
        "       <div class=\"card-body\">\n" +
        `           <h5 class=\"card-title\">${songs[i].title}</h5>\n` +
        "           <div class=\"card-text text-center\">Nom artiste</div>\n" +
        "       </div>\n" +
        "    </div>\n" +
        "</div>";
}

volumeDown = () => {
    player.volume-=.1;
}

volumeUp = () => {
    player.volume+=.1;
}

volume.value = player.volume*10;
player.onvolumechange = () => {
    volume.value = player.volume*10;
}

volume.onchange = () => {
    player.volume = volume.value/10;
}

playButton.onclick = () => {
    play();
}

player.ontimeupdate = () => {
    let percent = 100;
    playbar.value = player.currentTime*percent/player.duration;
}