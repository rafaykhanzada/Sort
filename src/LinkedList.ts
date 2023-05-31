class Node {
  next: Node | null = null;
  /**
   *
   */
  constructor(public data: number) {}
}
export class LinkedList {
  head: Node | null = null;

  // Add In Last Node
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  // AT Method
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index Out Of Bound");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error("Index Out Of Bound");
  }

  //Compare

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  //Swap

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  //Print

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  // Return Length of LinkedList
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 0;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
}
