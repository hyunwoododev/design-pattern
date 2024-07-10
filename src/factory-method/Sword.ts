import Item from "./interface/Item";

export default class Sword implements Item{
    use(): string {
        return "검을 사용했습니다."
    }
}