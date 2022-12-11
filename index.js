const btn = document.getElementById('btn');
const cir = document.getElementById('circle');
const form = document.querySelector("form");
const log = document.querySelector("#log");
const guess = document.getElementById('guessDisplay');

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Submitted';
  cir.textContent = 'Zizi lol';
});



form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "";
    for (const entry of data) {
      output = `${entry[1]}\n`;
    }
    log.textContent = output;
    guess.innerHTML = log.textContent;
    event.preventDefault();
  },
  false
);


