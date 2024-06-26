import CaptionDisplay from "./CaptionDisplay"
import CharacterCounter from "./CharacterCount"
import Draft from "./Draft"
import SimpleDisplay from "./SimpleDisplay"

// 기능 계층과 구현 계층을 분리함.
// 새로운 기능을 추가할때는 기능 계층을 확장하고 새로운 구현을 추가 할때는 구현 계층을 확장함으로써 복잡도를
// 효과적으로 낮출 수 있음.

const title = "복원된 지구"
const author = "도현우"
const content = [
    "플라스틱 사용의 감소와",
    "바다 생물 어획량 감소로 인하여",
    "지구는 복원 되었다."
]

// const draft = new Draft(title, author, content)

const draft = new CharacterCounter(title, author, content)
// const display = new SimpleDisplay()
const display = new CaptionDisplay()

draft.print(display)
console.log(`전체 문자수 : ${draft.getCharactersCount()}`)