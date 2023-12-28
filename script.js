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
