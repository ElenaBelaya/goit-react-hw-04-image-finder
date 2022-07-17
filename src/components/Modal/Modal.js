import { ModalWindow } from './Modal.styled';

const Modal = ({ onModalClose }) => {
return (
    <ModalWindow>
       <button type="button"
       onClick={onModalClose}>
        Close</button>
    </ModalWindow>
    
    )
}


export default Modal;