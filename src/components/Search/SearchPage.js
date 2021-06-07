import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
//import './Searchbar.js'
import './SearchPage.css';
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
import { useEffect } from 'react';
import API from '../../fakeAPI';


function a11yProps(index) {
   return {
       id: `scrollable-auto-tab-${index}`,
       'aria-controls': `scrollable-auto-tabpanel-${index}`,
};
}
     
const useStyles = makeStyles((theme) => ({
   root: {
   flexGrow: 1,
   width: '100%',
   backgroundColor: theme.palette.background.paper,
},
}));


 
 

/**
 * The Search page contains the three tabs (Photos, People, Groups)
 * each tab is either selected or not , the className depends on whether tab is selected or not
 * for tab1(photos tab) mapping is done on multiple images (in an array) to show them in grid in case the tab is selected
 * for tab2(People tab)mapping is done on multiple  people  info (picture,bio,etc) to show their cards contained in grid
 * for tab3 tab3(Group tab)mapping is done on multiple  groups info( picture,bio,etc) to show their cards contained in grid
 * on each click on any image you are directed to a page depedning on the image ID
 * on each click on any  person card you are directed to a page depedning on the person ID
 * on each click on any group you are directed to a page depedning on the group ID
 * @author Alaa Hamed 
 * @example <SearchPage />
 */

