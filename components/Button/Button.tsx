// interfaces
interface IProps {
  type?: string | 'button';
  text: string;
  color: string;
  leftIcon?: string;
  rightIcon?: string;
}

const Button: React.FC<IProps> = ({ type, text, color, leftIcon, rightIcon }) => (
  <button type={type === 'button' ? 'button' : 'submit'} className={`button ${color}`}>
    {leftIcon !== undefined && (
      <span className='material-symbols-outlined left-icon'>{leftIcon}</span>
    )}
    {text}
    {rightIcon !== undefined && (
      <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
    )}
  </button>
);

export default Button;
