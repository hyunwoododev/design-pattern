import Builder from "./builder";
import Data from "./Data";

export default class XMLBuilder extends Builder{

    constructor(data: Data) {
        super(data);
    }

    head(): string {
        return `<${this.data.name}>\n`
    }
    body(): string {
        return `Name: ${this.data.name}\n Age: ${this.data.age}\n`
    }
    footer(): string {
        return `</${this.data.name}>\n`
    }
    
}