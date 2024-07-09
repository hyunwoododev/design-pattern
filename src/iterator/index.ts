import Array from './Array'
import Item from './Item'
/**
 * Iterator 패턴은 컬렉션 내의 요소들을 순차적으로 접근할 수 있는 방법을 제공하는 디자인 패턴입니다. 
 * 이 패턴은 내부 구조를 노출하지 않고도 컬렉션의 모든 요소를 탐색할 수 있게 합니다.
 * 주요 구성 요소로는 Iterator 인터페이스와 이를 구현하는 구체적인 클래스, 
 * 그리고 반복될 컬렉션을 나타내는 Aggregate 인터페이스가 있습니다.
 */
const items = [
    new Item("쿠쿠다스", 2500),
    new Item("새우깡", 1800),
    new Item("빼뺴로", 1200),
]

const array = new Array(items)
const iter = array.iterator()

while(iter.next()){
    const item = iter.current()
    const domItem = document.createElement("div")
    domItem.innerText =`${item.name} : ${item.cost} 원`
    document.body.appendChild(domItem)
    domItem.classList.add("iterator-item")
}
