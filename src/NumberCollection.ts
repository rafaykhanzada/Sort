export class NumberCollection {
  constructor(public data: number[]) {}
  get length():number{
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    // console.log(this.data[leftIndex], this.data[rightIndex],this.data[leftIndex] > this.data[rightIndex]);
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
