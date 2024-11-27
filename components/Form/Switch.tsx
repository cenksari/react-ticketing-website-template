// interfaces
interface IProps {
  name: string;
  color: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Switch = ({ name, color, checked, children, onChange }: IProps): JSX.Element => (
  <div className='switch-container'>
    <label htmlFor={name} className={`switch ${color}`}>
      <input name={name} id={name} type='checkbox' defaultChecked={checked} onChange={onChange} />
      <span className='slider round' />
    </label>
    {children !== undefined && <span className='switch-description'>{children}</span>}
  </div>
);

export default Switch;
