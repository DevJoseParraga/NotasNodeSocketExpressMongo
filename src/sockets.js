// socket de  backEnd
// este socket escucha eventos atraves del objeto io

import { Socket } from "socket.io";
import note from "./models/note"

export default (io) =>{

    io.on("connection", (socket)=>{

        console.log("new user connection");
        //consulta a la db
        const emitNotes = async () => {

            // find consulta todas las notas registradas en el servidor
           const notes = await note.find()
           io.emit("server:loadnotes", notes)
        }
        //emitNote hace una consulta al servidor y retorna una lista de notas
        emitNotes()
        //escuho del cliente
        socket.on("cliente:newnote", async (data) =>{
            console.log(data);
          const newNote = new note(data)
          const saveNote = await newNote.save() 
          //envia al servidor socket
          io.emit("server:newnote", saveNote )  
        //   console.log('====================================');
        //   console.log(saveNote);
        //   console.log('====================================');
        })
        socket.on("client:deletenote", async (id) => {
            await note.findByIdAndDelete(id)
            //emitNote hace una consulta al servidor y retorna una lista de notas
            emitNotes()
        })
    })
}
