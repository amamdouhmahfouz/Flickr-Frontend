import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import './TrendingItem.css';
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
import StarsIcon from '@material-ui/icons/Stars';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

const TrendingItem=({T_id,T_url,T_t,T_h,T_w})=>{
///// intializing hover2 ///////////////////////////////////////////////////////
    const[hover2,SetHover2]=useState(false);
  
/**
 * @param {void}
 * @returns {void}
 * the function sets the hover2 by true needed for some effect when mouse is on the picture
 */
    const handlemouse2=()=>{

SetHover2(true);

    }

    /**
     * @param {void}
 * @returns {void}
 * the function sets the hover2 by falsee need for some effect when mouse is down the picture
     */
    const handlemoused2=()=>{
        SetHover2(false);

    }
    // this trending item represent the trending now
// the trendingg item is needed when mapping trending now image array in the explore page
// using the variables sent by the explore page it maps each image on a card
// if the mouse is on a card it lightens more and vice verse using the hover2 state variable


return(

    <Card  style={{width:T_w},{height:T_h}}  onMouseEnter={handlemouse2} onMouseLeave={handlemoused2}  >   

    <CardMedia >
    
    
    <img     className={hover2 === true ? "hov" : "imm"} src={T_url} width={'100%'} height={T_h}  >
  
    </img>
    <div className="bZ2">
       {T_t}
   
            
       </div>
    
    
        
   
    
    </CardMedia>
    
    
    
    
    
    
    </Card>
    



);
}
export default TrendingItem;
