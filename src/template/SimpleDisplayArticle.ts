import Article from "./Article";
import DisplayArticleTemplate from "./DisplayArticleTemplate";

export default class SimpleDisplayArticle extends DisplayArticleTemplate{
    constructor(article:Article){
        super(article)
    }

    protected titleHtml(): string {
        return `<h1>${this.article.getTitle()}</h1>`
    }
    protected contentHtml(): string {
        const items = this.article.getContent().map(item => `<li>${item}</li>`)
        return `<ul>${items.join('')}</ul>`
    }
    protected footerHtml(): string {
        return `<h1>${this.article.getFooter()}</h1>`
    }
    
}