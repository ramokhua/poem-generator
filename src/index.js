function displayPoem(response) {
  let poemText =  response.data.answer;
  new Typewriter("#poem", {
    strings: poemText,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  return poemText;
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e6cc64taaa3ed8def581fc3fao0d0b1c";
  let context = "You are a poet. Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem at the end.";
  let prompt = `User instructions: Generate an English poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
