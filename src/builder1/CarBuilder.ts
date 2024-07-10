import Car from "./Car"

export default class CarBuilder {
    private engine: string = undefined
    private airbag: boolean = false
    private color: string = undefined
    private cameraSensor: boolean = false
    private AEB: boolean = undefined



    setEngine(engine: string) {
        this.engine = engine
        return this
    }

    setAirbag(airbag: boolean) {
        this.airbag = airbag
        return this
    }

    setColor(color: string) {
        this.color = color
        return this
    }

    setCameraSensor(cameraSensor: boolean) {
        this.cameraSensor = cameraSensor
        return this
    }

    setAEB(AEB: boolean) {
        this.AEB = AEB
        return this
    }

    build(): Car {
        if(this.engine === undefined) return null
        if(this.color === undefined) return null
        if(this.AEB === undefined) return null
        
        return new Car(this.engine, this.airbag, this.color, this.cameraSensor, this.AEB)
    }

}