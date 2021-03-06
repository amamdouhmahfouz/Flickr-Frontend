/**
 * The cover module
 * @module YouCover
 */
import React, { useState, useEffect } from 'react';
import './YouCover.css';
import API from '../../fakeAPI';
import { useHistory } from 'react-router';

/**
 * @function
 * Responsible for returning the upper part of the page containing cover and profile pictures along with user info
 * @param {properties} props 
 * @returns {element} the cover components
 */
const YouCover = (props) => {
    const [picChoose,setPicChoose] = useState(false);
    const [pic,setPic] = useState(`https://combo.staticflickr.com/pw/images/buddyicon03_r.png`);
    const [covChoose,setCovChoose] = useState(false);
    const [covPic,setCovPic] = useState(`https://combo.staticflickr.com/pw/images/coverphoto02_h.jpg.v3`);
    const [followers,setFollowers] = useState('0');
    const [following,setFollowing] = useState('0');
    const [name,setName] = useState('John Silva');
    const [username,setUsername] = useState('JohnSilvaMendes');
    const userId = props.userId;
    const isThisMe = props.userId === props.currentUserId;
    let history = useHistory();

    useEffect(() => {
        
        API.get(`user/${userId}/disp-name`)
            .then(res => {
                if (res.data.status === 'success') {
                    setUsername(res.data.data.displayName);
                    console.log(res)
                    console.log(userId)
                }
            }).catch(err => {
                //alert(err);
            });
        
        API.get(`user/${userId}/real-name`)
            .then(res => {
                if (res.data.status === 'success') {
                    setName(res.data.data.firstName+" "+res.data.data.lastName);
                }
            }).catch(err => {
                alert(err);
            });

        
        
    }, [])

    //("you cover")
    // useEffect(() => {
    //     API.get(`users/${userId}`)
    //         .then(res => {
    //             setPic(res.data.profileurl);
    //             setName(res.data.displayName);
    //             setUsername(res.data.username);
    //             setCovPic(res.data.coverPhoto);
    //         }).catch(err => {
    //             alert(err)
    //         })
    // }, []);
    const followingHandler = () => {
        history.push(`/user/${userId}/following`);
    }

    const followHandler = () => {
        history.push(`/user/${userId}/Followers`);
    }
    
    const followersHandler = () => {
        history.push(`/user/${userId}/followers`);
    }

    const picHandler = (event) => {
        setPic(event.target.src);
        console.log(`You chose ${pic}`);
    }

    const covHandler = (event) => {
        setCovPic(event.target.src);
        console.log(`You chose ${pic}`);
    }

    return(
    <div>
        <div className='cover'>
            <img className='covPic' src={covPic} width='200' height='200'/>
        </div>
        {picChoose && 
        (<div className='picChoice'>
            <div className='popUp'>
                {props.currPics.map(imgSrc => (
                <img className='imagesList' width='150' height='150' key={imgSrc} src={imgSrc.link} onClick={picHandler}/>))}
                <button className='xButton' onClick={()=>setPicChoose(false)}>Save profile picture</button>
            </div> 
        </div>)
        }
        {covChoose &&
        (
            <div className='popUp'>
                {props.currPics.map(imgSrc => (
                <img className='imagesList' width='150' height='150' key={imgSrc} src={imgSrc.link} onClick={covHandler}/>))}
                <button className='xButton' onClick={()=>setCovChoose(false)}>Save cover picture</button>
            </div>
        )
        }        
        <div className='editCover' onClick={()=>setCovChoose(true)}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Pencil_edit_icon.jpg'  width='15' height='15'/>
        </div>
        <img className='userPic' alt='profilePic' onClick={()=> setPicChoose(true)} width ='65' height ='65' src={pic} />
        <h2 className='youPageName'>{name}</h2>
        <h6 className='youPageUserName'>{username}</h6>
        <h6 className='youFollowers' onClick={followersHandler}>{followers} Followers .</h6>
        <h6 className='youFollowing' onClick={followingHandler}>{following} Following</h6>
    </div>
    );
};
export default YouCover;