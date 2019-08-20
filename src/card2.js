import React from 'react';
import image from './img/image.png'
import { Col, Row ,  } from 'react-bootstrap';
import flag from './img/flag.png'
import visit from './img/visit.png' 
import patient from './img/patient.png'
import doctor from './img/doctor.png'


import './App.css';
function Card2() {
    return (
            <div className="Card-2">
                <div class="  row">

                    <div class=" inner col-5 ">
                        <h3 className=" Color-1">    The world's <br></br>
                            biggest healthcare platform</h3>
                        <h6 className="Color-2">  We work from 6 offices all over the world, bringing Docplanner<br></br> Group to life in almost 20 countries.</h6>*
     <img src={image} width="400" />
                    </div>   
                    <div className=" jumbotron card col-6 "  >
                        <div className="card-body ">
                        <img src={flag} /> 
                        <h5 class="card-title">  Leader in 10 countries  </h5>
                                                <p> Poland, Turkey, Spain, Italy,<br></br> Czech Republic, Mexico, Brazil,<br></br> Colombia, Argentina and Chile   </p>          
                        </div>
                        </div>  
                         <div className=" card text-center col-6">
                         <div className=" Card-3"> 
                             <img src={visit} /> 
                             <h5 class="card-title">Special title treatment</h5>
                                                <h5 class="card-text"> 1.5 million appointments
                                                    </h5>
                                                    <p>  booked last month</p>
                                              
                                              </div>
                                            </div>
                                            <div className="  card text-right col-6" >
                                            <img src={patient}  width=" 50"/> 
                                            <div class="card-body"> 
                                                <h5 class="card-text"> 30 million unique patients</h5>
                                                  <p> visit us every month    </p>
                                                  <div className=" card text-center col-6">
                                              <div className="card-body">   
                                              <img src={doctor} /> 
                                                <h5 class="card-text">  2 million active doctors
                                                    </h5>
                                                    <p>  trust in our solutions   </p>
                                                    </div> 
                                                    </div>
                                                    

                                        

                                              

                                          


          </div>                                       
</div>
                                              
                 </div>   
                </div> 
            
                    );
                }
export default Card2 