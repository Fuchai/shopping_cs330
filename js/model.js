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
     
    publish(someobj,msg) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
        console.log(msg)
    }
}

class Item extends Subject {
    constructor(name, quantity, priority, store, section, price) {
        super()
        this.name = name;
        this.quantity = quantity;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this._purchased = false;

    }

    get purchased() {
        return this._purchased;
    }
    
    set purchased(nv) {
        if (this._purchased == false) {
            this._purchased = nv;
            this.publish(this,'removed purchase')
        } else {
            this._purchased = false;
            clearTimeout(this.to)
            this.publish(this,'added purchase')
        }

    }



}



class ShoppingList extends Subject {
    constructor() {
        super()
        this.newItems = []
        this.oldItems = [];
    }

    addItem(it) {
        this.newItems.push(it);
        let self = this;
        it.subscribe(function(scope,msg) {
            self.publish(self, msg)
            if(it.purchased == true) {
                it.to = setTimeout(function() {
                    self.removeItem(it);
                }, 2000)
            }
        });
        this.publish(this, 'newitem')
    }

    removeItem(it) {
        let idx = this.newItems.indexOf(it);
        if(idx > -1) {
            let it = this.newItems.splice(idx, 1)
        }
        this.publish(this,'removed_final')
    }
}

