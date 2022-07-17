import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onModalClose();
    }
  };
  render() {
    const { image, tag } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackDropClick}>
        <ModalWindow>
          <img src={image} alt={tag} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  tag: PropTypes.string,
  image: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleBackDropClick: PropTypes.func,
};
