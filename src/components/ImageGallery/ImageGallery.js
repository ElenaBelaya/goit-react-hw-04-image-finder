import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImagyGallery = ({ pictures }) => (
    <Gallery> 
    <ImageGalleryItem pictures={pictures}/>      
</Gallery>
)