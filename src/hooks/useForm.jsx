import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id in formData.shippingAddress) {
      setFormData((prevData) => ({
        ...prevData,
        shippingAddress: {
          ...prevData.shippingAddress,
          [id]: value,
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  }

  const handleSubmit = (event, callback) => {
    event.preventDefault();

    const hasError = Object.values(formData).some((value) => value === '') || 
      Object.values(formData.shippingAddress).some((value) => value === '');

    if (hasError) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSubmit(true);
    callback();

    setFormData(initialValues);
  }

  return { formData, handleChange, handleSubmit, isError, isSubmit };
};

export default useForm;
