import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './AccountSettings.css';
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
import { useDispatch } from 'react-redux';
import { usersActions } from '../../storev2/users-slice';


function AccountSettings(){

/////// state variables///////////////////////////////////////////////////////////////////////////////////////
const[Tab,SetTab]=useState(1); // state variable to set the tab
//const email =useState('alaaH@gmail.com'); // state variable that sets email
//const profilename =useState('Alaa Hamed'); // staet variable that sets the profile name
//const displayname=useState('alaaH'); // state variable that sets the display name
//////////////////////////////////////////// card styles variables to style the cards//////////////////////////////////
var cardStyling = {
variant:'outlined',
    height: '40%',
    width:'150%',
  transitionDuration: '0.1s',
  border:'none',
  boxShadow: "none" 
   }

   var cardStyling2 = {
    variant:'outlined',
        height: '270%',
        width:'174%',
      transitionDuration: '0.1s',
      border:'none',
      boxShadow: "none" 
       }


//////////////////////////// header style to style the header //////////////////////////////////////////////////////
   var Headerstyling={

fontSize:"4px"


   }
   ////////////////////////////////////////////////////////////////
   const dispatch = useDispatch();
   const displayName = useSelector(state => state.users.currentUser.displayName);
   const lastName = useSelector(state => state.users.currentUser.lastName);
   const firstName = useSelector(state => state.users.currentUser.firstName);
   const Email = useSelector(state => state.users.currentUser.email);
   
    ///////////////////Return of Accont Settings ////////////////////////////////
return(

    // thre return function contains to card  (grid items) in the grid container
    /// the card represents different boxes
    // there are several links that redirects you to another pages
    // there are different texts
    // there is dividers
    // there is an avatar
    // there is a button representing the tab
    <div className="ASpage" >
        
<text className="Header"  >
Account settings
</text>
<div className="buttonsp"></div>
<div className="TabsC">
<button  data-testid="a"//Button representing First Tab 

className={Tab === 1 ? "selected_tab1" : "tab1"} //Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =1)
onClick={() => SetTab(1)  } //Changing the state of tab to be 1 (for tab1) on click to be selected 
>
Personal Information
 </button>


 </div>
 
 
<div className="CardCo">
    <Divider  />
<Grid container spacing={5}  >
{Tab==1 ?  //Grid Containing grid items mapped on the Array of People( If the second tab is selected) by using the URL element , Name and other elements to be shown on a card , and on click redirects to another page based on each person ID
(<Grid data-test-id="b" item xs={12} sm={6} md={4}>
<div className="CardSp"></div>
<Card className="Account"  style={cardStyling}>

<CardHeader 
title={"Account"} style={Headerstyling}


/>
<Divider   />
<div className="HeaderSp"></div>
<text className="loginE"  >
Login email
</text>
<text className="Pass">
Password
</text>
<div className="loginSp"></div> 
<text  className="e-mail"   >
{Email}
</text>

 <Link className="editpasssp" color="blue" to="/editPass"   style={{ textDecoration: 'none' }}>Edit your password</Link>

  
     


<div className="emailsp">

     </div>  


<Divider/>
<div className="FooterSp"></div>
<text className="footer">
You can also
</text>
<Link color="blue"    style={{ textDecoration: 'none' }}> get help with your account</Link>
<text className="OR">
,or
</text>
<Link color="blue"   style={{ textDecoration: 'none' }}> delete your Flickr account</Link>
<text>
.
</text>
</Card>
<div className="cardspace2"></div>
<div  className="card2">
<Card className="Profile"  style={cardStyling2}>
<text className="header2">
    Profile
</text>
<div className="HeaderSp2"></div>
<Divider   />
<div className="HeaderSp3"></div>
<text className="content" >
Your real name is
</text>
<text className="name" >
  {firstName} {lastName}
</text>

<div className="HeaderSp4"></div>
<text className="content2" >
Your display name is
</text>
<text className="name2" >
{displayName}
</text>
<Link color="blue" to="/dispChange"   style={{ textDecoration: 'none' }}> change</Link>
<CardHeader 

 avatar=
 {<Avatar className="av" > 
 <img className="avatarpgoto"src={"data:image/png;base64,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"} width={30} height={30} ></img>    
 </Avatar>} />
<Divider/>
<div className="headersp4"></div>

<text className="ACCREV">
 Your account has been reviwed as   
</text>
<text className="SAFE">
safe
</text>
<text className="BY">
by Flickr staff.
</text>
<Link color="blue"   style={{ textDecoration: 'none' }}> What does that mean?</Link>
<div className="headersp5"></div>
<text className="WA">
Web Addresses
</text>
<div className="headersp6"></div>
<Link className="mem" color="blue"    style={{ textDecoration: 'none' }}>Create your own memorable Flickr web address! </Link>
<text>
It's an easy way to share your Flickr   
</text>
<div className="headersp7"></div>
<text className="EA">
profile and your photostream with your friends.
</text>
<div className="headersp8"></div>
</Card>
</div>
</Grid>
):(null)}
</Grid>
</div>










</div>











);



}

export default AccountSettings;