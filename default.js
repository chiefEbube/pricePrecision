const popupCard = document.querySelector("#pop-up")
const addProductButton = document.querySelector("#add-product-btn")

addProductButton.addEventListener("click", function(){
    popupCard.style.visibility = "visible"
})

document.getElementById("close").addEventListener("click", function(){
    popupCard.style.visibility = "hidden"
})