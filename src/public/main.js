// js del frontEnd
// este socket emite eventos atraves del objeto io
const socket = io()

socket.on("loadnotes", (data)=>{
console.log(data);
})

const noteFrom1 = document.querySelector("#noteFrom")

noteFrom1.addEventListener("Submit", (e) =>{
    e.preventDefault()
console.log('====================================');
console.log(
    noteFrom1["title"].value,
    noteFrom1["description"].value
);
console.log('====================================');


})
