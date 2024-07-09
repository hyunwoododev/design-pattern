import { ItemName } from "./Factory";
import ItemFactory from "./ItemFactory";

/**
 * Factory 패턴은 객체 생성 인터페이스와 구현 부분을 완전히 분리하여 객체 생성 과정을 캡슐화하는 디자인 패턴입니다. 
 * 이를 통해 객체 생성의 세부 사항을 숨기고, 다양한 구현을 템플릿처럼 정의하여 유연하게 사용할 수 있습니다. 
 * 클라이언트 코드에서는 객체 생성 방식을 몰라도 되므로 결합도가 낮아지고, 유지보수와 확장이 용이해집니다. 
 * 다양한 객체를 생성해야 할 때 특히 유용합니다.
 */
const factory = new ItemFactory();
const domOutput = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => 
    button.addEventListener("click", (event) => {
        const itemName = (event.target as HTMLElement).innerText as ItemName;
        const item = factory.create(itemName);
        if (item) {
            domOutput.value += `\n${item.use()}`;
        } else {
            domOutput.value += `\n${itemName}을 사용할 수 없습니다! ㅠ_ㅠ`;
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    })
);
