import { useState } from "react";

/**
 * Manages form state, handle changes, and validate form submissions.
 * 
 * @param {Object} initialValues - An object representing the initial state of the form fields.
 * @returns {Object} - Contains the following properties and methods:
 *   - `formData`: The current state of the form data.
 *   - `setFormData`: Function to update the form data programmatically.
 *   - `handleChange`: Function to handle changes in form fields.
 *   - `handleSubmit`: Function to handle form submission with validation.
 *   - `setIsError`: Function to manually update the error state.
 *   - `isError`: Boolean indicating if there are errors in the form.
 *   - `isSubmit`: Boolean indicating if the form has been successfully submitted.
 */
const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
  
    const [parentField, childField] = id.split('.'); 
  
    if (formData[parentField] && typeof formData[parentField] === 'object') {
      setFormData((prevData) => ({
        ...prevData,
        [parentField]: {
          ...prevData[parentField],
          [childField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = (event, callback) => {
    event.preventDefault();
  
    const hasError = Object.values(formData).some((value) => {
      if (typeof value === 'object' && value !== null) {
        return Object.values(value).some((nestedValue) => nestedValue === '');
      }
      return value === '';
    });
  
    if (hasError) {
      setIsError(true);
      return;
    }
  
    setIsError(false);
    setIsSubmit(true);
    callback();
  
    setFormData(initialValues);
  }

  return { formData, setFormData, handleChange, handleSubmit, setIsError, isError, isSubmit };
};

export default useForm;
