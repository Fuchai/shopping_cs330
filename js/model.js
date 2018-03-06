'use strict'
class Item extends Subject{
    constructor(name, quantity, priority, store, section, price) {
        super()
        this.name = name;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;
        this._purchased = false;
    }

    get purchased(){
        return this._purchased
    }

    set purchased(nv){
        this._purchased=nv;
    }

    get propeties(){
        return [this.name,this.priority,this.store,this.section,this.price]
    }
}


class ShoppingList extends Subject{
    constructor() {
        super()
        this.newItems = []
        this.oldItems = [];
    }

    addItem(it) {
        this.newItems.push(it)
        this.publish('added item',this)
    }
}

function refreshView(){
    mainView.refreshView()
}
