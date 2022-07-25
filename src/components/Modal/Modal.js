import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onModalClose, image, tag }) {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

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
  tag: PropTypes.string,
  image: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleBackDropClick: PropTypes.func,
};

export default Modal;
