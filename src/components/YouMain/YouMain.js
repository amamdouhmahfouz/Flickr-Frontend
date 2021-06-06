/**
 * The You module
 * @module You
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import YouCover from '../YouCover/YouCover';
import './YouMain.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import YouAbout from '../../pages/YouAbout/YouAbout';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import YouCameraRoll from '../../pages/YouCameraRoll/YouCameraRoll';
import YouPhotostream from '../../pages/YouPhotostream/YouPhotostream';
import YouFaves from '../../pages/YouFaves/YouFaves';
import YouAlbums from '../../pages/YouAlbums/YouAlbums';
import YouAlbums_Collections from '../../pages/YouAlbums_Collections/YouAlbums_Collections'
import { useSelector } from 'react-redux';
import PhotoStream from '../PhotoStream/PhotoStream';
import YouGalleries from '../YouGalleries/YouGalleries';

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
 * Array that contains the current pictures in the camera roll
 * @type {Array<strings>}
 */

const DUMMY_IMAGES = [{link:"https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg", date:"2020-05-05"} ,
{link:'https://image.shutterstock.com/image-photo/linked-blocks-bank-world-currencies-600w-1937429821.jpg', date:"2020-01-02" },
{link:'https://image.shutterstock.com/image-photo/wild-tropical-pulasan-fruit-nephelium-600w-1767117413.jpg', date:"2020-05-09" },
{link:'https://upload.wikimedia.org/wikipedia/commons/8/82/Wide_angle_tetons.jpg', date:"2020-01-02" },
{link:'https://www.gardeningknowhow.com/wp-content/uploads/2020/11/orange-tree.jpg', date:"2020-01-02"},
{link:'https://upload.wikimedia.org/wikipedia/commons/4/45/Wide_lightning.jpg', date:"2020-01-02" }];

/**
 * Responsible for returning the you page entirely with all its components and routing between them
 * @author Mostafa Hazem
 * @param {string} currentTab - current selected tab, passed by the Header
 * @returns {element} The you page contents
 */
const YouMain = (props) => {
    const [tab, setTab] = useState('cameraroll');
    
    let history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const currentUserId = useSelector(state => state.users.currentUser.userId);
    const userId = props.match.params.id || currentUserId; 
    const currentUserToken = useSelector(state => state.users.currentUser.token);
    const currentUserFirstName = useSelector(state => state.users.currentUser.firstName);
    const currentUserLastName = useSelector(state => state.users.currentUser.lastName);
    const currentUserDisplayName = useSelector(state => state.users.currentUser.displayName);
    var myprof = false;
    if (currentUserId == userId)
    {
        myprof= true;
    }
    else
    {
        myprof=false;
    }

    const [collections, setCollections] = useState('false');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    useEffect(() => {
        setTab(props.currentTab)
    }, [props.currentTab])
   
    const setCameraRoll = () => {
        setTab('cameraRoll');
    }
    
    const setCollectionsTrue = () => {
        setCollections('true');
    }

    const albumClickHandler = () => {
        setTab('albums');
        setCollections('false');
    }

    return (
        <div>
            <div>
                <YouCover token={currentUserToken} userId={userId} currPics={DUMMY_IMAGES} />
            </div>
            
            <div className='toolbarBg'></div>
            <div className={classes.root}>
                <div className='navBar'>
                    <AppBar position="static" color="white" >
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="on"
                        aria-label="scrollable auto tabs example"
                        >
                            <Tab label="About" {...a11yProps(0)} onClick={() => setTab('about')}/>
                            <Tab label="Photostream" {...a11yProps(1)} onClick={() => setTab('photostream')} />
                            <Tab label="Albums" {...a11yProps(2)} onClick={albumClickHandler}/>
                            <Tab label="Faves" {...a11yProps(3)} onClick={() => setTab('faves')} />
                            <Tab label="Galleries" {...a11yProps(4)} onClick={() => setTab('galleries')}/>

                        {myprof &&  (<Tab label="CameraRoll" {...a11yProps(5)} onClick={() => setTab('cameraRoll')}/>)}
                        </Tabs>
                    </AppBar>
        
                </div>
            </div>
            <div>

            {   tab === 'about' ? <YouAbout token={currentUserToken} currentUserId={currentUserId} userId={userId} currPics={DUMMY_IMAGES}/> : 
               (tab === 'albums' && collections==='false') ? <YouAlbums token={currentUserToken} currentUserId={currentUserId} setCameraRoll={setCameraRoll} setCollectionsTrue={setCollectionsTrue} currentTab={props.currentTab}/>
             : (tab === 'photostream') ? <PhotoStream userId={userId} token={currentUserToken}  />  
             : (tab === 'faves') ? <YouFaves /> :
             (tab === 'galleries') ? <YouGalleries /> : <YouCameraRoll token={currentUserToken} currentUserId={currentUserId} userId={userId} currPics={DUMMY_IMAGES}/>   }

            </div>
        </div>
    );
};

export default YouMain;