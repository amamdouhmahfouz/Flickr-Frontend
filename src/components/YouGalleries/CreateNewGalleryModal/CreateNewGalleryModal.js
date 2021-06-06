import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import classes from './CreateNewGalleryModal.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNewGalleryModal = (props) => {

    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false); //redundant
    const [isCreateNewGalleryFormOpen, setIsCreateNewGalleryFormOpen] = useState(false);
    const [newGalleryName, setNewGalleryName] = useState('');
    const [galleryDescription, setGalleryDescription] = useState('');

    const handleCloseGalleryModal = () => {
        setIsGalleryModalOpen(false);
        setIsCreateNewGalleryFormOpen(false);
        props.closeGalleryModal();
    }

    const handleGalleryNameChange = (event) => {
        setNewGalleryName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setGalleryDescription(event.target.value);
    }

    /**
     * Sends you to another model where you type the name of the new gallery
     * and a description about it
     */
    const handleCreateNewGallery = () => {
        setIsCreateNewGalleryFormOpen(true);
    }

    const CreateNewGallery = () => {
        alert("created new gallery")
        // TODO: API request
        setIsGalleryModalOpen(false);
        setIsCreateNewGalleryFormOpen(false);
        props.closeGalleryModal();
    }

    return (
        <Fragment>
            

            <Modal
            show={props.openGalleryModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleCloseGalleryModal}
            
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create a new gallery
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            <div style={{height: '380px'}}>
                
                <input onChange={handleGalleryNameChange} value={newGalleryName} type="text" placeholder="Gallery name" className={classes.create__gallery__name}/>
                <textarea onChange={handleDescriptionChange} value={galleryDescription} type="text" placeholder="Description (optional)" className={classes.create__description} ></textarea>

                <div className={classes.create__footer}>
                    <div className={classes.buttons}>
                        <Button onClick={handleCloseGalleryModal} style={{marginRight: '20px', marginTop: '90px', marginBottom: '10px', backgroundColor: '#979ea2', color: 'white'}}>Cancel</Button>
                        <Button onClick={CreateNewGallery} style={{marginRight: '20px', marginTop: '90px', marginBottom: '10px', backgroundColor: '#128fdc', color: 'white'}}>Create</Button>
                    </div>
                </div>
            </div>
                
     
            </Modal.Body>
                
            </Modal>
        </Fragment>
    );
}

export default CreateNewGalleryModal;
