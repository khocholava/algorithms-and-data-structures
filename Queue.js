function Queue() {
    let items = [];
    this.enqueue = function (element) {
        return items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.print = function () {
        console.log(items.toString());
    };
    this.size = function () {
        return items.length;
    };
}

class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) return 'Underflow';
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return 'No Element In Queue';
        return this.items[0];
    }

    isEmpty() {
        return this.items === 0;
    }

    rear() {
        if (this.isEmpty()) return 'No elements in queue';
        return this.items[this.items.length - 1];
    }

    printQueue() {
        let str = '';
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + ' ';
        }
        return str;
    }
}
