import React, { useState } from 'react';
import Image from "./img/people.svg"
import Button  from './styles';



function App() {
  const [ comment, setComment ] = useState()
  const [allComment, setAllComment] = useState([])

  function typeHere(e){
    setComment(e.target.value)
  }

  function clickhere(){
    const allCommentAfter = [...allComment, comment]

    setAllComment(allCommentAfter)
  
  }
    
  return (
    <div>
      <section className='container'>
    <img src= {Image} alt="Pessoas"/>
    <textarea onChange={typeHere}></textarea>
    <Button isOn = {comment} onClick={clickhere}>Comentar</Button>

    <ul>
     {allComment.map ((cmt, index) => (

        <li key={index}> {cmt}</li>

     ))}
      
    </ul>
    </section>
    </div>
  );
}

export default App;
