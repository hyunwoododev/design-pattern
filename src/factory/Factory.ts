import Item from "./interface/Item";
export type ItemName = "bow" | "sword" | "shield"

export default abstract class Factory{
    // item class를 생성하기 위한 절차가 템플릿처럼 정의되어 있음.
    protected abstract isCreateable(name: ItemName):boolean
    protected abstract createItem(name: ItemName): Item
    protected abstract postprocessItem(name:ItemName): void

    public create(name: ItemName): Item{
        if(!this.isCreateable(name)) return null
        const item = this.createItem(name)
        this.postprocessItem(name)
        return item
    }
}