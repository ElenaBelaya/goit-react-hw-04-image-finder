import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

function ImageGalleryItem({ picture }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <GalleryItemImage
        src={picture.webformatURL}
        alt={picture.tags}
        onClick={handleModalOpen}
      />
      {isModalOpen && (
        <Modal
          onModalClose={handleModalClose}
          image={picture.largeImageURL}
          tag={picture.tags}
        >
          {picture.children}
        </Modal>
      )}
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictures: PropTypes.array,
  image: PropTypes.string,
  tag: PropTypes.string,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  isModalOpen: PropTypes.bool,
  handleModalClose: PropTypes.func,
  handleModalOpen: PropTypes.func,
};
