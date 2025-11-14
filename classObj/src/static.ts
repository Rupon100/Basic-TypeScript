/*
The static keyword defines class-level properties or methods — meaning:

- They belong to the class itself, not to individual objects (instances).

- You access them without creating an object.
*/


// static
class Counter {
    static count: number = 0;

    static increment(){
        return Counter.count+=1;
    }

    static decrement(){
        return Counter.count-=1;
    }

}
// const instance1 = new Counter();
// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())

// const instance2 = new Counter()
// console.log(instance2.increment())
// console.log(instance2.increment())
// console.log(instance2.increment())

// const instance3 = new Counter();
// console.log(instance3.increment());
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())



 