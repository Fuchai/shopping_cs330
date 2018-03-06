class View{
    constructor(model){
    }

    refreshView(shoppingList,msg){
        let tbl=document.querySelector('table')
        for (let item of itemList){
            makeRow(item.properties,document.getElementById('shoppinglist'))
        }
        console.log('view refreshed')
    }
}
