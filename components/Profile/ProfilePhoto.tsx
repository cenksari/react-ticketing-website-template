type Props = {
  size?: string | 'small';
  text?: string;
  color?: string;
  image?: string;
};

const ProfilePhoto = ({ size, text, color, image }: Props) => {
  if (!image) {
    return (
      <div className='profile-photo'>
        <div className={`avatar ${size} ${color}`}>{text}</div>
      </div>
    );
  }

  return (
    <div className='profile-photo'>
      <div className={`cover ${size}`} style={{ backgroundImage: `url("${image}")` }} />
      {text && <span>{text}</span>}
    </div>
  );
};

export default ProfilePhoto;
