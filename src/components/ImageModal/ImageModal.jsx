import Modal from 'react-modal';

export default function ImageModal({isOpen, closeModal, selectedImage}){
    console.log(selectedImage);
    return(
        <Modal
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={closeModal}>
                <p>image</p>
                <img src={selectedImage.urls.full} alt={selectedImage.description} />
                <button onClick={closeModal}>Close</button>
        </Modal>
    )
}