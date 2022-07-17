import { Component } from 'react';
import { GalleryItemImage } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';


class ImageGalleryItem extends Component {
state = {
  isModalOpen: false,      
}; 

handleModalOpen = () => {
  this.setState({isModalOpen: true})      
}

handleModalClose = () => {
   this.setState({isModalOpen: false})      
}

render() {
const { picture } = this.props;        
return (    
<>
    <GalleryItemImage 
    src={picture.webformatURL} alt={picture.tags}
    onClick={this.handleModalOpen}/>
   {this.state.isModalOpen && 
    <Modal onModalClose={this.handleModalClose} />
   }    
 
  </>
   )}        
}

    


export default ImageGalleryItem;