import Draft from "./Draft";
import Display from "./interface/Display";

export default class CaptionDisplay implements Display{
    title(draft: Draft): void {
        console.log(`제목 : ${draft.getTitle()}`);
        
    }
    author(draft: Draft): void {
        console.log(`저자 : ${draft.getAuthor()}`);
    }
    content(draft: Draft): void {
        const content = draft.getContent()
        content.forEach(item =>
                console.log(`      ${item}`)
            
        )
    }
    
}