class Playlist {

    name;
    id;
    link = "#";
    img = "placeholder.jpg"

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

}

const playlists = [new Playlist("Playlist 1", "play1"), new Playlist("Playlist 2", "play2"), new Playlist("Playlist 3", "play3")];

function addPlaylists() {

    playlists.forEach(playlist => {

        document.getElementById("library").innerHTML += `<a href="${playlist.link}">
                                                            <div class="playlist" id="${playlist.id}">
                                                                <img src="../images/${playlist.img}">
                                                                <h1>${playlist.name}</h1>
                                                            </div>
                                                        </a>`
    });

}

addPlaylists();
console.log(playlists[1].name)