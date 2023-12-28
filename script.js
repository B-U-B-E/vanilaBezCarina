const tbody = document.querySelector("tbody");
const totalQuantitySpan = document.querySelector(".totalQuantity span");
const totalCostSpan = document.querySelector(".totalCost span");

let totalQuantity = 0;
let totalCost = 0;

const updateTotals = () => {
  totalQuantity = 0;
  totalCost = 0;

  document.querySelectorAll("tbody tr").forEach((row) => {
    const inputValue = parseFloat(row.querySelector(".input-field").value) || 0;

    console.log(inputValue);
    const cena = parseFloat(row.querySelector(".cena").textContent);
    const sum = cena * inputValue;

    totalQuantity += inputValue;
    totalCost += sum;
  });

  totalQuantitySpan.textContent = totalQuantity.toFixed(2);
  totalCostSpan.textContent = totalCost.toFixed(2);
};

const sumFunction = (row) => {
  const cena = parseFloat(row.querySelector(".cena").textContent);
  let inputValue = parseFloat(row.querySelector(".input-field").value) || 0;
  if (inputValue < 0) {
    row.querySelector(".input-field").value = 0;
    inputValue = 0;
  }
  const sum = cena * inputValue;
  row.querySelector(".sum").textContent = sum.toFixed(2);

  updateTotals();
};

products.forEach((product) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${product.id}</td>
    <td>${product.sifra}</td>
    <td>${product.cv}</td>
    <td>${product.qv}</td>
    <td class="btn"><button>click</button></td>
    <td class="proizvodi" style="text-align:left; min-width:450px">${product.proizvod}</td>
    <td class="cena">${product.cena}</td>
    <td style="padding: 0;width: 100%;">
      <input class="input-field" style="height: 60px;width: 100%; border: none;" type="number">
    </td>
    <td class="sum"></td>
  `;

  tbody.append(tr);

  const inputField = tr.querySelector(".input-field");
  inputField.addEventListener("input", () => {
    sumFunction(tr);
  });
});

const checkBtns = document.querySelectorAll(".btn");

const boldSmileFaceCheck = (btn) => {
  if (btn.innerHTML === "😎") {
    btn.innerHTML = `<button>click</button>`;
  } else {
    btn.innerHTML = `😎`;
  }
};

checkBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.setAttribute("style", "cursor:pointer");
    boldSmileFaceCheck(btn);
  });
});

// Add this JavaScript code to your existing script.js
window.addEventListener("resize", () => {
  const form = document.querySelector(".form");
  const h1Element = document.createElement("h1");
  h1Element.textContent = "BUY FROM BULGARIA, HRVATSKA, ETC.";
  h1Element.style.textAlign = "center";

  if (window.innerWidth <= 900) {
    // If screen width is less than or equal to 900px
    form.innerHTML = ""; // Clear the existing content of the form
    form.appendChild(h1Element); // Append the new h1 element
  } else {
    // If screen width is greater than 900px
    form.innerHTML = `
      <p class="p-input">Начин на испорака: </p>
                            <input type="radio" name="isporaka" id="isporakaCentar">
                            <label class="label-width" for="isporakaCentar">Во дистрибутивен центар </label>
                            <input type="radio" name="isporaka" id="isporakaPosta">
                            <label for="isporakaPosta">Пошта</label>
                            <input type="radio" name="isporaka" id="isporakaKurir">
                            <label class="label-width" for="isporakaKurir">Со курирска услуга </label>
    `;
  }
});

// Trigger the event on page load to initialize the content based on the window width
window.dispatchEvent(new Event("resize"));
