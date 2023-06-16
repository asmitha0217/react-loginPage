
import React from "react";
import flag from './flag.png';
// import Button from 'react-bootstrap/Button';
import image1 from './logo.svg';
 
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

import './loginPage1.css';



export default function Demo1() {
    return (
     <>
      <img
          className="img"
          src={image1}
          alt="logoimg"
        /> 
      
      {/* <h1 className="firstheading">Crack your goal with <br/>India’s top educators</h1> */}
      <p className="para">Over <span>10 crore</span> learners trust us for their preparation</p>
      <div className="container">
        <form>
        <input className="box1" type="phone" placeholder="Enter your mobile number"/>
        <p className="box">
        We’ll send an OTP for verification
        </p>
        </form>
        {/* <Button onclick="window.location.href = 'loginPage1.jsx';" className="button1" variant="primary" type="submit">
        Join for free
      </Button>
       */}
        

        {/* <img
          className="image"
          src={flag}
          alt="flagimage"
        /> */}
      </div>
      {/* <Form className="place">
      <Form.Group className="form1 mb-3" controlId="formBasicEmail">
      
       
        <Form.Control  className="box"  type="email" placeholder="Enter your mobile number " /><br/>
        <Form.Text className="text-muted">
        We’ll send an OTP for verification
        </Form.Text>
      </Form.Group>

    </Form> */}
      

    
    
  
   
     </>
        
          
    );
  }
  
