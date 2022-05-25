import { getAuth,  sendPasswordResetEmail,  signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import app from '../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');

    // onsubmiit
    const handleSubmitt = (event) =>{

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            
            setError(error.message);
          });

        


        event.preventDefault();
    }
    // onsubmiit

    // setEmail
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
}
    // setEmail
    // setpassword
    const handlePasswordBlur = (event)=>{
        setPassword(event.target.value);
    }
    // setpassword

    // forgotPassword
    const handlepasswordReset = () =>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log(' Password reset email sent!');
           
    
          })
          .catch((error) => {
           console.log(error);
          });
        
    }
    // forgotPassword

    



    return (
        <div>
            
            <Form onSubmit={handleSubmitt} className='w-50 mx-auto'>
            <h2 className='text-danger'>login</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      
    </Form.Text>
    <p>{error}</p>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
    <p>{error}</p>
  </Form.Group>
  <p className='text-success'>Haven't You Account?? <Link className='text-decoration-none ' to='/'>Please Register</Link></p>
  
  <Button onClick={handlepasswordReset} variant='link' className='text-decoration-none '>forgot password</Button>
  <br></br>
  <Button variant="primary" type="submit" className='text-light btn-outline-dark fw-bolder fst-italic'>
    LogIn
  </Button>
</Form>
        </div>
    );
};

export default Login;