// En este archivo tendremos la logica del socket de FrontEnd
// este socket emite eventos atraves del objeto io
const socket = io()
 // funcion que consulta al backend y trae las notas cargadas
export const loadnotes = (callBack) =>{
    socket.on("server:loadnotes", callBack )
}
// funcion para guardar notas en el servidor 
export const saveNote = (title, description) =>{
    socket.emit("cliente:newnote",{
        title,description
    })
} 
// funcion para escuchar cuando el server nos manda el evento de la nota
export const onNewNote = (callback) =>{
    socket.on("server:newnote",callback);
    
}

export const deleteNote = (id) =>{
    socket.emit("client:deletenote", id);
}