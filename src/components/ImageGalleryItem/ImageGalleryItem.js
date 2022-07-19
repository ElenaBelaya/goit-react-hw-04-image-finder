import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { picture } = this.props;
    return (
      <>
        <GalleryItemImage
          src={picture.webformatURL}
          alt={picture.tags}
          onClick={this.handleModalOpen}
        />
        {this.state.isModalOpen && (
          <Modal
            onModalClose={this.handleModalClose}
            image={picture.largeImageURL}
            tag={picture.tags}
          >
            {this.props.children}
          </Modal>
        )}
      </>
    );
  }
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
