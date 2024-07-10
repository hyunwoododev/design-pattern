import ThreeDButton from "./3DButton"
import ThreeDCheckBox from "./3DCheckBox"
import ThreeDTextEdit from "./3DTextEdit"
import Button from "./Button"
import CheckBox from "./CheckBox"
import TextEdit from "./TextEdit"
import UIFactory from "./UIFactory"

export default class ThreeDUIFactory extends UIFactory {

    createButton(dom: HTMLElement, caption:string): Button {
        return new ThreeDButton(dom, caption)
    }
    createCheckbox(dom: HTMLElement, caption:string, checked:boolean): CheckBox {
        return new ThreeDCheckBox(dom, caption, checked)
    }

    createTextEditor(dom: HTMLElement, text:string): TextEdit {
        return new ThreeDTextEdit(dom, text)
    }
}