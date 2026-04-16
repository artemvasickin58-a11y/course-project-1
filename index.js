// 📦 подключаем модули
import { startGame, checkNumber, attempts } from "./game.js";
import {
    elements,
    showGameScreen,
    updateMessage,
    updateAttempts,
    clearInput
} from "./ui.js";
import {
    saveRecord,
    renderRecords
} from "./records.js";

let playerName = "";

// ▶ старт игры
elements.startBtn.addEventListener("click", startGameFlow);

elements.nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") startGameFlow();
});

function startGameFlow() {
    playerName = elements.nameInput.value.trim();

    if (!playerName) {
        alert("Введите имя!");
        return;
    }

    showGameScreen(playerName);
    startGame();
}

// 🎯 угадывание
elements.guessBtn.addEventListener("click", handleGuess);

elements.guessInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGuess();
});

function handleGuess() {
    const guess = Number(elements.guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        updateMessage("⛔ Введите число 1-100");
        clearInput();
        return;
    }

    const result = checkNumber(guess);

    if (result === "win") {
        updateMessage("🎉 Победа!");
        saveRecord(playerName, attempts);
        renderRecords(elements.recordList);
    } else if (result === "higher") {
        updateMessage("⬆ Больше");
    } else {
        updateMessage("⬇ Меньше");
    }

    updateAttempts(attempts);
    clearInput();
}

// 🔄 новая игра
elements.newGameBtn.addEventListener("click", () => {
    startGame();
    updateMessage("");
    updateAttempts(0);
});

// 🏆 загрузка рекордов при старте
localStorage.getItem("records")
let records = JSON.parse(localStorage.getItem("records") || "[]");
renderRecords(elements.recordList);

function clearRecords() {
    localStorage.removeItem("records");
}
const clearBtn = document.getElementById("clearRecordsBtn");

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("records");
    renderRecords(elements.recordList);
});