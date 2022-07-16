import { Component } from "react";
import Searchbar from './Searchbar';

export class App extends Component {

handleSubmit = (event) => {
console.log(event.currentTarget.value);
}


  render() {
    return (
      <>
      <Searchbar
      onSubmit={this.handleSubmit}/> 
      </>
    );
  }
 
};
 