import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { FaRegShareSquare } from 'react-icons/fa';
import galleryClasses from './GalleryItem.module.css';
import ShareModal from '../../UI/ShareModal/ShareModal';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: "20px",
    marginBottom: "15px",
    minWidth: "340px",
    minHeight: "300px"
  },
  media: {
    height: 240,
  },
});

const GalleryItem = (props) => {
    const classes = useStyles();

    const [isShareModalOpen, setIsShareModalOpen] = useState(false);

 

    const handleShareGallery = () => {
        setIsShareModalOpen(true);
    }

    const handleCloseShareModal = () => {
        setIsShareModalOpen(false);
    }


  return (
    <Card className={classes.root}>
      <Link to={`/gallery/${props.galleryId}`}><CardActionArea> 
        <CardMedia
          className={classes.media}
          image={props.galleryCoverPhotoSrc}
          title={props.galleryTitle}
        />
      </CardActionArea></Link>
     
      <Link to={`/gallery/${props.galleryId}`} style={{textDecoration: 'none', color: 'black'}}>
          <div className={galleryClasses.gallery__title}>
                {props.galleryTitle}
          </div>
      </Link>
          <div style={{display: 'flex', flexDirection: 'row', marginLeft: '10px', marginRight: '10px'}}>
              <p className={galleryClasses.stats}>{props.countItems} item</p>
              <p className={galleryClasses.stats}>{props.countViews} views</p>
              <p className={galleryClasses.stats}>{props.countComments} comments</p>
            <FaRegShareSquare onClick={handleShareGallery} className={galleryClasses.share__btn} />
          </div>
          <ShareModal 
            isShareModalOpen={isShareModalOpen} 
            handleCloseShareModal={handleCloseShareModal}
            modalTitle="Share the gallery"
            externalShareLink="http://www.google.com"
        />
       
    </Card>
  );
}

export default GalleryItem;