//First In First Out = FIFO , any  website loading like facebook.

class Queue{
    constructor (){
        this.queue = [];
    }
    enqueue(value){// enqueue = enter queue.
        this.queue.push(value)// unshift use for first add value
    }
    dequeue(value){//dequeue = delete queue
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const serialInBank = new Queue();
    serialInBank.enqueue('Ahique');
    serialInBank.enqueue('siam');
    serialInBank.enqueue('tonmoy');
    serialInBank.enqueue('saif');

    console.log(serialInBank.queue);
    const removerAshik = serialInBank.dequeue();
    console.log(removerAshik);
    console.log(serialInBank.queue);

    