import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { ImagyGallery } from "./ImageGallery/ImageGallery";
import * as API from './services/app';

export class App extends Component {
  state = {
  pictures: [],
  isLoarding: false
  
} 



handleSubmit = async values => {
  try {
    this.setState ({isLoarding: true})    
    const pictures = await API.getPictures(values.name);
    this.setState({
      pictures: pictures.hits, 
      isLoarding: false})
      } catch(error) {
        console.log(error.message);
      }
}

  render() {
    return (
      <>
      <Searchbar
      onSubmit={this.handleSubmit}/>
      <ImagyGallery
      pictures={this.state.pictures}/> 
      </>
    );
  }
 
};
 