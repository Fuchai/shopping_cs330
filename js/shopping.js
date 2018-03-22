var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']

var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)
var storageManager= new StorageManager(shoppingModel,"shoppingList")
var flaskManager= new FlaskStorageSaver(shoppingModel)

function clickedAddItem() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
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

// function saveShoppingList(){
//     localStorage.setItem("shoppingModel",JSON.stringify(shoppingModel))
//     console.log("saveShoppingList run")
// }

// Apparently this does not work. Probably because the constructor is not called
// function loadShoppingList(){
//     var shoppingaModel=JSON.parse(localStorage.getItem("shoppingModel"))
//     shoppingaModel.publish(shoppingModel,"refresh view")
//}



function removeAll(){
    shoppingModel.removeAll()
}

function saveShoppingList(){
    flaskManager.saveFlask(shoppingModel)
    // storageManager.save(shoppingModel)
    // console.log('calling save shopping list')
}

function loadShoppingList(){
    flaskManager.loadFlask()
    // storageManager.load()
    // console.log('calling load shopping list')
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})

$(document).on('click','th',function(){
    shoppingModel.sortBy($(this).text())
    // console.log($(this).text())
})