
const transferTicketsForm = document.querySelector("#transferTicketsForm")


transferTicketsForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    const data = {
        from: document.querySelector("#Ifrom").value,
        to: document.querySelector("#Ito").value,
        id: Number(document.querySelector("#Iid").value),
        amount: Number(document.querySelector("#Iamount").value)
    }
    renderLoading(true,"transferTicketsForm")
    document.querySelector("#transferBtn").style.display = "none"
    try {
        const response = await transfer(data)
        if(Boolean(response)){
            renderLoading(false)
            console.log(response)
            document.querySelector("#transferBtn").style.display = "inline";
        }
    } catch (error) {
        console.log(error)
        renderLoading(false)
        alert("Error on request")        
        document.querySelector("#transferBtn").style.display = "inline";
    }
})


async function transfer(data) {
    const response = await fetch("https://nft-gateway.onrender.com/transfer", {
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
