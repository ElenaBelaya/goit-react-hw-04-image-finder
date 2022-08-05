import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onModalClose, image, tag }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindow>
        <img src={image} alt={tag} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Modal;
