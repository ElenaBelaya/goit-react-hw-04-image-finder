import {
  SearchbarStyled,
  ButtonLabel,
  FormStyled,
  FieldStyled,
  SearchButtonStyled,
} from './Searchbar.styled';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
  };
  return (
    <SearchbarStyled>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormStyled>
            <SearchButtonStyled type="submit" disabled={isSubmitting}>
              <ButtonLabel>Search</ButtonLabel>
            </SearchButtonStyled>

            <FieldStyled
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormStyled>
        )}
      </Formik>
    </SearchbarStyled>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
