import Builder from "./builder";
import Data from "./Data";

export default class PlainTextBuilder extends Builder {
    constructor(data:Data){
        super(data)
    }

    head(): string {
        return ""
    }

    body(): string {
        return `Name: ${this.data.name}\n Age: ${this.data.age}\n`
    }
    footer(): string {
        return ''
    }

}