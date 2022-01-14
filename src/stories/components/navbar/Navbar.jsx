import React from 'react';
import PropTypes from 'prop-types';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Button } from '../button/Button';
import './navbar.css';

export const Navbar = ({ user, onLogin, upgrade, onCreateAccount }) => (
  <nav>
    <div className="wrapper">
        <div className='navigator'>
          <span className="navigator-icon">
            <IoChevronBackOutline size='28px' className='icon'/>
          </span>
          <span className="navigator-icon">
            <IoChevronForwardOutline size='28px' className='icon'/>
          </span>
        </div>
      <div className='w-4/12'>
        {user ? (
            <span className='button-cont'>
              <Button size="small" onClick={upgrade} label="Upgrade" />
              <Button size="small" primary onClick={upgrade} avatar={user.avatar} label={user.name} />
            </span>
        ) : (
          <span className='button-cont'>
            <Button size="small"  onClick={onLogin} label="Log in" />
            <Button size="small" onClick={onCreateAccount} label="Sign up" />
          </span>
        )}
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  upgrade: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  user: null,
};
