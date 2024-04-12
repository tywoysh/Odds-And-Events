// State
const state = {
  num: [],
  odd: [],
  even: [],
};

// References
const numberBank = document.querySelector("#numberOutput");
const oddsBank = document.querySelector("#oddsOutput");
const evensBank = document.querySelector("#evensOutput");
const form = document.querySelector("form");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");

// TODO: Add event listener so that the number is added to number bank when form is submitted
form.addEventListener("submit", addToNumBank);
sortOne.addEventListener("click", sortOneNumber);
sortAll.addEventListener("click", sortAllNumbers);

function addToNumBank(event) {
  event.preventDefault();

  const numToAdd = parseInt(form.elements.number.value);
  if (!isNaN(numToAdd)) {
    state.num.push(numToAdd);
  }

  console.log(state.num);

  render();
}

render();

function render() {
  // Render numbers to number bank
  const numsAddedToBank = state.num.map((nums) => {
    if (nums !== "") {
      const element = document.createElement("span");
      element.textContent = `${nums} `;
      return element;
    }
  });
  numberBank.replaceChildren(...numsAddedToBank);

  // TODO: Render nums to odds bank
  const oddNumbers = state.odd.map((nums) => {
    const element = document.createElement("span");
    element.textContent = `${nums} `;
    return element;
  });
  oddsBank.replaceChildren(...oddNumbers);

  // TODO: Render nums to evens bank
  const evenNumbers = state.even.map((nums) => {
    const element = document.createElement("span");
    element.textContent = `${nums} `;
    return element;
  });
  evensBank.replaceChildren(...evenNumbers);
}

function sortOneNumber() {
  const numToSort = state.num.pop();
  if (numToSort % 2 === 1) {
    state.odd.push(numToSort);
  } else {
    state.even.push(numToSort);
  }

  console.log("evens", state.even);
  console.log("odd", state.odd);
  render();
}

function sortAllNumbers() {
  const sortedNumbers = state.num.map((elem) => {
    if (elem % 2 === 1) {
      state.odd.push(elem);
    } else {
      state.even.push(elem);
    }
  });
  console.log("evens", state.even);
  console.log("odd", state.odd);
  render();
}
