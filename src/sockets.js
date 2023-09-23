// socket de  backEnd
// este socket escucha eventos atraves del objeto io
import note from "./models/note"

export default (io) =>{

    io.on("connection", ()=>{

        console.log("new user connection");
        //consulta a la db
        const emitNotes = async () => {

            // find consulta todas las notas registradas en la base de datos
           const notes = await note.find()
           io.emit("loadnotes", notes)
           console.log('====================================');
           console.log(notes);
           console.log('====================================');
        }
        emitNotes()
    })
}