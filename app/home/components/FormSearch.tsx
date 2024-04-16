'use client';

import React, { type FormEvent } from 'react';

import Input from '@components/Form/Input';

import useAlert from '@hooks/useAlert';

interface IFormProps {
  keyword: string;
}

const FormSearch = (): React.JSX.Element => {
  const { showAlert } = useAlert();

  const [formValues, setFormValues] = React.useState<IFormProps>({
    keyword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
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
          placeholder='Event, venue, artist, keyword'
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
