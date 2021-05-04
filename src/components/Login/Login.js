import React, { useState, useEffect } from 'react' 
import './Login.css'
import {Link} from 'react-router-dom'
import { Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

const Login = () => {

const apiURL = "http://localhost:3000/users" ;   //json server

const [isUser, setIsUser] = useState();
const [redirect, setRedirect] = useState(null);

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [emailError, setemailError] = useState('');
const [passError, setpassError] = useState('');
const [userError, setUserError] = useState('');

const [isSubmitting, setisSubmitting] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    checkUserInput();
    validateLoginInfo();
    setisSubmitting(true);
}

const handleEmailInput = (e) => {
    setEmail(e.target.value); 
  /*  setUsers({
      ...users,
      email: e.target.value 
    }); */
}
    
const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    /* setUsers ({
      ...users,
      password: e.target.value
    }); */
}

//////////////////////////// JSON SERVER /////////////////////////////////////

const checkUserInput = () => {
  axios.get(  apiURL + '?email=' + email + '&password=' + password )
  .then(response => {
    console.log(response.data);
    if(response.data.length > 0) {
      setIsUser(true);
      setUserError('');
      setRedirect("/home");

    } else if ( response.data.length === 0 && email && password) {
      setIsUser(false);
      setUserError('Incorrect email or password')
    }
  })
}


useEffect(() => {
  if(isSubmitting && userError==='' && emailError==='' && passError===''){
    console.log('login successful');
  }
}, [userError, emailError, passError, isSubmitting])
    
/////////////////////////////////// VALIDATION /////////////////////////////

const validateLoginInfo = () => {

    ////////////  EMAIL /////////////////
    if(!email){
        setemailError('Email is required'); setUserError('');
    }
    else {setemailError('')}

    //////////// PASSWORD ////////////////
    if(!password){
        setpassError('Password is required'); setUserError('');
    } else {setpassError('')}

     //////////// Checking for the user in the database  ///////////////
     if(isUser === false && email && password) {
         setUserError('Email or password is incorrect')
     }

     if(isUser === true && email && password) {
       setUserError('');
     }

}



///////////////////////////// FACEBOOK PART //////////////////////////////////

const [data, setData] = useState({});

const [login, setLogin] = useState(false);
const [isLogging, setIsLogging] = useState(false);
const [picture, setPicture] = useState('');
const [userID, setUserID] = useState('');
const [name, setName] = useState('');


const responseFacebook = (response) => {
  console.log(response);
  setData(response);
  setPicture(response.picture);
  setEmail(response.email);
  setUserID(response.userID);
  setName(response.name);

  if (response.accessToken) {
    setLogin(true);
  } else {
    setLogin(false);
  }
} 

const componentClicked = () => {
setIsLogging(true);
console.log('component clicked') ;
}

let fbContent;

if(login) { 
  /*fbContent = ( 
  <div>
  <p>Login successful !</p>
<p> Press <a href="#"><Link to ="/home">here </Link> </a> to continue </p>
  </div> )*/ fbContent = <FacebookLogin />}
else {
  fbContent = (
    <FacebookLogin
    appId="942791213199046"
    autoLoad={false}
    size="medium"
    fields="name,email,picture"
    scope="public_profile,user_friends"
    callback={responseFacebook}
    onClick={() => componentClicked}
    icon="fa-facebook" />
  )
}

///////////////////////////////////////////////////////////////////////////////////////

if(redirect) {
  return (
    <Redirect to={redirect} />
  )
}

    return (

        
        <div className="page" >
        <div className="login-page">
       
           <form className="login-page" onSubmit={handleSubmit}>
                <h5 className="center"> Login to flickr </h5>
       
                <div className="input-field">
                 <input type="email" placeholder="Email address" className="active validate" id="email"
                        onChange={handleEmailInput} value={email} />
                        <p className="error">{emailError}</p>
                </div>
       
                <div className="input-field">
                 <input type="password" placeholder="Password" className="active" id="password"
                        onChange={handlePasswordInput} value={password} />
                        <p className="error">{passError}</p>
                  </div>

                  <div className="usererror">
                    <p className="error">{userError}</p>
                  </div>
       
                <div className="col s12">
                <button className="btn btn-block waves-effect center"> Login </button>
                </div>

                <div className="forgotpass">
                <Link className="forgetpassword" to ="/forgotpassword"> Forgot password ? </Link> 
                </div> 
                  
                 <hr className="or"/>
                 <p  className="or"> OR </p>

                 <br />

                 <div>
                   {fbContent}
                 </div>
       
                 <br />
                 <hr />
                 <p> Do not have an account? Signup <Link to ="/signup">here </Link> </p>
                 <br />    
                

                 </form>
       
       

         </div>
        </div>
    )
}


export default Login ;