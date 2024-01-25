import { Icon } from '../../ui/Icons';
import './breadcrumbs.scss';

export const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs-wrapper">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <a href="/#" aria-label="home" className="breadcrumbs__link">
            <Icon iconName="home" />
          </a>
          <span className="breadcrumbs__icon">
            <Icon iconName="arrow-right" />
          </span>
        </li>
        <li className="breadcrumbs__item">
          <a href="/#" aria-label="home" className="breadcrumbs__link">
            Phone
          </a>
          <span className="breadcrumbs__icon">
            <Icon iconName="arrow-right" />
          </span>
        </li>
        <li className="breadcrumbs__item ">
          <span className="breadcrumbs__text-over">
            Phone iphnes max s5 full hd max prices s5 full hd max prices
          </span>
        </li>
      </ul>
      <a href="/#" className="back-link">
        <Icon iconName="arrow-left" />
        <span className="back-link__text">Back</span>
      </a>
    </div>
  );
};
