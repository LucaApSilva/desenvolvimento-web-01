
function openModal(idModal) {
    
    const modal = document.getElementById(idModal)
    modal.style.display = "flex"

}

function closeModal(idModal) {
    const modal = document.getElementById(idModal)
    modal.style.display = "none"
}

function addStockCard(event) {
    event.preventDefault()

    const form = event.target
    const stock ={
        ticker : form.stockTicker.value,
        name : form.stockName.value,
        price : form.stockPrice.value,
        quanty : form.stockQuanty.value
    }

    const stockList = document.getElementById("stockList")

    stockList.innerHTML += `
        <div class="stockCard" id="${stock.ticker}">
                    <header>
                        <div>
                            <h1>${stock.ticker}</h1>
                            <span>${stock.name}</span>
                        </div>
                        <span class="stockvalue">$ ${stock.price}</span>
                    </header>
                    <footer class="stockPosition">
                        <span><b>${stock.quanty} </b>Ações</span>

                        <div>
                            <span>Total</span>
                            <span class="totalStockValeu">$ ${stock.price * stock.quanty}</span>
                        </div>
                    </footer>
                    <div class="stockActions">
                        <button onclick="openModaledit(this)">Editar</button>
                        <button onclick="deleteStockCard(this)">Excluir</button>
                    </div>
                        
                    
                </div>

    `
    closeModal("addStockModal")

}

function openModalEdit(stockButton) {

    const stockCard = stockButton.closest(".stockCard")
    const stock ={
        ticker : stockCard.stockTicker.value,
        name : stockCard.stockName.value,
        price : stockCard.stockPrice.value,
        quanty : stockCard.stockQuanty.value
    }

    const editStockCard = document.getElementById("#editStockModal")

    editStockCard.editstockTicker = stock.ticker
    editStockCard.editstockName = stock.name
    editStockCard.editstockPrice = stock.price
    editStockCard.editstockQuanty = stock.quanty

    openModal("editStockModal")
}

function deleteStockCard(stockButton) {
 
    const stockCard = stockButton.closest(".stockCard")
    stockCard.remove()
}

function editStockCard(event) {
    




}