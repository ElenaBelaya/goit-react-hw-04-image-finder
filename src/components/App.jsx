import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { ImagyGallery } from "./ImageGallery/ImageGallery";
import * as API from './services/app';
import LoardMore from './Button/Button';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
  page: 1,
  pictures: [],
  query: '',
  isLoading: false  
} 

async componentDidUpdate(_, prevState) {
  if (prevState.page !== this.state.page || 
    prevState.query !== this.state.query) {      
    try{
      this.setState({ isLoading: true });
      const pictures = await API.getPictures(this.state.query, this.state.page);
      this.setState(state => ({
          pictures: [...state.pictures, ...pictures.hits],
          isLoading: false})) 
        
      
    } catch(error) {
      console.log(error.message);
    } 
      
   
         }
    }   
  
handleSubmit = async values => { 
    this.setState({
      page: 1,
      query: values.query,
      pictures: []});
 
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
     {this.state.isLoading ? 
      <Loader/>
      :<ImagyGallery
      pictures={this.state.pictures}/>}
     
      {this.state.pictures.length!==0  && 
        <LoardMore onLoadMore={this.handlLoadMore}/>}
        
     
      </>
    );
  }
 
};
 