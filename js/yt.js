function playVideo(event) {
    event.preventDefault(); // Biar nggak reload halaman karena klik <a>

    const container = event.currentTarget.closest(".col-md-6");
    const thumbnail = container.querySelector("#thumbnail");
    const videoContainer = container.querySelector("#videoContainer");
    const videoPlayer = container.querySelector("#videoPlayer");

    thumbnail.style.display = "none";
    event.currentTarget.style.display = "none"; // sembunyikan tombol play
    videoContainer.style.display = "block";
    
    // Ganti dengan link video yang kamu inginkan
    videoPlayer.src = "https://www.youtube.com/embed/a3R2GO-9wTc?autoplay=1";
  }