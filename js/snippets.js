'use strict'

class Whatever {
    constructor(){

    }

    apple(string,config=false){
        if (config==true){
            console.log(string)
        }
        else{
            console.log(string+"false")
        }
    }
}

let newW=new Whatever()

newW.apple("hello")