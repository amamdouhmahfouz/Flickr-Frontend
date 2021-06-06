import React, { Fragment, useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import classes from './GalleryCard.module.css';
import { Link } from 'react-router-dom';


const tmp = "https://live.staticflickr.com/3677/13545844805_170ec3746b_z.jpg";

const GalleryCard = (props) => {

    const [isFaved, setIsFaved] = useState(false);

    useEffect(() => {
        setIsFaved(props.isFaved);
    }, [props.photoId])

    const handleFave = () => {
        // TODO: make API request
        setIsFaved(prev => !prev);
    }

    return (
        <div className={classes.photo__container}>

            <div className={classes.photo}>
                <img src={props.photoSrc} />
            </div>

            <div className={classes.photo__info__bar}>
                <div className={classes.details__container}>
                    <Avatar src={tmp} />
                    <div className={classes.details}>
                        <Link className={classes.details__title}>{props.title}</Link>
                        <Link className={classes.attribution}>by {props.owner}</Link>
                    </div>
                </div>

                <div className={classes.engagement}>
                    <span className={classes.engagement__item} onClick={handleFave}>
                        {!isFaved ? <StarOutlineIcon /> : <StarIcon />}
                        <span className={classes.engagement__count}>{props.countFaves}</span>
                    </span>
                    <span className={classes.engagement__item} style={{cursor: 'default'}}>
                        <ChatBubbleOutlineIcon />
                        <span className={classes.engagement__count}>{props.countComments}</span>
                    </span>
                    
                </div>

            </div>

        </div>
    );
}

export default GalleryCard;