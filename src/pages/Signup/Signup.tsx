import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../ui/Logo';
import { Button } from '../../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { ButtonWithIcon } from '../../ui/ButtonWithIcon';
import { Icon } from '../../ui/Icons';

export const Signup: React.FC = () => {
  const {
    email,
    password,
    repeatedPassword,
    repeatedPasswordError,
    passwordError,
    emailError,
    isLoading,
    onSignup,
    onBlurEmail,
    onBlurPassword,
    onPasswordChange,
    onEmailChange,
    onRepeatedPasswordChange,
    reset,
    resetErrors,
    onBlurRepeatedPassword,
  } = useAuth();

  const [openPassword, setOpenPassword] = useState(false);
  const [openRepeatedPassword, setOpenRepeatedPassword] = useState(false);

  useEffect(() => {
    reset();
    resetErrors();
  }, []);

  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__subSection">
          <NavLink
            to="../signin"
            className="auth__link"
          >
            Log in
          </NavLink>
          |
          <NavLink
            to=""
            className="auth__link auth__link--active"
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
              onBlur={onBlurPassword}
            />

            {password && (
              <ButtonWithIcon
                additionalClass="auth__password-icon"
                onClick={() => {
                  setOpenPassword(!openPassword);
                  setOpenRepeatedPassword(!openPassword);
                }}
              >
                {!openPassword
                  ? <Icon iconName="eye" />
                  : <Icon iconName="eyeshut" />}
              </ButtonWithIcon>
            )}

            {passwordError && <p className="text-error">{passwordError}</p>}
          </div>

          <div className="auth__input-div">
            <input
              type={openRepeatedPassword ? 'text' : 'password'}
              className={classNames('auth__input', {
                'auth__input--error': repeatedPasswordError,
              })}
              placeholder="Repeat your password"
              value={repeatedPassword}
              onChange={onRepeatedPasswordChange}
              disabled={!password}
              onBlur={onBlurRepeatedPassword}
            />

            {repeatedPasswordError && (
              <p className="text-error">{repeatedPasswordError}</p>
            )}
          </div>
        </div>

        <Button
          to=""
          btnClass="auth__btn"
          onClick={onSignup}
          isLoading={isLoading}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};
