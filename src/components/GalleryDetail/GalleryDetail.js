import React, { Fragment, useState, useEffect} from 'react';
import classes from './GalleryDetail.module.css';
import EditIcon from '@material-ui/icons/Edit';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { FaRegShareSquare } from 'react-icons/fa';
import ShareModal from '../UI/ShareModal/ShareModal';
import { Typography } from '@material-ui/core';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import AddIcon from '@material-ui/icons/Add';
import { Avatar } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import GalleryCard from './GalleryCard/GalleryCard';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Comments from '../PostDetail/Comments/Comments';

const tmp = "https://live.staticflickr.com/3677/13545844805_170ec3746b_z.jpg";
const DUMMY_PHOTOS = [
    {
        id: 1,
        photoSrc: tmp,
        owner: "abdelrahman",
        countFaves: 544,
        countComments: 10,
        title: "Cats",
        isFaved: true
    },
    {
        id: 2,
        photoSrc: tmp,
        owner: "mamdouh",
        countFaves: 5144,
        countComments: 0,
        title: "More Cats",
        isFaved: false
    },
    {
        id: 3,
        photoSrc: tmp,
        owner: "mahfouz",
        countFaves: 145,
        countComments: 33,
        title: "Advanced Cats",
        isFaved: false
    }
]


const GalleryDetail = (props) => {

    const galleryId = props.match.params.id;
    const [photos, setPhotos] = useState([]);
    const history = useHistory();
    const currentUserId = useSelector(state => state.users.currentUser.userId);
    const token = useSelector(state => state.users.currentUser.token);

    // TODO: get the user id of the owner of the gallery
    //       and check if this gallery is mine or not
    //       so that whether to write YOU! or owner name
    useEffect(() => {
        setPhotos(DUMMY_PHOTOS);
    }, [galleryId]);

    const handleGoBack = () => {
        history.push(`/user/${currentUserId}`);
    }

    return (
        <Fragment>
        <div className={classes.action__bar}>
            <div className={classes.action__content}>
                <div className={classes.back__link__container}>
                    <p onClick={handleGoBack}>← Back to home</p>
                </div>
                <div className={classes.actions}>
                    <div className={classes.action__item}>
                        <EditIcon />
                        <p>Edit</p>
                    </div>    
                    <div className={classes.action__item}>
                        <ChatBubbleOutlineOutlinedIcon />
                        <p>Comment</p>
                    </div>  
                    <div className={classes.action__item}>
                        <ShareOutlinedIcon />
                        <p>Share</p>
                    </div>  

                </div>
            </div>
        </div>
        <div className={classes.gallery__page__container}>
            <section className={classes.details__section}>
                <header>
                    <h1 className={classes.gallery__title}>Cats gallery</h1>
                    <p>a gallery curated by YOU!</p>
                </header>
                <div className={classes.stats}>
                    <span className={classes.stat}>2 items</span>
                    <span className={classes.stat}>0 views</span>
                    <span className={classes.stat}>5 comments</span>
                </div>
            </section>

            <section className={classes.photos__section}>
                <header className={classes.photos__section__header}>
                    <div className={classes.action__item}>
                        <AddIcon />
                        <p>Add</p>
                    </div>
                </header>

                <div className={classes.photo__list__container}>
                    <div className={classes.gallery__photo__card}>
                        <div className={classes.gallery__photo__container}>
                            {photos.map(photo => (
                                <GalleryCard
                                    key={photo.id}
                                    photoId={photo.id} 
                                    title={photo.title}
                                    countFaves={photo.countFaves}
                                    countComments={photo.countComments}
                                    owner={photo.owner}
                                    photoSrc={photo.photoSrc}
                                    isFaved={photo.isFaved}
                                />
                            ))}
                            
                        </div>
                    </div>
                </div>

            </section>
            <section className={classes.comments__section}>
                <h2>Comments</h2>
                <Comments token={token} isPhotoMine={false} userId={currentUserId} galleryId={galleryId} />

            </section>

        </div>
        </Fragment>
    );

}

export default GalleryDetail;


















