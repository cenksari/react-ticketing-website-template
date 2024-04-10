type Props = {
  name: string;
  type: string;
  value?: string;
  maxLength: number;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
};

const Input = ({ name, type, value, maxLength, disabled, required, placeholder }: Props) => (
  <input
    id={name}
    type={type}
    name={name}
    autoComplete='off'
    readOnly={disabled}
    disabled={disabled}
    required={required}
    defaultValue={value}
    maxLength={maxLength}
    className='input-text'
    placeholder={placeholder}
  />
);

export default Input;
