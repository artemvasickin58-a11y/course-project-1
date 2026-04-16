export let randomNumber = 0;
export let attempts = 0;

export function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
}

export function checkNumber(guess) {
    attempts++;

    if (guess === randomNumber) return "win";
    if (guess < randomNumber) return "higher";
    return "lower";
}