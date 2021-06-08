import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './editPass.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardHeader, IconButton } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';
import {Grid} from "@material-ui/core"
import { useSelector } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import YouAbout from '../../pages/YouAbout/YouAbout';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import YouCameraRoll from '../../pages/YouCameraRoll/YouCameraRoll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useMediaQuery} from "@material-ui/core";
import { Divider } from '@material-ui/core';
import {TextField }from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Input} from '@material-ui/core';
import {FilledInput} from '@material-ui/core';
import {OutlinedInput} from '@material-ui/core';
import {InputLabel} from '@material-ui/core';
import {InputAdornment} from '@material-ui/core';
import {FormHelperText} from '@material-ui/core';
import clsx from 'clsx';
import {FormControl} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { SettingsApplicationsSharp } from '@material-ui/icons';
import { AiFillPauseCircle } from 'react-icons/ai';
import API from "../../fakeAPI"
function EditPass(){

    var cardStyling = {
        variant:'outlined',
            height: '17%',
            width:'25%',
          transitionDuration: '0.1s',
       
          boxShadow: "none" 
           }


           /**
            * the function sets the values state variable with value of the input of current password
            * @param {*} prop 
            * @returns {void}
            */
           const handleChange = (prop) => (event) => {
            setValues({ ...values, [prop]: event.target.value });
            
         
          };

          /**
           * the function sets the values2 state variable with value of the input of new password
           * @param {*} prop 
           * @returns {void}
           */
          const handleChange2 = (prop) => (event) => {
            setValues2({ ...values2, [prop]: event.target.value });
            
          };
        /////////////////////// state variables//////////////////////////////////////
        const[pass,SetMyPass]=useState("alaahamed1999"); // setting pass of user
        const [values, setValues] = useState({
            password: '',
           
            showPassword: false,
          });   /// setting the password of the current password input and the show password bolean
          const[values2,setValues2]=
          useState({
      
            password2: '',
           
            showPassword2: false,
          });/// setting the password of the new password input and the show password bolean


          /////////////////////////////////////////////////////////////////////////////
          /**
           * @returns {void}
           * @param {void}
           * The function changes the bolean value of show password when clicking on eye icon of the values2 
           * state variable  of new  password input 
           
           */
          const handleClickShowPassword2 = () => {
            setValues2({ ...values2, showPassword2: !values2.showPassword2 });
          };

          /**
           * @returns {void}
           * @param {void}
           * The function changes the bolean value of show password when clicking on eye icon of the values
           * state variable  of current password input
           */
          const handleClickShowPassword = () => {
            setValues({ ...values, showPassword: !values.showPassword });
          };
          //////////////////////////////////////////////////////////////////////////////////////////
        /**
         *
         * function that handle the event of bringing the mouse down of eye icon of current pass input
         * @param {*} event 
         */
          const handleMouseDownPassword = (event) => {
            event.preventDefault();
          };

          /**
           * function that handle the event of bringing the mouse down of eye icon of new pass input
           * @param {*} event 
           */
          const handleMouseDownPassword2 = (event) => {
            event.preventDefault();
          };

          //////////////////////////////////////////////////////////////////////////////////////////////////////
          const history = useHistory(); // function used to redirect to another page
          /////////////////////////////////////////////////////////////////////////////////



          

/**
 *  the function checks for the password if its good or not
 * it checks if it has a special charachter and upper case
 * it checks if its length is minimum 12
 * @param {*} str  the password string
 * @returns {boolean} 
 */



          const checkGoodPassword = (str) => {
            let acceptable = false;
            let upperCaseGood = false;
            let digitGood = false;
            let lowerCaseGood = false;
            let specialGood = false;
            for (let i = 0; i < str.length; i++) {
              let character = str.charAt(i);
              if (!isNaN(character * 1)){
                digitGood = true;
              }else{
                if (character == character.toUpperCase()) {
                    upperCaseGood = true;
                }
                if (character == character.toLowerCase()){
                    lowerCaseGood = true;
                }
            }
            }
            
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
            if (format.test(str)) {
              specialGood = true;
            }
      
            return (upperCaseGood && lowerCaseGood && digitGood && specialGood);
          }
      

          const token = useSelector(state => state.users.currentUser.token);


          const userId = useSelector(state => state.users.currentUser.userId);




          
/**
 * function that checks if the current password input value is the same as the password of user
 * then the function checks if the new password input value character is > 12
 * if the two conditions are true the fucntion sets the pass of user state variable with the new password input value
 * then redirects us the /passChange page
 * @returns {void}
 * @param {void}
 */
        

const setpass=()=> {
    
 if(values.password!=values2.password2){
     if(!checkGoodPassword(values2.password2))
     {
   
     }
     else{
         
  //SetMyPass(values2.password2);
API.patch(`user/password`,
{
  "passwordCurrent":values.password ,
  "password":values2.password2
},

{ 
  headers: {
  "Authorization": `Bearer ${token}` 
}


}

) .then(res => {
  console.log("search res");
  console.log('akaaaa')

  console.log(res)
  console.log(res.data.status)

  if(res.data.status=="success")
  {
    history.push("/passChange");
  }

}).catch(err => {
  console.log(err.response)
    console.log(token)
})

     }
    
 }
 
}
  
  
/////////////////////////////////// return function of Edit pass Function////////////////////////////////////////////////////////////////

    return(
/// return function has the card representing form
// lock icon and arrow icon
// two input box (current and new) with eye icon and with ability of password to be visible or not using ternary oprator
// button that resets password if certain conditions are there and redirect us to another page
// differnt text
        <div className="Backgound">
            <div className="cardpasssp"></div>
<Card  className="Forum"  style={cardStyling}>
<div className="AB">
<ArrowBackIcon />
</div>
<div className="textsp">
<LockIcon />
</div>
<div className="textsp2"></div>
<text className="set">
Set your new Flickr Password
</text>

<div className="controlsp"></div>
<div className="control">
<FormControl   variant="outlined">
<InputLabel htmlFor="outlined-adornment-password"> Current Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            data-testid="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={150}
            />
          </FormControl>
          </div>




          <div className="controlsp2"></div>
<div className="control2">
<FormControl   variant="outlined">
<InputLabel htmlFor="outlined-adornment-password"> New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            data-testid="password2"
            type={values2.showPassword2 ? 'text' : 'password'}
            value={values2.password2}
           onChange={handleChange2('password2')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {values2.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={150}
            />
          </FormControl>
          </div>

<text className="PLZ">
Please use at least:
</text>
<div className="controlsp3"></div>
<text className="PLZ2">
 12 characters   
</text>
<text className="PLZ3">
No leading spaces
</text>


<div className="controlsp4"></div>
<div className="control5">
<button className="b"  onClick={setpass}>
Change your Flickr password  
</button>
</div>
<div   className="controlsp5"></div>
<Link className="forgetpass" color="blue" to="/forgotpassword"   style={{ textDecoration: 'none' }}>Forget Password?</Link>

          
</Card>


        </div>
    );



}

export default EditPass;