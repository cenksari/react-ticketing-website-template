type Props = {
  type?: string | 'button';
  text: string;
  color: string;
  leftIcon?: string;
  rightIcon?: string;
};

const Button = ({ type, text, color, leftIcon, rightIcon }: Props) => (
  <button type={type === 'button' ? 'button' : 'submit'} className={color}>
    {leftIcon && <i className='material-symbols-outlined left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-symbols-outlined right-icon'>{rightIcon}</i>}
  </button>
);

export default Button;
