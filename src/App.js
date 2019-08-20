import React from 'react';
import './App.css';
import Navigation from './nav'
import Title from  './title' 
import Liste from './listecard'
import Svg from './svg'
import Card2 from './card2'
import Card3 from './card3'
import Footer from './footer'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Title /> 
        <Liste/> 
        <Svg/>
        <Card2/>
        <Card3 /> 
         <Footer />
    </div>
  );
}

export default App ;

