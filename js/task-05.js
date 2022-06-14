// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const onInputType = input.addEventListener("input", (event) => {
  if (input.value === "") {
    return (span.innerHTML = "Anonymous");
  }
  return (span.textContent = event.currentTarget.value);
});
