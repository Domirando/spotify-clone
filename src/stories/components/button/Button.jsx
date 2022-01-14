import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, avatar, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : '';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {avatar ?
          <details>
            <summary>
              <img src={avatar} className='avatar' alt='avatar' />
              <span>{label}</span>
            </summary>
            <ol>
              <li>Account</li>
              <li>Profile</li>
              <li>Upgrade to Premium</li>
              <li>Upgrade to Premium</li>
              <li>Private session</li>
              <li>Settings</li>
            </ol>
          </details>
          : label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
