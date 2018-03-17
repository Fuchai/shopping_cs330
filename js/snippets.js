'use strict'

class Hello{
    constructor(a) {
        this.a = a
        a="whose"
    }

    print(){
        console.log(this.a)
    }
}
var a="eh"
var b=a
b="wow"
console.log(a)
var hello=new Hello(a)
hello.print()
a="you"
hello.print()
console.log(b)