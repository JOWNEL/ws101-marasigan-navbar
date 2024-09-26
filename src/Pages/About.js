import React from "react";
import img from '../../src/Pages/3mnrho.jpg'; 

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',          
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${img})`,  
        backgroundSize: 'cover',         
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     
      <div
        style={{
          position: 'absolute',          
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      ></div>
      
     
      <div
        style={{
          position: 'relative',           
          color: 'white',                
          textAlign: 'center',
          zIndex: 1,                      
          paddingTop: '200px',       
          fontFamily: 'cursive'     
        }}
      >
        <h1>About</h1>
      </div>
    </div>
  );
}
