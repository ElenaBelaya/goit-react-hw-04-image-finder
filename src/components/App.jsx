import { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImagyGallery from './ImageGallery';
import * as API from './services/app';
import LoardMore from './Button';
import Loader from './Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    pictures: [],
    query: '',
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({ isLoading: true });
        const pictures = await API.getPictures(query, page);
        this.setState(state => ({
          pictures: [...state.pictures, ...pictures.hits],
          isLoading: false,
        }));
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  handleSubmit = async values => {
    this.setState({
      page: 1,
      query: values.query,
      pictures: [],
    });
  };

  handlLoadMore = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  render() {
    const { isLoading, pictures } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}

        <ImagyGallery pictures={pictures} isLoading={isLoading} />
        {pictures.length !== 0 && (
          <LoardMore onLoadMore={this.handlLoadMore} isLoading={isLoading} />
        )}
      </AppStyled>
    );
  }
}

App.propTypes = {
  page: PropTypes.number,
  pictures: PropTypes.array,
  query: PropTypes.string,
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handlLoadMore: PropTypes.func,
};
