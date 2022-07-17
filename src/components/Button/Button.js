import { Button } from './Button.styled';
import PropTypes from 'prop-types';

const LoardMore = ({ onLoadMore }) => (
  <Button type="button" onClick={onLoadMore}>
    Loard more
  </Button>
);

export default LoardMore;

LoardMore.propTypes = {
  onLoadMore: PropTypes.func,
};
