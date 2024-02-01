/* eslint-disable no-useless-return */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from '../../helpers/validatePassword';
import { client } from '../../utils/fetchClient';
import { User } from '../../types/User';

interface AuthType {
  email: string;
  setEmail: (arg: string) => void;
  password: string;
  setPassword: (arg: string) => void;
  repeatedPassword: string;
  setRepeatedPassword: (arg: string) => void;
  passwordError: string;
  setPasswordError: (arg: string) => void;
  emailError: string;
  setRepeatedPasswordError: (arg: string) => void;
  repeatedPasswordError: string;
  isLoading: boolean;
  setEmailError: (arg: string) => void;
  onLogin: () => void;
  onSignup: () => void;
  onBlurEmail: () => void;
  onBlurPassword: () => void;
  onBlurRepeatedPassword: () => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRepeatedPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  resetErrors: () => void;
}

interface AuthProvider {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthType>({
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
  repeatedPassword: '',
  setRepeatedPassword: () => {},
  passwordError: '',
  setPasswordError: () => {},
  emailError: '',
  setEmailError: () => {},
  repeatedPasswordError: '',
  setRepeatedPasswordError: () => {},
  isLoading: false,
  onLogin: () => {},
  onSignup: () => {},
  onBlurEmail: () => {},
  onBlurPassword: () => {},
  onBlurRepeatedPassword: () => {},
  onPasswordChange: () => {},
  onRepeatedPasswordChange: () => {},
  onEmailChange: () => {},
  reset: () => {},
  resetErrors: () => {},
});

export const AuthContextProvider: React.FC<AuthProvider> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [repeatedPasswordError, setRepeatedPasswordError] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

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

  const onLogin = useCallback(() => {
    if (isLoading) {
      return;
    }

    if (!email) {
      setEmailError('Please enter your email');

      return;
    }

    setIsloading(true);

    client
      .login<User>({ email, password })
      .then(user => {
        localStorage.setItem('login', JSON.stringify(user));

        navigate('/');
      })
      .catch(error => {
        if (error.message.includes('email')) {
          setEmailError(error.message);
        } else {
          setPasswordError(error.message);
        }
      })
      .finally(() => setIsloading(false));
  }, [email, password]);

  const onSignup = useCallback(() => {
    if (!validatePassword(password, setPasswordError)) {
      return;
    }

    if (repeatedPassword !== password) {
      setRepeatedPasswordError('Wrong password, please try again');

      return;
    }

    if (!email) {
      setEmailError('Please enter your email');

      return;
    }

    setIsloading(true);

    client
      .register<User>({ email, password })
      .then(user => {
        localStorage.setItem('login', JSON.stringify(user));

        navigate('/');
      })
      .catch(error => {
        if (error.message.includes('user')) {
          setEmailError(error.message);
        } else {
          setPasswordError(error.message);
        }
      })
      .finally(() => setIsloading(false));
  }, [email, password, repeatedPassword]);

  const onBlurEmail = useCallback(() => {
    if (!email) {
      setEmailError('Please enter your email');
    }
  }, [email]);

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

  const onBlurPassword = useCallback(() => {
    validatePassword(password, setPasswordError);
  }, [password]);

  const onBlurRepeatedPassword = useCallback(() => {
    if (!repeatedPassword) {
      setRepeatedPasswordError('Please, repeat your password');

      return;
    }

    if (repeatedPassword !== password) {
      setRepeatedPasswordError('Wrong password, please try again');

      return;
    }
  }, [repeatedPassword, password]);

  const value = useMemo(
    () => ({
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
      isLoading,
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
    }),
    [
      email,
      password,
      repeatedPassword,
      passwordError,
      emailError,
      isLoading,
      onLogin,
      onSignup,
      onBlurEmail,
      onBlurPassword,
      repeatedPasswordError,
      onBlurRepeatedPassword,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
