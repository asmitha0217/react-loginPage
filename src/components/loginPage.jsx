import React from "react";
import flag from './flag.png';
 import Button from 'react-bootstrap/Button';
 import image1 from './logo.svg';
 import { useState } from "react";
import Demo1 from './loginPage1';
import './loginPage.css';
import InputGroup from 'react-bootstrap/InputGroup';
import PhoneInput from 'react-phone-number-input';



export default function Demo() {
  // const [value, setValue] = useState()
    return (
     <>
      <img
          className="img"
          src={image1}
          alt="logoimg"
        /> 
      
      <h1 className="firstheading">Crack your goal with <br/>India’s top educators</h1>
      <p className="para">Over <span>10 crore</span> learners trust us for their preparation</p>
      <div className="container">
        <form >
        {/* <input className="box1" type="tel" placeholder="Enter your mobile number" maxLength="10" pattern="[6-9][0-9]{9} title="Please enter a valid 10- required="required" "/> */}
         <input  className="box1" type="tel" id="number" placeholder="Enter your Phone Number" maxlength="10"  pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit phone number" required="required"></input>
        <p className="box">
        We’ll send an OTP for verification
        </p>
        <Button  className="button1" variant="primary" type="submit">Join for free</Button>
       
        </form>
       
        
        {/* <PhoneInput className="box1"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      {value} 
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
  
