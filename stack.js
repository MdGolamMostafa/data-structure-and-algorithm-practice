//Last In First Out = LIFO 
// stack program exciting example is 'ctrl+z'

// stack program simple example
const friendsOld = []
friendsOld.push(12)
friendsOld.push(44)
friendsOld.push(55)
friendsOld.push(54)
friendsOld.push(78)
console.log(friendsOld);
friendsOld.pop(friendsOld);
console.log(friendsOld)



// stack program class based example.

class Stack {
    constructor() {
        this.stack = [];
    }
    add(value) {
        this.stack.push(value);
    }
    remove(){
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();// create new a class stack

guest.add('saad');
guest.add('sabit');
guest.add('esan');
guest.add('rohan');
guest.add('sifat');

console.log(guest.stack);

const lastComingMan = guest.remove();

console.log('last man not playing here ::-',lastComingMan);

console.log(guest);
console.log(guest.stack);