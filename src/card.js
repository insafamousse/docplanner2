import React from 'react';
import { Col, Row , Container , Button } from 'react-bootstrap';

import './App.css'; 
function Card ({item}){
    return (

 <div > 
     <Container className="container"  > 
      < div className=" card-2" >  
       <div class=" row justify-content-around  " >
        <div class="card col-9" style={{backgroundColor:item.color}}> 
         <div class="card-body"> 
           <p> {item.titre} </p>
           <h2> {item.parag}</h2> 
         { item.show? <Button variant="secondary"> choose country</Button>:<div></div>}
          <img src={item.img} width="500" />  
         </div> 
        </div> 
       </div>
      </ div>
      </Container>

      </div> 

 

    ) ;
}
export default Card ; 
