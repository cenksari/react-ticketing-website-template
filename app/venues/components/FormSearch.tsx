'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Input from '@components/Form/Input';

interface IFormProps {
  keyword: string;
}

const FormSearch: React.FC = () => {
  const { showAlert } = useAlert();

  const [formValues, setFormValues] = useState<IFormProps>({
    keyword: '',
  });

  /**
   * Handle change in the form input
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object
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
   * Prevents the default form submission behavior and checks if the keyword input is valid.
   * If the keyword is empty or less than 3 characters, it displays an error alert.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
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
          placeholder='Venue name, keyword, location'
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
