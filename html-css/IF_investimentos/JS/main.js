
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

    console.log(stockList)

    stockList.innerHTML += `
        <div class="stockCard">
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
                        <button onclick="">Editar</button>
                        <button onclick="">Excluir</button>
                    </div>
                        
                    
                </div>

    `
    closeModal("addStockModal")

}