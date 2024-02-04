let notesConatainer=document.querySelector(".notes-container");
let createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function showNotes(){
    notesConatainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesConatainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img")
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
 notesConatainer.appendChild(inputBox).appendChild(img);
})

notesConatainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})