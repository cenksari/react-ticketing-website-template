import React from 'react';

interface IProps {
  name: string;
  type: string;
  value?: string | '';
  maxLength: number;
  disabled?: boolean | false;
  required?: boolean | false;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  name,
  type,
  value,
  maxLength,
  disabled,
  required,
  placeholder,
  onChange,
}: IProps): React.JSX.Element => (
  <input
    id={name}
    type={type}
    name={name}
    autoComplete='off'
    readOnly={disabled}
    disabled={disabled}
    required={required}
    value={value}
    maxLength={maxLength}
    className='input-text'
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default Input;
