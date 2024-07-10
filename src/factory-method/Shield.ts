import Item from "./interface/Item";

export default class Shield implements Item {
    use(): string {
        return "방패를 사용했습니다."
    }
}