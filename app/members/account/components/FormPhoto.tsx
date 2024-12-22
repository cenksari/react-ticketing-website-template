'use client';

import { useState } from 'react';

// hooks
import useAlert from '@hooks/useAlert';

// components
import Loader from '@components/Loader/Loader';
import ProfilePhoto from '@components/Profile/ProfilePhoto';

// utils
import Request, { type IRequest, type IResponse } from '@utils/Request';

// interfaces
interface IProps {
  data: string;
}

const FormPhoto: React.FC<IProps> = ({ data }) => {
  const { showAlert, hideAlert } = useAlert();

  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Handles the form submission event.
   *
   * This function is called when the form is submitted. It prevents the default form submission behavior,
   * hides any existing alert, sets the loading state to true, sends a POST request to the signin/password endpoint,
   * and handles the response. If the response status is 200, it does nothing. If the status is not 200, it shows an error alert.
   * Finally, it sets the loading state back to false.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {Promise<any>} A promise that resolves when the request is complete.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    hideAlert();

    setLoading(true);

    const parameters: IRequest = {
      url: 'v1/signin/password',
      method: 'POST',
      postData: {
        email: '',
        password: '',
      },
    };

    const req: IResponse = await Request.getResponse(parameters);

    const { status, data } = req;

    if (status === 200) {
      //
    } else {
      showAlert({ type: 'error', text: data.title ?? '' });
    }

    setLoading(false);
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Hang on a second' />;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='upload-picture'>
        <input type='file' name='image' id='image' className='input-file' accept='.jpg,.jpeg' />
        <label htmlFor='image'>
          <span className='material-symbols-outlined'>add_a_photo</span>
        </label>
        <ProfilePhoto image={data} size='large' />
        <span className='muted'>click picture to change</span>
      </div>
    </form>
  );
};

export default FormPhoto;
