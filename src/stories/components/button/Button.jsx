import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {IoCaretDownSharp, IoCaretUpOutline} from "react-icons/io5";
import './button.css';
import {DropdownMenu} from "../dropdown/Dropdown";


export const Button = ({ primary, avatar, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : '';
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {avatar ?
          <>
            <img src={avatar} className='avatar' alt='avatar' />
            <span>{label}</span>
            <IoCaretDownSharp onClick={() => setOpen(!open)} size='15px'/>
            {open ? <DropdownMenu /> : null}
          </>
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
