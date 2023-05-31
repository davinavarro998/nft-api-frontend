const standardTicketInput = document.querySelector("#standardTicketInput");
const deluxeTicketInput = document.querySelector("#deluxeTicketInput");
const goldenTicketInput = document.querySelector("#goldenTicketInput");

const standardTicketForm = document.querySelector("#standardTicketForm");
const deluxeTicketForm = document.querySelector("#deluxeTicketForm");
const goldenTicketForm = document.querySelector("#goldenTicketForm");


const mintNftBtn = document.querySelector("#mintNftBtn");

standardTicketForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("#standardTicketBtn").style.display = "none";
  const ticketData = {
    buyerAddress: document.querySelector("#pastedAddressInput").value,
    id: 1,
    amount: Number(standardTicketInput.value),
  };

  renderLoading(true, "standardTicketForm");
  try {
    const response = await buyTicket(ticketData);
    if (Boolean(response)) {
      renderLoading(false);
      document.querySelector("#standardTicketBtn").style.display = "inline";
    }
    console.log(response);
  } catch (error) {
    alert(error);
    renderLoading(false);
    document.querySelector("#standardTicketBtn").style.display = "inline";
  }
});

deluxeTicketForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("#deluxeTicketBtn").style.display = "none";
  const ticketData = {
    buyerAddress: document.querySelector("#pastedAddressInput").value,
    id: 2,
    amount: Number(deluxeTicketInput.value),
  };

  renderLoading(true, "deluxeTicketForm");
  try {
    const response = await buyTicket(ticketData);
    if (Boolean(response)) {
      renderLoading(false);
      document.querySelector("#deluxeTicketBtn").style.display = "inline";
    }
    console.log(response);
  } catch (error) {
    alert(error);
    renderLoading(false);
    document.querySelector("#deluxeTicketBtn").style.display = "inline";
  }
});

goldenTicketForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelector("#goldenTicketBtn").style.display = "none";
  const ticketData = {
    buyerAddress: document.querySelector("#pastedAddressInput").value,
    id: 3,
    amount: Number(goldenTicketInput.value),
  };

  renderLoading(true, "goldenTicketForm");
  try {
    const response = await buyTicket(ticketData);
    if (Boolean(response)) {
      renderLoading(false);
      document.querySelector("#goldenTicketBtn").style.display = "inline";
    }
    console.log(response);
  } catch (error) {
    alert(error);
    renderLoading(false);
    document.querySelector("#goldenTicketBtn").style.display = "inline";
  }
});


async function buyTicket(data) {
  try {
    const response = await fetch("https://nft-gateway.onrender.com/buytickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
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
