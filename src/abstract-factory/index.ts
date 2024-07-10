import ThreeDUIFactory from "./3DUIFactory";
import FlatUIFactory from "./FlatUIFactory";
import UIFactory from "./UIFactory";

let factory : UIFactory
const flatMode = false

if(flatMode){
    factory = new FlatUIFactory()
}else{
    factory = new ThreeDUIFactory()
}


const domButton = document.querySelector(".button") as HTMLElement
const domCheckbox = document.querySelector(".checkbox") as HTMLElement
const domTextEditor = document.querySelector(".textedit") as HTMLElement


factory.createButton(domButton, "BUTTON")
factory.createCheckbox(domCheckbox, "Checkbox", true)
factory.createTextEditor(domTextEditor, "DesignPattern")