'use strict';

class Subject {

    constructor() {
        this.handlers = []
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    publish(someobj, msg) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope,msg)
        }
    }
}


class Item extends Subject{
    constructor(name, quantity, priority, store, section, price) {
        super()
        this.name = name;
        this.quantity = quantity;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this._purchased = false;
        this.parent;

    }

    get purchased() {
        return this._purchased;
    }
    
    set purchased(nv) {
        this._purchased = nv;
        alert(`${this.name} was purchased`)
        this.publish(this.parent,'purchased publish')
    }
}


class ShoppingList extends Subject {
    constructor() {
        super()
        this._newItems = []
        this.oldItems = [];
    }

    addItem(it) {
        it.parent=this
        this.newItems.push(it)
        it.subscribe(this.publish)
        this.publish(this,'newitem')
        console.log("item added")
    }

    get newItems(){
        return this._newItems
    }

    set newItems(value) {
        this._newItems = value;
    }
}

