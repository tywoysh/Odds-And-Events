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
const randNumber = document.querySelector("#randomNumber");
const sortAmountInput = document.querySelector("#sortNumber");
const sortAmountButton = document.querySelector("#selectedSort");
const dropdown = document.querySelector("#asc-desc");
const updateDropdown = document.querySelector('#update');


// TODO: Add event listener so that the number is added to number bank when form is submitted
form.addEventListener("submit", addToNumBank);
sortOne.addEventListener("click", sortOneNumber);
sortAll.addEventListener("click", sortAllNumbers);
randNumber.addEventListener("click", addRandomNumber);
sortAmountButton.addEventListener("click", sortSelectedAmount);
updateDropdown.addEventListener("click", sortAllNumbers);

// Set sort max amount to number of items in bank
function setSortAmount() {
  let sortAmount = state.num.length;
  sortAmountInput.setAttribute("max", sortAmount);
  render();
}

function addToNumBank(event) {
  event.preventDefault();

  const numToAdd = parseInt(form.elements.number.value);
  if (!isNaN(numToAdd)) {
    state.num.push(numToAdd);
  }
  setSortAmount();
  render();
}

render();

function render() {
  // Render numbers to number bank
  const numsAddedToBank = state.num.map((nums) => {
    const element = document.createElement("span");
    element.textContent = `${nums} `;
    return element;
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
  if (numToSort % 2 === 1 || numToSort % 2 === -1) {
    state.odd.push(numToSort);
  } else if (numToSort % 2 === 0) {
    state.even.push(numToSort);
  }
  setSortAmount();
  sortAscDesc();
  render();
}

function sortAllNumbers() {
  const sortedNumbers = state.num.map((elem) => {
    if (elem % 2 === 1 || elem % 2 === -1) {
      state.odd.push(elem);
    } else {
      state.even.push(elem);
    }
  });
  setSortAmount();
  sortAscDesc();
  state.num = [];
  render();
}

function addRandomNumber() {
  const rand = Math.floor(Math.random() * 1000);
  state.num.push(rand);
  setSortAmount();
  render();
}

function sortSelectedAmount() {
  for (let i = 0; i < sortAmountInput.value; i++) {
    console.log(sortAmountInput.value);
      if (state.num[state.num.length-1] % 2 === 1 || state.num[state.num.length-1] % 2 === -1) {
        state.odd.push(state.num[state.num.length-1]);
        state.num.pop()
      } else {
        state.even.push(state.num[state.num.length-1]);
        state.num.pop()
      };
  }
  setSortAmount();
  sortAscDesc();
  sortAmountInput.value = 0;
  render();
}

function sortAscDesc() {
  if(dropdown.value === "Ascending") {
    state.odd.sort((a,b) => a-b);
    state.even.sort((a,b) => a-b);
  } else {
    state.odd.sort((a,b) => b-a);
    state.even.sort((a,b) => b-a);
  }

}


