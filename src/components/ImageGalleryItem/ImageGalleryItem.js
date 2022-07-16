import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({pictures}) => (    
        <>
        {
        pictures.map(({id, webformatURL,largeImageURL, tags }) => 
        <GalleryItem key={id}>
        <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>   
       )}
        </>   
    
)

export default ImageGalleryItem;