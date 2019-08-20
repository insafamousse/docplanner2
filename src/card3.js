import React from 'react';
import {Card ,CardDeck} from 'react-bootstrap';
import warsaw from './img/warsaw.png'
import barcelona from './img/barcelona.png'
import istanbul from './img/istanbul.png'
import  rome from './img/rome.png'
import mexico  from './img/mexico.png'
import curitiba  from './img/curitiba.png'
import './App.css';
function Card3(){
    return (
        <div className=" Tittre "> 
        <center>
            <h1 className=" Title-2">Improve the lives of millions. <br></br> Change yours forever
  </h1>
  < h6 className=" Parag-2"> More than 1000 team mates share our same vision, goals and passion <br></br> With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and <br></br> Curitiba, our search for great talent never stops.
</ h6>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" /> 
    <img src={warsaw}  width=" 350"/>
    <Card.Body>
      <Card.Title>Warsaw</Card.Title>
      <a href="#" class="btn btn-primary"> see openings</a>
                                                 
      
       
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>

    <Card.Body>
        <img src={barcelona} width="350" /> 
      <Card.Title>Barcelona</Card.Title>
      <a href="#" class="btn btn-primary"> see openings</a>
                                                 
      
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
  <Card>

    <Card.Body>
   <img src={istanbul} width="350" />
      <Card.Title> Istanbul </Card.Title>
      <a href="#" class="btn btn-primary"> see openings</a>
                                                 
     
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
</CardDeck>
<CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <img src={rome} width="350" />
      <Card.Title>Rome</Card.Title>
      <a href="#" class="btn btn-primary"> see openings</a>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body> 
        <img src={mexico} width="350" /> 
      <Card.Title>Mexico-City</Card.Title>
      <a href="#" class="btn btn-primary"> see openings</a>
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
  <Card>

    <Card.Body>
        <img src={curitiba} width="350" /> 
      <Card.Title>Curitiba</Card.Title > <a href="#" class="btn btn-primary"> see openings</a>
      
    </Card.Body>
    <Card.Footer>
    
    </Card.Footer>
  </Card>
</CardDeck>
        </center>


        </div>
    );    
    }
    export default Card3 