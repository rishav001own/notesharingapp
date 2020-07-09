import React, { useState } from "react";
import axios from 'axios'

function NoteArea() {
  const [postedby,setpostedby]=useState("")
  const [title,settitle]=useState("")
  const [body1,setbody]=useState("")

 
const noter = (e) =>{
e.preventDefault()
if(postedby.length === 0 || title.length === 0 || body1.length === 0){
    alert("Fill blanks Part")
    return;
}
let body={
    postedby:postedby,
    title:title,
    body:body1
}
axios.post('http://localhost:9888/createnotepost',body).then(res=>{
    let url=window.location.href+'note/'+res.data.note._id
    if(prompt("Copy to clipboard: Ctrl+C, Enter", url)){
        window.location.href=url
    }
})
}


  return (
    <div>
      <form>
      <input
          name="postedby"
          placeholder="UserName...."
          onChange={(e)=>{setpostedby(e.target.value)}}
        />
        <input
          name="title"
          placeholder="Title.."
          onChange={(e)=>{settitle(e.target.value)}
          }
        />
        <textarea
          name="body"
          placeholder="Take a note..."
          rows="3"
          onChange={(e)=>{setbody(e.target.value)}}
        />

        <button onClick={noter}>SubmitNote</button>
      </form>
    </div>
  );
}

export default NoteArea;
