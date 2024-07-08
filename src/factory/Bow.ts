import Item from "./interface/Item";

export default class Bow implements Item{
    use(): string {
        return "활을 사용했습니다."
    }
}