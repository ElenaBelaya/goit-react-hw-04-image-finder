import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImagyGallery = ({ pictures }) => {
  return (
    <Gallery>
      {pictures.map(picture => (
        <GalleryItem key={picture.id}>
          <ImageGalleryItem picture={picture} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

export default ImagyGallery;

ImagyGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
