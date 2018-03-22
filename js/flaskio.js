class FlaskStorageSaver {

    constructor(model,lsname) {
        this.lsname = lsname;
        let self = this
        model.subscribe(function(slist, msg) {
            self.saveFlask(slist)
        })
        // // now restore from localstorage
        // let restore_list = JSON.parse(localStorage.getItem(self.lsname))
        // for(let vals of restore_list) {
        //     let it = new Item(vals.name, vals.quantity, vals.priority, vals.store, vals.section, vals.price)
        //     model.addItem(it)
        // }
    }

    saveFlask(slist) {
        // it does not save the whole object. Instead, it saves all the items.
        // this approach avoids our problem.
        let ls_list = JSON.stringify({newItems:slist.newItems})
        let post_string="http://localhost:5001/saveshoppinglist"

        let config={}
        config.method='POST'
        config.body=ls_list
        config.header={'Content-Type':'application/json','Accept':'application/json'}
        config.mode="cors"

        fetch(post_string,confg).then(function(response){
            console.log(response)
            return response.json
        })
    }

    loadFlask(){
        let model=this.model
        this.model.removeAll()
        let fromFlask=fetch("http://localhost:5001/getshoppinglist")
            .then(function (response) {
                console.log(response)
                return response.json()
            })
            .catch(error => console.error("error: ", error))
            .then(function (myJson) {
                let restoredList=JSON.parse(myJson)
                if (restoredList!=null){
                    for (let val of restoredList){
                        let item = new Item(val.name, val.quantity, val.priority, val.store,
                            val.section, val.price)
                        model.addItem(item)
                        console.log('restored manually')
                    }
                }
                console.log('all done')
            })
    }
}
