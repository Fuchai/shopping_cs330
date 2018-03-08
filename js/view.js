class View{
    constructor(shoppingList){
        this.parent='shoppinglist'
        this.shoppingList=shoppingList
    }

    refreshView(msg){
        let tbl=document.querySelector('table')
        for (let _=0; _<this.shoppingList.length;_++){
            console.log(ShoppingList.newItems[_].properties)
            this.makeRow(ShoppingList.newItems[_].properties)
        }
        console.log('view refreshed')
    }

    //    for (let cid of rowcolids) {
    //        vals.push(document.getElementById(cid).value)
    //    }

    makeRow(valueList) {
        let row = document.createElement("tr")
        row.classList.add(document.getElementById("priority").value)
        let cb = document.createElement("input")
        cb.type = "checkbox"
        cb.classList.add("form-control")
        row.appendChild(cb)

        for (let val of valueList) {
            let td = document.createElement("td")
            td.innerHTML = val
            row.appendChild(td)
        }
        this.parent.appendChild(row)
    }
}
