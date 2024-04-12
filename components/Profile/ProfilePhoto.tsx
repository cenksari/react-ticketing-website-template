import React from 'react';

interface IProps {
  size?: string | 'small';
  text?: string | null;
  color?: string | null;
  image?: string | null;
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
