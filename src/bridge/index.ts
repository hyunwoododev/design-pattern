import CaptionDisplay from "./CaptionDisplay"
import CharacterCounter from "./CharacterCount"
import Draft from "./Draft"
import SimpleDisplay from "./SimpleDisplay"

/**
 * 브리지 패턴(bridge pattern)은 기능 계층과 구현 계층을 분리하여,
 * 새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써
 * 복잡도를 효과적으로 낮춥니다.  
 * 이 패턴을 통해 클래스 계층 구조의 확장을 유연하게 처리할 수 있습니다. 
 */
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