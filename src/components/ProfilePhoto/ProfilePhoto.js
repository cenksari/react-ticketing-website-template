import { memo } from 'react';

import PropTypes from 'prop-types';

const ProfilePhoto = memo(({ color, size, text, image }) => {
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
});

ProfilePhoto.defaultProps = {
  size: 'small',
  text: null,
  color: null,
  image: null,
};

ProfilePhoto.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
};

export default ProfilePhoto;
