const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const nicknameInput = document.getElementById("nickname");
const scoreboard = document.getElementById("scoreboard");
const scoreText = document.getElementById("score");
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let snake, direction, food, score, interval, nickname, highScores;

async function updateScoreboard() {
  try {
    const response = await fetch("http://localhost:3000/api/scores");
    if (!response.ok) throw new Error("Erro ao buscar scores");

    const highScores = await response.json();

    // Limitar aos top 5, ordenar desc por score
    highScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    // Atualizar lista no HTML
    scoreboard.innerHTML = "";
    highScores.forEach(e => {
      const li = document.createElement("li");
      li.textContent = `${e.nickname}: ${e.score}`;
      scoreboard.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao carregar scoreboard:", error);
    scoreboard.innerHTML = "<li>Erro ao carregar scoreboard.</li>";
  }
}

function startGame() {
  snake = [{ x: 10, y: 10 }];
  direction = "right";
  score = 0;
  spawnFood();
  scoreText.textContent = `Pontuação: ${score}`;
  clearInterval(interval);
  interval = setInterval(gameLoop, 200); // Cobra mais lenta
}

function spawnFood() {
  food = {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
  };
}

function gameLoop() {
  const head = { ...snake[0] };
  if (direction === "right") head.x++;
  if (direction === "left") head.x--;
  if (direction === "up") head.y--;
  if (direction === "down") head.y++;

  if (
    head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 ||
    snake.some(s => s.x === head.x && s.y === head.y)
  ) {
    endGame();
    return;
  }

  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreText.textContent = `Pontuação: ${score}`;
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, 400, 400);
  ctx.fillStyle = "#ff003c"; // Neon vermelho
  snake.forEach(p => ctx.fillRect(p.x * 20, p.y * 20, 20, 20));
  ctx.fillStyle = "white";
  ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

function endGame() {
  clearInterval(interval);
  highScores.push({ name: nickname, score });
  localStorage.setItem("snakeScores", JSON.stringify(highScores));
  updateScoreboard();
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

async function endGame() {
  clearInterval(interval);

  if (!nickname) {
    alert("Nickname não definido!");
    return;
  }

  try {
    // Monta o objeto para enviar à API
    const novoScore = {
      nickname: nickname,
      score: score,
      datascore: new Date().getFullYear(), // ou Date.now() se preferir timestamp
      game: "Snake Game"
    };

    // Envia via POST para a API
    const response = await fetch("http://localhost:3000/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoScore)
    });

    if (!response.ok) throw new Error("Erro ao enviar score");

    // Atualiza o scoreboard depois de enviar
    await updateScoreboard();

    // Voltar à tela inicial
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

  } catch (error) {
    console.error("Erro no endGame:", error);
    alert("Erro ao enviar pontuação para o servidor.");
  }
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  if (e.key === "ArrowDown" && direction !== "up") direction = "down";
  if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  if (e.key === "ArrowRight" && direction !== "left") direction = "right";
});

startButton.addEventListener("click", () => {
  nickname = nicknameInput.value.trim();
  if (!nickname) return alert("Insere um nickname!");
  highScores = JSON.parse(localStorage.getItem("snakeScores")) || [];
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startGame();
});

backButton.addEventListener("click", () => {
  clearInterval(interval);
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  updateScoreboard();
});

updateScoreboard();