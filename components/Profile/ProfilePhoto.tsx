// interfaces
interface IProps {
  size?: string | 'small';
  text?: string;
  color?: string;
  image?: string;
}

const ProfilePhoto: React.FC<IProps> = ({ size, text, color, image }) => {
  if (image === null) {
    return (
      <div className='profile-photo'>
        <div className={`avatar ${size} ${color}`}>{text}</div>
      </div>
    );
  }

  return (
    <div className='profile-photo'>
      <div className={`cover ${size}`} style={{ backgroundImage: `url("${image}")` }} />
      {text !== undefined && <span>{text}</span>}
    </div>
  );
};

export default ProfilePhoto;
