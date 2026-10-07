const firstNames = [
  "Alex", "Amara", "Avery", "Cameron", "Casey", "Charlie", "Devon",
  "Elliot", "Emery", "Jamie", "Jordan", "Kai", "Morgan", "Quinn",
  "Riley", "Rowan", "Sage", "Skyler", "Taylor", "Theo"
];

const lastNames = [
  "Bennett", "Brooks", "Chen", "Ellis", "Flores", "Garcia", "Hayes",
  "Kim", "Morgan", "Patel", "Reed", "Rivera", "Shah", "Singh",
  "Taylor", "Turner", "Walker", "Wong", "Young", "Zhang"
];

const result = document.querySelector("#result");
const nameList = document.querySelector("#name-list");
const listMessage = document.querySelector("#list-message");

function chooseRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

document.querySelector("#generate-button").addEventListener("click", () => {
  const name = `${chooseRandom(firstNames)} ${chooseRandom(lastNames)}`;
  result.textContent = name;
  listMessage.textContent = "";
});

document.querySelector("#pick-button").addEventListener("click", () => {
  const names = nameList.value
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);

  if (names.length === 0) {
    listMessage.textContent = "Add at least one name to your list first.";
    nameList.focus();
    return;
  }

  result.textContent = chooseRandom(names);
  listMessage.textContent = "";
});
