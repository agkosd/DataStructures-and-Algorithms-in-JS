class mySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    var firstSet = this.values();
    var secondSet = otherSet.values();
    var unionSet = new mySet();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }

  interSection(otherSet) {
    var firstSet = this.values();
    var secondSet = otherSet.values();
    var interSection = new mySet();
    firstSet.forEach((e) => {
      if (secondSet.has(e)) {
        interSection.add(e);
      }
    });
  }

  difference(otherSet) {
    var firstSet = this.values();
    var secondSet = otherSet.values();
    var differenceSet = new mySet();
    firstSet.forEach((e) => {
      if (!secondSet.has(e)) {
        differenceSet.add(e);
      }
    });
  }

  subSet(otherSet){
    var secondSet = otherSet.values();
    var firstSet=this.values();
    firstSet.every((e)=>{
        if(secondSet.has(e)){
            return true;
        }
    });
  }
  values(){
      return this.collection;
  }
}


let s1 = new mySet();
s1.add(2);
s1.add(3);
s1.add(3);
console.log(s1.values());