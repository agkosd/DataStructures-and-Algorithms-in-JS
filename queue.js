class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    return this.collection.push(element);
  }

  dequeue() {
    return this.collection.shift();
  }

  size() {
    return this.collection.length;
  }

  front() {
    return this.collection[0];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    console.log(this.collection);
  }
}

// let q1 = new Queue();
// q1.enqueue(5);
// q1.enqueue(6);
// q1.enqueue(7);
// q1.enqueue(8);
// q1.dequeue();
// q1.dequeue();
// console.log(q1.front());
// console.log(q1.isEmpty());
// console.log(q1.size());
// q1.print();
