import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayArticle";
/**
 * 템플릿 패턴은 알고리즘의 구조를 정의하고, 그 알고리즘의 일부 단계를 서브클래스에서 구현하도록 합니다. 
 * 기본적인 흐름은 상위 클래스에서 관리하며, 세부 구현은 하위 클래스에서 결정합니다. 
 * 공통적인 알고리즘 구조를 유지하면서도 특정 단계의 구현을 다양화할 수 있습니다.
 */
const article = new Article("GIS 분야의 업무", 
    [
        "공간 DB 구축 및 가공",
        "위치기반 서비스 개발",
        "지도 기반 업무 시스템 설계 및 개발",
        "공간 정보 3차원 시각화",
        "영상 판독을 위한 딥러닝 학습 및 서비스 개발"
    ],
    "GIS DEVLOPLER"
)

const display = new SimpleDisplayArticle(article)
document.querySelector(".content").innerHTML= display.displayHtml()

document.querySelector(".edit-mode").addEventListener("change",(event)=>{
    let display
    if((<HTMLInputElement>event.target).checked){
        display = new EditableDisplayArticle(article)
    }else{
        display = new SimpleDisplayArticle(article)
    }
    document.querySelector(".content").innerHTML= display.displayHtml()

})