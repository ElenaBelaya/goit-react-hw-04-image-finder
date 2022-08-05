import { Button } from './Button.styled';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const LoardMore = ({ onLoadMore, isLoading }) => {
  if (!isLoading) {
    return (
      <Button type="button" onClick={onLoadMore}>
        Loard more
      </Button>
    );
  } else {
    return <Loader />;
  }
};

export default LoardMore;

LoardMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
