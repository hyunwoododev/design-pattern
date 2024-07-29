import Button from "./Button";
import CheckBox from "./CheckBox";
import TextEdit from "./TextEdit";

export default abstract class UIFactory{
    abstract createButton(dom: HTMLElement, caption:string): Button
    abstract createCheckbox(dom: HTMLElement, label:string, checked:boolean): CheckBox
    abstract createTextEditor(dom: HTMLElement, text:string): TextEdit
}
