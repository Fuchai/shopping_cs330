'use strict'

var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']
var shoppingList= new ShoppingList()
var mainView= new View(shoppingList)

function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price']
    let vals = []
    let newItem= new Item(document.getElementById('itemname').value,document.getElementById('qty').value,
        document.getElementById('store').value,document.getElementById('category').value,document.getElementById('price').value)
    shoppingList.addItem(newItem)
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})
