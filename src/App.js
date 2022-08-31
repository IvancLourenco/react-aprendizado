import React, { useState } from 'react';
import Image from "./img/people.svg"
import './App.css';

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
    <button onClick={clickhere}>Comentar</button>

    <ul>
     {allComment.map (coment => (

        <li key={coment}> {coment}</li>

     ))}
      
    </ul>
    </section>
    </div>
  );
}

export default App;
