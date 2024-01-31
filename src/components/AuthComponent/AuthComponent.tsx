import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/Button';

export const AuthComponent: React.FC = () => {
  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__subSection">
          <NavLink to="" className="auth__link auth__link--active">
            Log in
          </NavLink>
          |
          <NavLink to="" className="auth__link">
            Sign up
          </NavLink>
        </div>
        <div className="auth__welcome">
          <p className="h2">
            Welcome to
          </p>
          <Logo />
        </div>
        <div className="auth__inputs">
          <input
            type="email"
            className="auth__input"
            placeholder="E-mail"
          />
          <input
            type="email"
            className="auth__input"
            placeholder="Password"
          />
        </div>
        <Button
          to=""
          btnClass="auth__btn"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};
