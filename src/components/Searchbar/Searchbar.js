import {
  SearchbarStyled,
  ButtonLabel,
  FormStyled,
  FieldStyled,
  SearchButtonStyled,
} from './Searchbar.styled';
import { Formik } from 'formik';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
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
