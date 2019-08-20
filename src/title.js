import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import logo from './img/logo1.png'
import './App.css';
function Title(){
    return (
        <div className="Title">    
        <center>
         <img src={logo}     /> 
         <h1 className=" titre" > 
			Making the healthcare experience more human
		</h1>
        <p>    We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.   </p>
        <p>  We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. </p>
        </center>
        </div> 
    );
}
export default  Title ; 
