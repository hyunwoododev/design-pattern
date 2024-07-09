import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import TigerAdapter from "./TigerAdapter";

/**
 * 어댑터 패턴(Adapter Pattern)은 서로 호환되지 않는 인터페이스를 가진 클래스들이 함께 작동할 수 있도록 변환하는 패턴입니다. 
 * 이 패턴은 클라이언트가 기대하는 인터페이스를 제공하는 어댑터 클래스를 통해 기존 클래스의 인터페이스를 변환하여 호환성을 확보합니다.
 */
const list = Array<Animal>()

list.push(new Dog("댕댕이"))
list.push(new Cat("솜털이"))
list.push(new Cat("츄츄"))

list.push(new TigerAdapter("타이온"))

list.forEach((animal)=>{
    animal.sound()
})