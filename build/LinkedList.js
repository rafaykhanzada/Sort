"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    /**
     *
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    // Add In Last Node
    add(data) {
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
    at(index) {
        if (!this.head) {
            throw new Error("Index Out Of Bound");
        }
        let counter = 0;
        let node = this.head;
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
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is Empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    //Swap
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    //Print
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
    // Return Length of LinkedList
    get length() {
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
exports.LinkedList = LinkedList;
