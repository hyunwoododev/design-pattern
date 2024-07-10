import Car from "./Car";
import CarBuilder from "./CarBuilder";

/**
 * 빌더패턴 1 : 인스턴스를 생성하는 인자가 너무 많을때, 메서드 체이닝 선형 방식으로 설계하는 방식
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