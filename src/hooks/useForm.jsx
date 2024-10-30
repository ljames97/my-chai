import { useState } from "react";

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
