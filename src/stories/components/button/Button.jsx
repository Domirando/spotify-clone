import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {IoCaretDownSharp, IoCaretUpOutline, IoOpenOutline } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import './button.css';

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
            {/*{open && props.children}*/}
            {open ? <DropdownMenu /> : ''}
          </>
          : label}
    </button>
  );
};

function DropdownMenu() {
  function DropdownItem(props) {
    return (
        <a href="#" className="menu-item">
          <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
  }
  return (
      <div className="dropdown">
        {/*<CSSTransition timeout={500}>*/}
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Upgrade to Premium</DropdownItem>
          <DropdownItem>Private Session</DropdownItem>
          <DropdownItem rightIcon={<IoOpenOutline />}>Settings</DropdownItem>
          <DropdownItem>Log out</DropdownItem>
        {/*</CSSTransition>*/}
      </div>
  )

}

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
