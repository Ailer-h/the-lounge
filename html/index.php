<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/library_style.css">
    <title>Library</title>
</head>

<body>

    <div class="bar">
        <h1>The Lounge</h1>

        <div>
            <a href="#"><button>Search</button></a>
            <a href="#"><button>New Playlist</button></a>
            <a href="#"><button onclick="goToPlaylist()">Profile</button></a>
        </div>
    </div>

    <div class="center">
        <div class="library" id="library">
        </div>
    </div>
</body>
<script src="../js/library.js"></script>

</html>