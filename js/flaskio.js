class FlaskStorageManager {

    constructor(model) {
        this.model=model
        let self = this
        model.subscribe(function(slist, msg) {
            self.saveFlask(slist,auto=true)
        })

        this.loadFlask(auto=true)
    }

    saveFlask(slist,auto=false) {
        // it does not save the whole object. Instead, it saves all the items.
        // this approach avoids our problem.
        let ls_list = JSON.stringify(slist.newItems)
        let post_string="/shoppinglist"
        if (auto==true){
            post_string=post_string+"auto"
        }

        let config={}
        config.method='POST'
        config.body=ls_list
        config.header={'Content-Type':'application/json','Accept':'application/json'}

        fetch(post_string,config)
        //works!
            // .then(function(response){
            // console.log(response)
            // return response.json
            // })
            // .catch(error => console.error("error: ", error))
            // .then(function (myJson) {
            //     document.getElementById("result").innerHTML = myJson.answer;
            //     console.log('all done')
            // })
    }

    loadFlask(auto=false){
        console.log("start loading")
        let model=this.model
        this.model.removeAll()
        let config={}
        config.method='GET'
        config.header={'Content-Type':'application/json','Accept':'application/json'}

        get_string="/shoppinglist"
        if (auto==true){
            get_string=post_string+"auto"
        }
        let fromFlask=fetch(get_string,config)
            .then(function (response) {
                console.log(response)
                // console.log("parse:"+JSON.parse(response))
                // return response.json()
                return response.json()
            })
            .catch(error => console.error("error: ", error))
            .then(function (myJson) {
                let jsjsj=JSON.stringify(myJson)
                console.log("jsjsjs"+jsjsj)


                console.log(JSON.stringify(myJson))
                // This line took me 30 minutes.
                // How does it make any sense? I stringified before
                // I saved it.
                myJson=JSON.stringify(myJson)
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
