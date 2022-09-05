import React, { useState } from 'react';
import Image from "./img/people.svg"
import {Button, Container, List}  from './styles';



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
    <Container>
    <img src= {Image} alt="Pessoas"/>
    <textarea onChange={typeHere}></textarea>
    <Button isOn = {comment} onClick={clickhere}>Comentar</Button>

    <List>
     {allComment.map ((cmt, index) => (

        <li key={index}> {cmt}</li>

     ))}
      
    </List>
    
    </Container>
  );
}

export default App;
