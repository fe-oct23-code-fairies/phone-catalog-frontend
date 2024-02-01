export const validatePassword
= (userPassword: string, setErrorMessage: (arg: string) => void) => {
  const noPassword = !userPassword;
  const invalidPasswordLength = userPassword.length < 8;
  const hasNumericSymbol = userPassword
    .split('').every(symbol => Number.isNaN(+symbol));
  const isAllCharactersNonNumeric = userPassword
    .split('').every(symbol => !Number.isNaN(+symbol));

  if (noPassword) {
    setErrorMessage('Please, enter your password');

    return false;
  }

  if (invalidPasswordLength) {
    setErrorMessage(
      'Password length should not be less than 8 symbols',
    );

    return false;
  }

  if (hasNumericSymbol) {
    setErrorMessage(
      'Password should include at least one numeric symbol',
    );

    return false;
  }

  if (isAllCharactersNonNumeric) {
    setErrorMessage(
      'Password should include both letters and at least one numeric symbol',
    );

    return false;
  }

  return userPassword;
};
