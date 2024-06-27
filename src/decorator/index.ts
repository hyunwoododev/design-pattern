import BoxDecorator from "./BoxDecorator";
import LineNumberDecorator from "./LineNumberDecorator";
import SideDecorator from "./SideDecorator";
import Strings from "./String";

// decorator 패턴은 어떤 객체에 기능(장식)을 적용할때 그객체와 적용될 기능을 동일시 하 수 있음
// 다양한 기능을 중첩해서 적용할수있고 적용되는 기능의 순서에 따라 다른 결과를 얻을 수 있음.

const strs = new Strings();
strs.add('Hello!');
strs.add('My name is Kim Hyoung-Jun.');
strs.add('I am a GIS Developer.');
strs.add('Design-Pattern is a powerful tool.');

const domPre = document.querySelector("pre");

// strs.print(domPre);
const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);
const d2 = new LineNumberDecorator(d1);
// d2.print(domPre);
const d3 = new BoxDecorator(d2);
d3.print(domPre);
