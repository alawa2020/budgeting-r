import { useState } from 'react';

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleValues = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return [formValues, handleValues, resetForm];
};

export default useForm;
