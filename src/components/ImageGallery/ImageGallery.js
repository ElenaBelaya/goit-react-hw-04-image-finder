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

ImagyGallery.propTypes = {
  pictures: PropTypes.array,
  id: PropTypes.string,
};

export default ImagyGallery;
