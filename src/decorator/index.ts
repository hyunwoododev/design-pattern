import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./String";

/**
 * 데코레이터 패턴(Decorator Pattern)은 객체의 기능을 동적으로 추가하거나 확장할 수 있는 구조적 디자인 패턴입니다.
 * 이 패턴은 상속을 사용하지 않고도 객체의 행동을 유연하게 확장할 수 있게 해줍니다.
 */

const domPre = document.querySelector("pre");

const strs = new Strings();
strs.add('Hello!');
strs.add('My name is Kim Hyoung-Jun.');
strs.add('I am a GIS Developer.');
strs.add('Design-Pattern is a powerful tool.');

const d1 = new SideDecorator(strs, '"');
const d2 = new LineNumberDecorator(d1);
const d3 = new BoxDecorator(d2);

d3.print(domPre);
