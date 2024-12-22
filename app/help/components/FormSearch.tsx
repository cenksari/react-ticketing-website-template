'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';

// interfaces
interface IFormProps {
  keyword: string;
}

const FormSearch: React.FC = () => {
  const { showAlert } = useAlert();

  const [formValues, setFormValues] = useState<IFormProps>({
    keyword: '',
  });

  /**
   * Handles the change event for form inputs.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles the form submission event.
   *
   * Prevents the default form submission behavior, checks if the keyword input is valid (minimum 3 characters),
   * and displays an error alert if the input is invalid.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { keyword } = formValues;

    if (keyword === '' || keyword.length < 3) {
      showAlert({ type: 'error', text: 'Please enter minimum 3 characters for search.' });
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='search-inputs flex flex-h-center flex-space-between'>
        <Input
          type='text'
          name='keyword'
          value={formValues.keyword}
          maxLength={64}
          placeholder='Search keyword, topic, question'
          required
          onChange={handleChange}
        />
        <button type='submit'>
          <span className='material-symbols-outlined'>search</span>
        </button>
      </div>
    </form>
  );
};

export default FormSearch;
