import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import TigerAdapter from "./TigerAdapter";

// 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용할 수 있는 패턴
const list = Array<Animal>()
list.push(new Dog("댕댕이"))
list.push(new Cat("솜털이"))
list.push(new Cat("츄츄"))

list.push(new TigerAdapter("타이온"))

list.forEach((animal)=>{
    animal.sound()
})