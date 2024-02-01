/* eslint-disable no-useless-return */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { Icon } from '../../ui/Icons';

export const Login: React.FC = () => {
  const {
    email,
    password,
    passwordError,
    emailError,
    onLogin,
    onBlurEmail,
    onPasswordChange,
    onBlurPassword,
    onEmailChange,
    reset,
    resetErrors,
    isLoading,
  } = useAuth();

  const [openPassword, setOpenPassword] = useState(false);

  useEffect(() => {
    reset();
    resetErrors();
  }, []);

  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__subSection">
          <NavLink
            to=""
            className="auth__link auth__link--active"
          >
            Log in
          </NavLink>
          |
          <NavLink
            to="../signup"
            className="auth__link"
          >
            Sign up
          </NavLink>
        </div>
        <div className="auth__welcome">
          <p className="h2">Welcome to</p>
          <Logo />
        </div>
        <div className="auth__inputs">
          <div className="auth__input-div">
            <input
              type="email"
              className={classNames('auth__input', {
                'auth__input--error': emailError,
              })}
              placeholder="E-mail"
              value={email}
              onChange={onEmailChange}
              onBlur={onBlurEmail}
              disabled={isLoading}
            />

            {emailError && <p className="text-error">{emailError}</p>}
          </div>

          <div className="auth__input-div">
            <input
              type={openPassword ? 'text' : 'password'}
              className={classNames('auth__input', {
                'auth__input--error': passwordError,
              })}
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
              disabled={isLoading}
              onBlur={onBlurPassword}
            />

            {password && (
              <ButtonWithIcon
                additionalClass="auth__password-icon"
                onClick={() => setOpenPassword(!openPassword)}
              >
                {!openPassword
                  ? <Icon iconName="eye" />
                  : <Icon iconName="eyeshut" />}
              </ButtonWithIcon>
            )}

            {passwordError && <p className="text-error">{passwordError}</p>}
          </div>
        </div>
        <Button
          to=""
          btnClass="auth__btn"
          onClick={onLogin}
          isLoading={isLoading}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};
