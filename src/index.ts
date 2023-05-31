import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumberCollection([10,3,-5,0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharacterCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

 const linkedlist = new LinkedList();
 linkedlist.add(500)
 linkedlist.add(-10)
 linkedlist.add(-3)
 linkedlist.add(4)
 

const sorter = new Sorter(linkedlist);
sorter.sort();

// linkedlist.print()