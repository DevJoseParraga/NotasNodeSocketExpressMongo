// archivo para manejar la interface del usuario
import {saveNote, deleteNote } from "./socketFront.js"
//constante para ecuchar las notas
const notesList = document.querySelector("#notes")
//funcion para renderizar una notas en la ui
const noteUi = (note) =>{
   const li = document.createElement("li")
   li.innerHTML= `
   <li>
      <h1>${note.title}</h1> 
      <div>
      <button class ="delete" data-id="${note._id}">Delete</button>
      <button>Update</button>
      </div> 
      <p>${note.description}</p>
   </li>`
    const btnDelete = li.querySelector(".delete")
    
    btnDelete.addEventListener("click", (e) => deleteNote(btnDelete.dataset.id))
   return li
}
//funcion para renderizar todas las notas en la ui
export const renderNotes = (notes) =>{
    notesList.innerHTML = "";
    notes.forEach(notes => notesList.appendChild(noteUi(notes)) );
}
//funcion para manejar el guardado de notas la db 
export const onHandleSubmit = (e) =>{
    e.preventDefault()

    saveNote(noteFrom["title"].value, noteFrom["description"].value)
    console.log(
        "enviado",
        noteFrom["description"].value
        
    );
}
// funcion para agregar la nota al final de la lista 
export const appenNote = note =>{
    notesList.append(noteUi(note))
}