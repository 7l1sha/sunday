
let currMoleTiles = []; // Array to track mole positions
let currPlantTiles = []; // Array to track plant positions
let score = 0;
let gameOver = false;
let timeLeft = 60; // 60 seconds

window.onload = function() {
    setGame();
    startTimer();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
      
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMoles, 1000); 
    setInterval(setPlants, 2000); 
}

// Timer function
function startTimer() {
    let timer = setInterval(function() {
        if (gameOver || timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("score").innerText = "TIME UP! Score: " + score;
            gameOver = true;
        } else {
            timeLeft--;
            document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";
        }
    }, 1000); // Decrease time every second
}

// Get random tile index, ensuring no overlap
function getRandomTile(excludeTiles = []) {
    let num;
    do {
        num = Math.floor(Math.random() * 9).toString();
    } while (excludeTiles.includes(num));
    return num;
}
let moleImages = ["./plate.png", "./water_bottle.png"]; // Add your mole images here
let plantImages = ["./syringe.png", "./supplement.png"]; // Add your plant images here

function setMoles() {
    if (gameOver) return;
    currMoleTiles.forEach(tile => tile.innerHTML = ""); // Clear previous moles
    currMoleTiles = [];
    for (let i = 0; i < 2; i++) { // Set 2 moles
        let mole = document.createElement("img");
        mole.src = moleImages[Math.floor(Math.random() * moleImages.length)]; // Random mole image
        mole.style.marginLeft = "10px"; 
        let num = getRandomTile(currMoleTiles.map(tile => tile.id).concat(currPlantTiles.map(tile => tile.id)));
        let tile = document.getElementById(num);
        tile.appendChild(mole);
        currMoleTiles.push(tile);
    }
}

function setPlants() {
    if (gameOver) return;
    currPlantTiles.forEach(tile => tile.innerHTML = ""); // Clear previous plants
    currPlantTiles = [];
    for (let i = 0; i < 2; i++) { // Set 2 plants
        let plant = document.createElement("img");
        plant.src = plantImages[Math.floor(Math.random() * plantImages.length)]; // Random plant image
        plant.style.marginLeft = "10px";        let num = getRandomTile(currPlantTiles.map(tile => tile.id).concat(currMoleTiles.map(tile => tile.id)));
        let tile = document.getElementById(num);
        tile.appendChild(plant);
        currPlantTiles.push(tile);
    }
}


function selectTile() {
    if (gameOver) return;
    if (currMoleTiles.includes(this)) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (currPlantTiles.includes(this)) {
        document.getElementById("score").innerText = "GAME OVER" ;
        gameOver = true;
    }
}
