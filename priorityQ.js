class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  print() {
    console.log(this.collection);
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.slice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.collection.shift();
    }
  }

  front() {
    return this.collection[0];
  }
}

// let pq = new PriorityQueue();
// pq.enqueue([1,1]);
// pq.enqueue([1,2]);
// pq.enqueue([3,2]);
// pq.dequeue();
// pq.print();