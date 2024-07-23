import React from 'react';

// interfaces
interface IProps {
  size?: string | 'small';
  text?: string;
  color?: string;
  image?: string;
}

const ProfilePhoto = ({ size, text, color, image }: IProps): React.JSX.Element => {
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
