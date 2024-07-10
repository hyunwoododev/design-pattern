import Builder from "./builder"

export default class Director{
    constructor(protected builder:Builder){}

    build(){
        return `${this.builder.head()}${this.builder.body()}${this.builder.footer()}`
    }
}