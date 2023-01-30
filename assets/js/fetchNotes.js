
fetch("/db").then(res=>res.json()).then(data=>{
    console.log(data)
    data.forEach(note=>{
        const myLi = document.createElement("li");
        myLi.textcontent = `${note.title}: ${note.text}`
        document.querySelector(".card").append(myLi);
    })
})
document.querySelector("#saveNote").addEventListener("submit", e=>{
    e.preventDefault();
    const newNoteObj = {
        title:parseInt(document.querySelector("#noteTitle").value),
        text:document.querySelector("#noteText").value
    }
    console.log(newNoteObj)
    fetch("/db", {
        method:"POST",
        body:JSON.stringify(newNoteObj),
        headers: {
            "Content-type":"application/json"
        }
    }).then(res=>{
        console.log(res)
        if(res.ok){
            location.reload()
        }else{
            alert("trumpet sound")
        }
    })
})