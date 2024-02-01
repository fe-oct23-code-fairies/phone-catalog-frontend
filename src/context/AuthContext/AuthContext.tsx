/* eslint-disable no-useless-return */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { validatePassword } from '../../helpers/validatePassword';

interface AuthType {
  email: string,
  setEmail: (arg: string) => void,
  password: string,
  setPassword: (arg: string) => void,
  repeatedPassword: string,
  setRepeatedPassword: (arg: string) => void,
  passwordError: string,
  setPasswordError: (arg: string) => void,
  emailError: string,
  setRepeatedPasswordError: (arg: string) => void,
  repeatedPasswordError: string,
  setEmailError: (arg: string) => void,
  onLogin: () => void,
  onSignup: () => void,
  onBlurEmail: () => void,
  onBlurPassword: () => void,
  onBlurRepeatedPassword: () => void,
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onRepeatedPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
  resetErrors: () => void,
}

interface AuthProvider {
  children: React.ReactNode,
}

const AuthContext = createContext<AuthType>({
  email: '',
  setEmail: () => { },
  password: '',
  setPassword: () => { },
  repeatedPassword: '',
  setRepeatedPassword: () => { },
  passwordError: '',
  setPasswordError: () => { },
  emailError: '',
  setEmailError: () => { },
  repeatedPasswordError: '',
  setRepeatedPasswordError: () => { },
  onLogin: () => { },
  onSignup: () => { },
  onBlurEmail: () => { },
  onBlurPassword: () => { },
  onBlurRepeatedPassword: () => { },
  onPasswordChange: () => { },
  onRepeatedPasswordChange: () => { },
  onEmailChange: () => { },
  reset: () => { },
  resetErrors: () => { },
});

export const AuthContextProvider: React.FC<AuthProvider> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [repeatedPasswordError, setRepeatedPasswordError] = useState('');

  const reset = () => {
    setPassword('');
    setEmail('');
    setRepeatedPassword('');
  };

  const resetErrors = () => {
    setPasswordError('');
    setEmailError('');
    setRepeatedPasswordError('');
  };

  const onLogin = useCallback(
    () => {
      validatePassword(password, setPasswordError);

      if (!email) {
        setEmailError('Please enter your email');

        return;
      }

      reset();
    }, [email, password],
  );

  const onSignup = useCallback(
    () => {
      validatePassword(password, setPasswordError);

      if (repeatedPassword !== password) {
        setRepeatedPasswordError('Wrong password, please try again');

        return;
      }

      if (!email) {
        setEmailError('Please enter your email');

        return;
      }

      reset();
    }, [email, password, repeatedPassword],
  );

  const onBlurEmail = useCallback(
    () => {
      if (!email) {
        setEmailError('Please enter your email');
      }
    }, [email],
  );

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());
    setPasswordError('');
  };

  const onRepeatedPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatedPassword(e.target.value.trim());
    setRepeatedPasswordError('');
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value.trim());
    setEmailError('');
  };

  const onBlurPassword = useCallback(
    () => {
      validatePassword(password, setPasswordError);
    }, [password],
  );

  const onBlurRepeatedPassword = useCallback(
    () => {
      if (!repeatedPassword) {
        setRepeatedPasswordError('Please, repeat your password');

        return;
      }

      if (repeatedPassword !== password) {
        setRepeatedPasswordError('Wrong password, please try again');

        return;
      }
    }, [repeatedPassword, password],
  );

  const value = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    repeatedPassword,
    setRepeatedPassword,
    passwordError,
    setPasswordError,
    emailError,
    setEmailError,
    onLogin,
    onSignup,
    onBlurEmail,
    onBlurPassword,
    onPasswordChange,
    onEmailChange,
    repeatedPasswordError,
    setRepeatedPasswordError,
    onBlurRepeatedPassword,
    onRepeatedPasswordChange,
    reset,
    resetErrors,
  }), [
    email,
    password,
    repeatedPassword,
    passwordError,
    emailError,
    onLogin,
    onSignup,
    onBlurEmail,
    onBlurPassword,
    repeatedPasswordError,
    onBlurRepeatedPassword,
  ]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
