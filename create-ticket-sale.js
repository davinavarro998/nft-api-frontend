const createTicketSaleForm = document.querySelector("#createTicketSaleForm");
const standardTicketCreationInput = document.querySelector(
  "#standardTicketCreationInput"
);
const deluxeTicketCreationInput = document.querySelector(
  "#deluxeTicketCreationInput"
);
const goldenTicketCreationInput = document.querySelector(
  "#goldenTicketCreationInput"
);

createTicketSaleForm.addEventListener("submit",async  (e) => {
  e.preventDefault();
  document.querySelector("#mintNftBtn").style.display = "none";
  renderLoading(true, "createTicketSaleForm");
  const amountOfEachTicketById = new Array(3)
  amountOfEachTicketById[0] = Number(standardTicketCreationInput.value)
  amountOfEachTicketById[1] = Number(deluxeTicketCreationInput.value);
  amountOfEachTicketById[2] = Number(goldenTicketCreationInput.value);
  const initialSupply = {
    amountOfEachTicketById: amountOfEachTicketById
  };
  
  try {
    const response = await createTicketSale(initialSupply)
    console.log(response)
    renderLoading(false, "createTicketSaleForm");
    document.querySelector("#mintNftBtn").style.display = "inline";
  } catch (error) {
    console.log(error)
    renderLoading(false, "createTicketSaleForm");
    document.querySelector("#mintNftBtn").style.display = "inline";
  }
});

async function createTicketSale(data) {
  const response = await fetch("https://nft-gateway.onrender.com/createticketsale", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

function renderLoading(isLoading, parentElementId) {
  const loadingSpinner = document.createElement("div");
  loadingSpinner.id = "spinning";
  if (isLoading) {
    loadingSpinner.className = "loader";
    document.getElementById(parentElementId).appendChild(loadingSpinner);
  } else {
    document.getElementById("spinning").remove();
  }
}
