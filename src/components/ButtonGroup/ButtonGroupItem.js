import { memo } from 'react';

import PropTypes from 'prop-types';

const ButtonGroupItem = memo(({ text, active, disabled, onClick }) => {
  let className = '';

  if (disabled) {
    className = 'disabled';
  } else if (active) {
    className = 'active';
  } else {
    className = 'passive';
  }

  return (
    <button type='button' className={className} onClick={onClick}>
      {text}
    </button>
  );
});

ButtonGroupItem.defaultProps = {
  active: false,
  disabled: false,
  onClick: () => {},
};

ButtonGroupItem.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonGroupItem;
