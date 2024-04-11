type Props = {
  type?: string | 'button';
  text: string;
  color: string;
  leftIcon?: string;
  rightIcon?: string;
};

const Button = ({ type, text, color, leftIcon, rightIcon }: Props) => (
  <button type={type === 'button' ? 'button' : 'submit'} className={color}>
    {leftIcon && <span className='material-symbols-outlined left-icon'>{leftIcon}</span>}
    {text}
    {rightIcon && <span className='material-symbols-outlined right-icon'>{rightIcon}</span>}
  </button>
);

export default Button;
