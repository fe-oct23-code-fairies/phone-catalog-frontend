import cn from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return cn('header__link', { 'header__link--active': isActive }, 'text-link');
};
