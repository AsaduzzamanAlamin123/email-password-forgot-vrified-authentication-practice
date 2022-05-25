import React, { useState } from 'react';
import app from '../../firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const auth = getAuth(app);
const CreateUser = () => {
    const [validated, setValidated] = useState(false);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

//    form submit
const handleFormSubmit = (event) =>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setValidated(true);

    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
         
        const user = result.user;
        console.log(user);
        verifyEmail();
      })
      .catch((error) => {
       console.log(error);
      });

     

    event.preventDefault();
}
//    form submit

    // handle email
    const handleEmailBlur = (event)=>{
        setEmail(event.target.value);
    }
    // handle email

    // handle password
    const handlePasswordBlur = (event)=>{
        setPassword(event.target.value);
    }
    // handle password
    // userVerify
    const verifyEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('Email verification sent!');
            });
    }
    // userVerify

    
    return (
        <div>
          <div className='img-container'>

          </div>
          <div className='form-container w-50 mx-auto'>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit } className='mt-4'>
              <h2 className='text-secondary'>Please Register</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" placeholder="Enter your name" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
     
    </Form.Text>
    <Form.Control.Feedback type="invalid">
            <p className='fw-bolder fst-italic text-info'>Please provide a valid email</p>
          </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
    <Form.Control.Feedback type="invalid">
            <p className='fw-bolder fst-italic text-info'>Please provide a password</p>
          </Form.Control.Feedback>
  </Form.Group>
  <p className='text-success'>Already have an account <Link className='text-decoration-none ' to='/login'>Plz log in</Link></p>
  
  <Button variant="danger" type="submit" className='text-light btn-outline-dark fw-bolder fst-italic'>
    Register
  </Button>
</Form> 
          </div>
        </div>
    );
};

export default CreateUser;