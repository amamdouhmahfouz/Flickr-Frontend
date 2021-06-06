import React, { Fragment, useState, useEffect } from 'react';
import classes from './YouGalleries.module.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateNewGalleryModal from './CreateNewGalleryModal/CreateNewGalleryModal';
import GalleryItem from './GalleryItem/GalleryItem';
import API from '../../fakeAPI';

const DUMMY_GALLERIES = [
    {
        id: 1,
        coverPhoto: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        countItems: 1,
        views: 90,
        countComments: 0,
        title: "Cats"
    },
    {
        id: 2,
        coverPhoto: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        countItems: 11,
        views: 0,
        countComments: 0,
        title: "Dogs"
    },
    {
        id: 3,
        coverPhoto: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        countItems: 1,
        views: 1,
        countComments: 88,
        title: "Cats"
    },
    {
        id: 4,
        coverPhoto: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        countItems: 2,
        views: 9,
        countComments: 10,
        title: "Cats"
    }
]

const YouGalleries = (props) => {

    const [isOpenGalleryModal, setIsOpenGalleryModal] = useState(false);
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        // TODO: make API request
        setGalleries(DUMMY_GALLERIES);
    }, []);

    const handleAddNewGallery = () => {

    }

    const handleOpenGalleryModal = () => {
        setIsOpenGalleryModal(true);
    }

    const handleCloseGalleryModal = () => {
        setIsOpenGalleryModal(false);
    }

    return (
        <div>
            <div className='background'>
            <div className={classes.galleries__list__container}>
                    <CreateNewGalleryModal openGalleryModal={isOpenGalleryModal}
                        closeGalleryModal={handleCloseGalleryModal}/>
                <div className={classes.galleries__list__toolbar}>
                    <AddBoxIcon className={classes.new__gallery__icon}
                        onClick={handleOpenGalleryModal}
                    />
                    <p className={classes.new__gallery__btn} >New gallery</p>
                </div>
                <div className={classes.gallery__items__list}>
                  
                  {galleries.map(gallery => (
                      <GalleryItem key={gallery.id} 
                      galleryId={gallery.id}
                      countViews={gallery.views}
                      countItems={gallery.countItems}
                      countComments={gallery.countComments}
                      galleryTitle={gallery.title} 
                      galleryCoverPhotoSrc={gallery.coverPhoto}/>
                  ))}
                   
                    
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default YouGalleries;