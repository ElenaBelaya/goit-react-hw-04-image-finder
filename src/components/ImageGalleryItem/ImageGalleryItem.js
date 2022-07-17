import { Component } from 'react';
import { GalleryItemImage } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';


class ImageGalleryItem extends Component {
state = {
  isModalOpen: false,      
}; 

//componentDidMount () {
//  window.addEventListener('keydown', event => {     
//     if(event.code === "Escape") {
//      this.setState(state => ({
//        isModalOpen: !state.isModalOpen}))                 
//     }
//  })   
//  }

handleModalClose = () => { 
  this.setState ({isModalOpen: false})  
}

handleModalOpen = () => {
  this.setState ({isModalOpen: true})
}
 



//handleModalClose = (event) => {
//        console.log(event);
//if(event.target.nodeName === "DIV" || event.code === "Escape") {
//this.setState({isModalOpen: false})     
//}
//}

render() {
const { picture } = this.props;        
return (    
<>
    <GalleryItemImage 
    src={picture.webformatURL} alt={picture.tags}
    onClick={this.handleModalOpen}/>
   {this.state.isModalOpen && 
    <Modal 
    onModalClose={this.handleModalClose}
    image={picture.largeImageURL}
    tag={picture.tags}>
      {this.props.children}
    </Modal>
   }    
 
  </>
   )}        
}

    


export default ImageGalleryItem;