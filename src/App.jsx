import { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import ImagyGallery from './components/ImageGallery';
import * as API from './services/app';
import LoardMore from './components/Button';
import Loader from './components/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { AppStyled } from './App.styled';

export function App() {
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(false);
  }, []);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function Pictures() {
      try {
        setIsLoding(true);
        const pictures = await API.getPictures(query, page);
        setPictures(state => [...state, ...pictures.hits]);
        setIsLoding(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    Pictures();
  }, [page, query]);

  function handleSubmit(values) {
    setPage(1);
    setQuery(prev => (prev !== values.query ? values.query : prev));
    setPictures([]);
  }

  function handlLoadMore() {
    setPage(state => state + 1);
  }

  return (
    <AppStyled>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}

      <ImagyGallery pictures={pictures} isLoading={isLoading} />
      {pictures.length !== 0 && (
        <LoardMore onLoadMore={handlLoadMore} isLoading={isLoading} />
      )}
    </AppStyled>
  );
}
