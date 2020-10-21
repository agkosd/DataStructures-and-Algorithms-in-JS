class Stack {
  constructor() {
    this.top = 0;
    this.storage = [];
  }

  isEmpty() {
    if (this.top === 0) {
      return true;
    }
    return false;
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      return "STACK UNDERFLOW";
    }
    this.top--;
    let result = this.storage[this.top];
    delete this.storage[this.top];
    return result;
  }

  peek(){
      if(this.isEmpty()){return "Stack Empty";}
      return this.storage[this.top-1];
  }

  size(){
      return this.top;
  }
}

