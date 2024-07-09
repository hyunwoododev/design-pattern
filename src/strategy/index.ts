import SumPrinter from "./SumPrinter";
import GaussSumStrategy from "./sum-strategy/GaussSumStrategy";
import LoopSumStrategy from "./sum-strategy/LoopSumStrategy";

/**
 * 전략 패턴은 객체의 행위를 바꾸고 싶을 때 사용하며, 
 * 행위를 클래스로 캡슐화하고 동적으로 객체에 행위를 설정할 수 있게 합니다. 
 * 이는 코드의 유연성과 재사용성을 높여주며, 조건문을 줄여 코드의 가독성을 향상시킵니다. 
 */
const printer = new SumPrinter()
const dom1 = document.createElement("h1")
document.body.append(dom1)

const dom2 = document.createElement("h1")
document.body.append(dom2)

printer.print(new LoopSumStrategy(), 100, dom1)
printer.print(new GaussSumStrategy(), 100, dom2)