import { SearchbarStyled, ButtonLabel  } from "./Searchbar.styled";
import { Formik, Form, Field } from "formik";
import './Searchbar.css';


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
    <button type="submit" className="search-button"
    disabled={isSubmitting}>
      <ButtonLabel>Search</ButtonLabel>
    </button>
   
    <Field
      className="input"
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