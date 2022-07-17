import { Audio } from 'react-loader-spinner';
import { Div } from './Loader.styled';

const Loader = () => (
  <Div>
    <Audio height="150" width="150" color="#ff1693" />
  </Div>
);

export default Loader;
