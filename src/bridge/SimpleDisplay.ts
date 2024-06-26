import Draft from "./Draft";
import Display from "./interface/Display";

export default class SimpleDisplay implements Display{
    title(draft: Draft): void {
        console.log(draft.getTitle());
        
    }
    author(draft: Draft): void {
        console.log(draft.getAuthor());
    }
    content(draft: Draft): void {
        const content = draft.getContent()
        content.forEach(
            item =>{
                console.log(item)
            }
        )
    }
    
}