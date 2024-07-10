import Car from "./Car";
import CarBuilder from "./CarBuilder";

/**
 * 빌더패턴 1 : 복잡한 설정으로 구성된 객체를 좀더 효과적으로 생성하기 위한 패턴
 * 생성자 인자가 너무 많거나, 여러 단계에 걸쳐 객체가 생성되야 하는 상황일때
 */

// 인자가 너무 많음
const car1 = new Car(
    "V8",
    true,
    "Black",
    false,
    false
)

// 메서드 체이닝 방식으로 설계하는 방식
const car2 = new CarBuilder()
    .setEngine("V8")
    .setAirbag(true)
    .setColor("Black")
    .setCameraSensor(false)
    .setAEB(false)
    .build()