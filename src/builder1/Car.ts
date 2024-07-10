export default class Car{
    constructor(
        private _engine: string,
        private _airbag: boolean,
        private _color: string,
        private _cameraSensor: boolean,
        private _AEB: boolean
    ){}

    print():void{
        console.table(this)
    }
}