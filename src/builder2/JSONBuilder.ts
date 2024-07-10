import Builder from "./builder";
import Data from "./Data";

export default class JSONBuilder extends Builder{

    constructor(data:Data){
        super(data)
    }

    head(): string {
        return "{\n"
    }
    body(): string {
        return `"name": "${this.data.name}",\n"age": ${this.data.age}\n`
    }
    footer(): string {
        return "}\n"
    }

}