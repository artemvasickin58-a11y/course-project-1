export function saveRecord(name, attempts) {
    let records = JSON.parse(localStorage.getItem("records")) || [];

    records.push({ name, attempts });

    records.sort((a, b) => a.attempts - b.attempts);
    records = records.slice(0, 10);

    localStorage.setItem("records", JSON.stringify(records));
}

export function renderRecords(listElement) {
    let records = JSON.parse(localStorage.getItem("records")) || [];

    listElement.innerHTML = "";

    records.forEach((rec, i) => {
        const li = document.createElement("li");
        li.textContent = `${i + 1}. ${rec.name} — ${rec.attempts}`;
        listElement.appendChild(li);
    });
}