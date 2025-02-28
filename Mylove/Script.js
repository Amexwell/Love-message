document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("myAudio");

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  if (audio) {
    if (getQueryParam("play") === "true") {
      audio.play();
    }

    let playButton = document.getElementById("playButton");
    if (playButton) {
      playButton.addEventListener("click", function () {
        audio.play();
      });
    }

    let navButton = document.getElementById("navButton");
    if (navButton) {
      navButton.addEventListener("click", function () {
        window.location.href = "CintaHati.html?play=true";
      });
    }
  } else {
    console.error("Audio element with ID 'myAudio' not found.");
  }
});
