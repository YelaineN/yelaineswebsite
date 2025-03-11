
document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("sound1");
    var buttonSound = document.getElementById("buttonSound");
  
    // Toggle play/pause on button click
    buttonSound.addEventListener("click", function () {
      if (audio.paused) {
        audio.play(); // Play audio
        buttonSound.innerHTML = '<i class="fas fa-pause"></i>'; // Change icon to pause
      } else {
        audio.pause(); // Pause audio
        buttonSound.innerHTML = '<i class="fas fa-music"></i>'; // Change icon to music
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var homeBubble = document.getElementById("home-bubble");  // Home bubble link
    var sound2 = document.getElementById("sound2");  // Sound element

    // Listen for clicks on the home bubble
    homeBubble.addEventListener("click", function (event) {
        event.preventDefault();  // Prevent immediate page transition

        // Play the sound
        sound2.play();

        // Delay the redirection based on the sound duration
        setTimeout(function () {
            window.location.href = "secondpage.html";  // Redirect to next page
        }, sound2.duration * 1000);  // Delay by the duration of the audio (in milliseconds)
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.getElementById("backButton");  // Back button element
    var sound3 = document.getElementById("sound3");  // Sound element for the back button

    // Listen for clicks on the back button
    backButton.addEventListener("click", function (event) {
        event.preventDefault();  // Prevent immediate page transition

        // Play the audio
        sound3.play();

        // Delay the back navigation based on the audio duration
        setTimeout(function () {
            window.history.back();  // Go to the previous page
        }, sound3.duration * 1000);  // Delay by the duration of the audio (in milliseconds)
    });
});




