export const elements = {
    startBtn: document.getElementById("startBtn"),
    guessBtn: document.getElementById("guessBtn"),
    newGameBtn: document.getElementById("newGameBtn"),

    startScreen: document.getElementById("start-screen"),
    gameScreen: document.getElementById("game-screen"),

    nameInput: document.getElementById("playerName"),
    guessInput: document.getElementById("guessInput"),

    message: document.getElementById("message"),
    attemptsText: document.getElementById("attempts"),
    welcome: document.getElementById("welcome"),

    recordList: document.getElementById("recordList")
};

export function showGameScreen(name) {
    elements.startScreen.classList.add("hidden");
    elements.gameScreen.classList.remove("hidden");
    elements.welcome.textContent = `👤 ${name}`;
}

export function updateMessage(text) {
    elements.message.textContent = text;
}

export function updateAttempts(count) {
    elements.attemptsText.textContent = `Попытки: ${count}`;
}

export function clearInput() {
    elements.guessInput.value = "";
    elements.guessInput.focus();
}
function clearRecords() {
    localStorage.removeItem("records");
    renderRecords(elements.recordList);
}