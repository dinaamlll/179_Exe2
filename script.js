function KirimData(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var favoriteGenre = document.getElementById("favoriteGenre").value;
    var opinion = document.querySelector('input[name="opinion"]:checked').value;
    var comment = document.getElementById("comment").value;

    alert("Nama: " + name + "\n" +
          "Email: " + email + "\n" +
          "Tanggal Lahir: " + dob + "\n" +
          "Genre Musik Favorit: " + favoriteGenre + "\n" +
          "Opini tentang lagu 'Kupu-kupu' - Tiara Andini: " + opinion + "\n" +
          "Komentar Tambahan: " + comment);
}
