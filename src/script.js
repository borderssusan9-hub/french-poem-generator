function displayPoem(response) {
  console.log("poem generated");
  let typewriter = new Typewriter("#poem-output", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
}); 
}
function generatePoem(event) {
    event.preventDefault();
let instructionsInputElement = document.querySelector("#user-instructions");
let apiKey = "406a75450d5d3330f1t1d188ef66ofb8";
let context = "You are a romantic French poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem on another line and not at the beginning. Put an English translation of the poem in parentheses after the French poem. Do not include any other text or explanation.";
let prompt = `User instructions: Generate a French poem about ${instructionsInputElement.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemOutputElement = document.querySelector("#poem-output");
poemOutputElement.classList.remove("hidden");
poemOutputElement.innerHTML = `<div class="generating">⏳Generating your French poem about ${instructionsInputElement.value}... with an English translation in parentheses.</div>`;

console.log("Generating poem...");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);
axios.get(apiURL).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);