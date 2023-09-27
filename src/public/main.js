// js del frontEnd
// para importar en el front al contrario del back requerimos aclarar la extencion dela archivo a importar, es decir si es .js/.html. esto es por el estandar del navegador 
import {loadnotes, onNewNote} from "./socketFront.js"

import {onHandleSubmit, renderNotes, appenNote} from "./ui.js"
onNewNote(appenNote)
loadnotes(renderNotes)
const buttonF = document.querySelector("#buttonFrom")
buttonF.addEventListener("click", onHandleSubmit)


