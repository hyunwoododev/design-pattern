import Data from "./Data";
import Director from "./Director";
import JSONBuilder from "./JSONBuilder";
import PlainTextBuilder from "./PlainTextBuilder";
import XMLBuilder from "./XMLBuilder";

/**
 * 빌더 패턴은 복잡한 객체를 단계별로 생성하는 디자인 패턴입니다. 
 * 여러 단계의 설정을 통해 객체를 구성할 때 각 단계를 다양한 목적에 맞게 구현할 수 있도록 돕습니다. 
 * 이 패턴은 특히 매개변수가 많은 생성자를 대체하는 데 유용하며, 객체 생성 과정을 더 유연하고 명확하게 만듭니다.
 */

const data = new Data("John", 30);

// const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
const builder = new XMLBuilder(data);

const director = new Director(builder);
const result = director.build();



