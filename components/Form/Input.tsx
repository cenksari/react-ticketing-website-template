// interfaces
interface IProps {
  name: string;
  type: string;
  value?: string;
  maxLength: number;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<IProps> = ({
  name,
  type,
  value,
  maxLength,
  disabled,
  required,
  placeholder,
  onChange,
}) => (
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
