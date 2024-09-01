// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0; // Counter for matched pairs

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flip');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = checkIfMatch(firstCard, secondCard);
        isMatch ? disableCards() : unflipCards();
    }

    function checkIfMatch(card1, card2) {
        return card1.dataset.name === card2.dataset.name;
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matchedPairs += 1; // Increment matched pairs counter

        if (matchedPairs === cards.length / 2) {
            // All pairs matched
            alert('Congratulations! You matched all pairs!');
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 36);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener('click', flipCard));
});

let startTime, timerInterval;
const timerElement = document.getElementById('timer');

// Function to start the timer
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    timerElement.textContent = `Time: ${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time values as two digits
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

// Function to check if all matches are made
function checkAllMatchesMade() {
    // Assuming you have a way to track matched pairs
    if (matchedPairs === cards.length / 2) {
        clearInterval(timerInterval); // Stop the timer
    }
}

// Example function to handle card click (needs implementation based on your logic)
function handleCardClick(card) {
    // Your card click logic here
    // After handling card clicks, check if all matches are made
    checkAllMatchesMade();
}

// Initialize the game
startTimer();

