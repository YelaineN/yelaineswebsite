
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

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const gameWrapper = document.getElementById("game-wrapper");
  const successMessage = document.getElementById("successMessage");

  const images = ["palette.png", "mascara.png", "lipstick.png"];
  let cards = [];
  let flippedCards = [];
  let matchedCards = 0;
  const totalPairs = images.length;

  // Shuffle function to randomize the cards
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Start game function
  function startGame() {
    matchedCards = 0;
    gameWrapper.innerHTML = '';
    successMessage.style.display = 'none';
    startButton.style.display = 'none';
    restartButton.style.display = 'inline-block';
    gameWrapper.style.display = 'grid';

    // Create an array of pairs of cards
    cards = [...images, ...images];
    shuffleArray(cards);

    // Create card elements and append them to the game grid
    cards.forEach((image, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.id = index;

      const cardFront = document.createElement('div');
      cardFront.classList.add('card_front');
      const imgFront = document.createElement('img');
      imgFront.src = image;
      cardFront.appendChild(imgFront);

      const cardBack = document.createElement('div');
      cardBack.classList.add('card_back');
      const imgBack = document.createElement('img');
      imgBack.src = image;
      cardBack.appendChild(imgBack);

      card.appendChild(cardFront);
      card.appendChild(cardBack);
      card.addEventListener('click', flipCard);
      gameWrapper.appendChild(card);
    });
  }

  // Flip a card
  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('is-flipped')) {
      this.classList.add('is-flipped');
      flippedCards.push(this);

      // Check if two cards are flipped
      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  }

  // Check if flipped cards match
  function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.querySelector('.card_back').querySelector('img').src === card2.querySelector('.card_back').querySelector('img').src) {
      matchedCards++;
      if (matchedCards === totalPairs) {
        successMessage.style.display = 'block';
      }
    } else {
      card1.classList.remove('is-flipped');
      card2.classList.remove('is-flipped');
    }

    flippedCards = [];
  }

  // Restart the game
  function restartGame() {
    startGame();
  }

  // Event listeners for the buttons
  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', restartGame);
});
