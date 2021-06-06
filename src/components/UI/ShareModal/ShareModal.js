import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const ShareModal = (props) => {

    const [isLinkCopied, setIsLinkCopied] = useState(false);

    const handleCopyToClipboard = () => {
        setIsLinkCopied(true);
        setTimeout(() => {
            setIsLinkCopied(false);
        }, 1000);
    }

    return (
        <Modal
        show={props.isShareModalOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={props.handleCloseShareModal}
        
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.modalTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>
                External Share Link
                </h6>
                <CopyToClipboard style={{float: 'right', marginTop: '60px', marginRight: '20px'}} text={props.externalShareLink} onCopy={handleCopyToClipboard}>
                    <span>{isLinkCopied ? "Copied!" : <FileCopyOutlinedIcon />}</span>
                </CopyToClipboard>
                <input
                    style={{fontSize: '15px', width: '70%', textAlign: 'center', display: 'block', margin: '70px auto', padding: '0 40px', height: '53px' }} 
                    readonly="" type="text" class="grab-link-text-field" value={props.externalShareLink} id="yui_3_16_0_1_1618999453530_59005"></input>
            </Modal.Body>

        </Modal>
    );
}

export default ShareModal;