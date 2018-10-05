class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    push(data) {

        //if the top of the stack is empty, then the data will be the
        //top of the stack

        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        //if the top already has something then create a new node
        //add data to the new node
        // have the pointer point to the top

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {

        //in order to remove the top of the stack, you have to point
        //the pointer to the next item and that next item becomes the
        //top of the stack

        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    if (!stack.top) {
        return;
    } else {
        console.log(stack.top.data);
    }
}

function display(stack) {
    while(iDontKnow) {
        if (!stack.top) {
        return;
    }
    console.log(stack.top.data)
    }
}

// Kirk, Spock, McCoy, Scotty

function main() {
    const starTrek = new Stack();
    starTrek.push('Kirk');
    console.log(JSON.stringify(starTrek));
    starTrek.push('Spock');
    console.log(JSON.stringify(starTrek));
    starTrek.push('McCoy');
    console.log(JSON.stringify(starTrek));
    starTrek.push('Scotty');
    starTrek.pop('Scotty');
    console.log(JSON.stringify(starTrek));

    peek(starTrek);

}

main();






