import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { ImagyGallery } from "./ImageGallery/ImageGallery";
import * as API from './services/app';
import LoardMore from './Button/Button';

export class App extends Component {
  state = {
  page: 1,
  pictures: [],
  query: ''  
} 

async componentDidUpdate(_, prevState) {
  if (prevState.page !== this.state.page || 
    prevState.query !== this.state.query) {      
    try{
      const pictures = await API.getPictures(this.state.query, this.state.page);
      this.setState({
          pictures: pictures.hits}) 
        
      
    } catch(error) {
      console.log(error.message);
    } 
      
   
         }
    }   
  
handleSubmit = async values => { 
    this.setState({
      page: 1,
      query: values.query});
 
}

handlLoadMore = () => {
this.setState(state => ({
  page: state.page + 1,
}))
};

  render() {
    return (
      <>
      <Searchbar
      onSubmit={this.handleSubmit}/>
      <ImagyGallery
      pictures={this.state.pictures}/>
     <LoardMore onLoadMore={this.handlLoadMore}/>
      </>
    );
  }
 
};
 