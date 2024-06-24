import Array from "./Array";
import Item from "./Item";
import Iterator from "./interface/iterator";

class ArrayIterator implements Iterator<Item>{
    private index:number
    constructor( private array:Array){
        this.array = array
        this.index = -1
    }

    next(): boolean {
        this.index += 1
        return this.index < this.array.count
    }
    current(): Item {
        return this.array.getItem(this.index)
    }
}

export default ArrayIterator