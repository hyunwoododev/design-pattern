import Aggregator from "./interface/Aggregator";
import ArrayIterator from "./ArrayIterator";
import Item from "./Item";
import Iterator from "./interface/iterator";

class Array implements Aggregator<Item>{
    constructor(private items:Item[]){}

    public getItem(index:number){
        return this.items[index]
    }

    public get count(){
        return this.items.length
    }

    iterator(): Iterator<Item> {
        return new ArrayIterator(this)
    }    
}

export default Array