function SearchPage(props){

const searchQuery = useSelector(state => state.users.currentSearchQuery);
const history = useHistory(); // function used to redirect to another oage



/////////////////////////////////////////////////////  Array of objects  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//An array of Images objects having the URL of an Image and the ID
const links1 = [
        
            {idd:1 ,url:"https://wallpapercave.com/uwp/uwp978614.jpeg" },
            {idd:2  ,url:"https://wallpapercave.com/fwp/wp5716268.jpg" },
            {idd:3,  url:"https://wallpapercave.com/fwp/wp5981208.jpg"  },
            {idd:4  , url:"https://wallpapercave.com/uwp/uwp404136.jpeg" },
            {idd:5, url:"https://wallpapercave.com/wp/wp170202.jpg"     },
            {idd:6, url:"https://wallpapercave.com/wp/wp4202055.jpg"     },
            {idd:7 , url:"https://wallpapercave.com/wp/FMSk24L.jpg"    },
            {idd:8, url:"https://wallpapercave.com/wp/9T3NTEL.jpg"    },
            {idd:9, url:"https://wallpapercave.com/wp/wp4203600.jpg"      },
            {idd:10, url:"https://wallpapercave.com/wp/wp4079759.jpg"      },
            {idd:11, url:"https://wallpapercave.com/wp/wp2586072.jpg"      },
            {idd:12, url:"https://wallpapercave.com/wp/wp2882301.jpg"        }];
  
   // Array of objects of people having ID,Number of followers,number of posted photos,date joined,Name,Avatar Image URL,Bio         
    const cardsPeoples=[
    {id2 :1 ,follows:250,bio:"student at Cairo University",imges:90, join:"joined jan 2013",Name:"John" ,urll:"https://images.unsplash.com/photo-1608549036505-ead5b1de5417?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:2,follows:600,bio:"Hey",Name:"Laila",imges:69,join:"joined nov 2014",urll:"https://images.unsplash.com/photo-1545506475-5a0985c3ca79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:3,follows:800,bio:"Swimmer,Worlds top Champion",imges:109,Name:"Zeina",join:"joined mar 2010", urll:"https://images.unsplash.com/photo-1613005798967-632017e477c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {id2:4,follows:287,Name:"Yehia",bio:"I love my cats", imges:2,join:" joined dec 2018", urll:"https://images.unsplash.com/photo-1594235623648-adceb49b5336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }];
   
   //Array of objects of groups having ID,Number of followers,number of posted photos, number of comments,date established ,Name,Avatar Image URL   
    const cardsGroups=[
   {id3:1,since:"Since 2007",Name2:"Animal Lovers",follows2:700,imges2:67, comments:100,urlll:"https://wallpapercave.com/uwp/uwp517748.jpeg"},
   {id3:2,since:"Since 2019",Name2:"All about cars",follows2:100,imges2:45, comments:20,urlll:"https://wallpapercave.com/wp/wp1857258.jpg"},
   {id3:3,since:"Since 2013",Name2:"Food",follows2:900,imges2:370, comments:800,urlll:"https://wallpapercave.com/wp/wp8843500.jpg"},
   {id3:4,since:"Since 2017",Name2:"Photography",follows2:470,imges2:500, comments:700,urlll:"https://wallpapercave.com/wp/wp1845538.jpg"}] ;

    //////////////////////////////////////////////////////  Setters using useState  //////////////////////////////////////////////////////////////////////////////////
   
    const[Images,setImages]=useState([]);   //setting the array of Images by the array of links containg every information needed to show the images
    const[TabSlection,SetTabSelection]=useState(1); //setting the state of tabs whether selected ot not 1 for first tab(default) ,2 for second tab, 3 for third tab
    const[People,SetPeople]=useState([]);//setting the array of people by the array of cardspeople containg every information needed to be shown for a person
    const[Groups,setGroups]=useState(cardsGroups);//setting the array of Group by the array of cardsGroups containg every information needed to be shown for a group

//////////////////////////////////////////////////////  different routes redirecting functions //////////////////////////////////////////////////////////////////
    /**
     * it takes the ID number of an image and directs the user to a page depending on image ID
     *  @returns {void}
     * @param {int} num - An int represting image ID
     */
 const handleImageRoute=(num)=>{history.push("/photos/"+num);}
      
    /**
     * it takes the ID number of a person  and directs the user to a page depending on Person ID
     * @returns {void}
     * @param {int} num - An int represting Person ID
     */
 const handleCardRoute=(num)=>{history.push("/user/"+num);}

 /**
  * it takes the ID number of a Group and directs the user to a page depending on Person ID
  * @returns {void}
  * @param {int} num -An int represting Group ID
  */
 const handleGroupRoute=(num)=>{history.push("/Group"+num); }

////////////////////////////////////////////////////// Styling Variables //////////////////////////////////////////////////////////////
// Variable to style all the cards of people or groups
 var cardStyle = {
  display: 'block',
  height: '100%',
  width:'100%',
transitionDuration: '0.1s',
border:'1px solid black',
 }
 //Variable to style all the buttons inside cards of people or groups
 var  ButtonStyle={
 background:'blue',
 weight:'bolder',
  color:'white',
  width:'10px',
  }






  ////
  //console.log("alaaaaa")
  //console.log(props.location.search.slice(1))

  // search queary constants////////////////////////////////////////////////////////////////////////////////////
  const SearchQ=props.location.search.slice(1);
  const LocalH="photo/search?searchText="+SearchQ+"&limit=200&page=1"
const LocalH2="user/search?searchText="+SearchQ+"&limit=20&page=1"
  /////


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYjY1ODg0MWQ1OTNjNjVjOGMxYTc5OCIsImlhdCI6MTYyMjU2MzYzNCwiZXhwIjoxNjMwMzM5NjM0fQ.HTV2jtYf5WpcxpeFazN7Ug9TM1qo1jJfN7qpM-_Kjwo"



/////
useEffect(() => {
    API.get(LocalH,{ 
        headers: {
        "Authorization": `Bearer ${token}` 
    }})
      .then(res => {
        console.log("search res");
        //console.log(res)
        //console.log(res.data.data)
        //console.log(res.data.data[0].sizes.size.original.source)
        //console.log(res.data.data[0]._id)
       setImages(res.data.data)
      }).catch(err => {
        console.log(err.response)
        setImages([]);
      })
  }, [SearchQ])

  useEffect(() => {
    API.get(LocalH2,{ 
        headers: {
        "Authorization": `Bearer ${token}` 
    }})
      .then(res => {
        console.log("search res");
        console.log(res)
    SetPeople(res.data.data)
      }).catch(err => {
        console.log(err.response)
     
      })
  }, [SearchQ])




////////////////////////////////////   Return of Search Page function  ////////////////////////////////////////////////////////////////
return(

// The main div that holds up everything
<div className="Tabs">
<button //Button representing First Tab (Photos Tab)
data-testid="1"
className={TabSlection === 1 ? "button__selected_tab1" : "button__tab1"} //Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =1)
onClick={() => SetTabSelection(1)  } //Changing the state of tab to be 1 (for tab1) on click to be selected 
>
Photos 
 </button>



<button  className=" button__tab2" //Button representing second Tab (People Tab)
data-testid="2"
className={TabSlection === 2 ? "button__selected_tab2" : "button__tab2"}//Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =2)
onClick={() => SetTabSelection(2)} //Changing the state of tab to be 2 (for tab2) on click to be selected 
>
People
</button>



<button  className="button__tab3"//Button representing third Tab (Group Tab)
data-testid="3"
className={TabSlection === 3 ? "button__selected_tab3" : "button__tab3"}//Ternary operator to see if Tab is selected or not and Change its cLassName depending on its state(if its =3)
onClick={() => SetTabSelection(3)}//Changing the state of tab to be 3 (for tab3) on click to be selected 
 >
Groups
</button>




 <Grid container spacing={2} > 
 {(TabSlection === 1 && Images )?  Images.map( (Image) => //Grid Containing grid items mapped on the Array of Images( If the first tab is selected) by using the URL element, and on click redirects to another page based on each image ID
 <Grid item xs={6} sm={3} md={2}>
 <img className="img__PhotoG" data-testid="6" src={Image.sizes.size.large.source} onClick={ ( )=> handleImageRoute(Image._id)} width={200} height={200} /> </Grid>)  : (null)}
</Grid>







<Grid container spacing={5} >
{TabSlection===2 ? People.map((People) => //Grid Containing grid items mapped on the Array of People( If the second tab is selected) by using the URL element , Name and other elements to be shown on a card , and on click redirects to another page based on each person ID
<Grid item xs={12} sm={6} md={4}>

<Card className="peopleC"  data-testid="7" style={cardStyle} onClick={()=>handleCardRoute(People._id)}>

<CardHeader avatar=
{<Avatar >
<img className="photoPeople"src={People.urll} width={50} height={50} ></img>    
</Avatar>} 
action=
{<Button   size='small'  style={ButtonStyle} >
+Follow
</Button>}
title={People.displayName} 
subheader={People.bio}
/>
<CardActions >
<IconButton aria-label="Photoss" >
<PhotoIcon/>
{People.photoCount}
</IconButton>
<IconButton aria-label="Followers" >    
<PeopleIcon/>
{People.followerCount} 
</IconButton>
{People.join}
</CardActions>        
</Card>
</Grid>
):(null)}
</Grid>






<Grid container   spacing={4} >
{TabSlection===3?Groups.map((Group) => //Grid Containing grid items mapped on the Array of groups( If the third tab is selected) by using the URL element , Name and other elements to be shown on a card , and on click redirects to another page based on each group ID
<Grid item  xs={12} sm={6} md={4}>
<Card className="groupC" style={cardStyle}  onClick={()=>handleGroupRoute(Group.id3)}>
<CardHeader avatar=
{<Avatar >    
<img className="GroupPeople"src={Group.urlll} width={50} height={50} ></img>    
</Avatar>} 
action={<Button className="follower"  size='small'  style={ButtonStyle} >
+join
</Button>}
title={Group.Name2} 
subheader={Group.since}
/>
<CardActions >
<IconButton aria-label="Followers" height={1}>  
<PeopleIcon/>
{Group.follows2} 
</IconButton>
<IconButton aria-label="Photoss" height={1}>
<PhotoIcon/>
{Group.imges2}
</IconButton>
<IconButton aria-label="Commentss" height={1}>
<ForumIcon/>
{Group.comments}
</IconButton>
</CardActions>       
</Card>
</Grid>
):(null)}
</Grid>


</div>);

}
export default SearchPage;