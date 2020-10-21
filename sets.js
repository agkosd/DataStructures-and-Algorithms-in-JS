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
    var interSection = new mySet();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        interSection.add(e);
      }
    });
    return interSection;
  }

  difference(otherSet) {
    var firstSet = this.values();
    var differenceSet = new mySet();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  subSet(otherSet) {
    var firstSet = this.values();
    return firstSet.every((e) => {
      return otherSet.has(e);
    });
  }
  values() {
    return this.collection;
  }
}

// let s1 = new mySet();
// let s2 = new mySet();
// s1.add(2);
// s1.add(3);
// s1.add(3);
// s2.add(1);
// console.log(s2.subSet(s1));
// console.log(s1.values());
// console.log(s2.union(s1).values());
// console.log(s2.interSection(s1).values());
// console.log(s1);
// console.log(s2.difference(s1).values());
