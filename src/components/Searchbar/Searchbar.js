import { SearchbarStyled, SearchButton, ButtonLabel } from "./Searchbar.styled";
import { Formik, Form, Field } from "formik";


const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async(values, { setSubmitting, resetForm }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  }
return (
  <SearchbarStyled>
  <Formik 
    initialValues={{query: ''}}
    onSubmit={handleSubmit}>
    {({ isSubmitting }) => (
      <Form className="form"
      >
    <SearchButton type="submit"
    disabled={isSubmitting}>
      <ButtonLabel>Search</ButtonLabel>
    </SearchButton>

    <Field
      type="text"
      name="query"      
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
    )}
  
  </Formik> 
  </SearchbarStyled> 

)}

    export default Searchbar;