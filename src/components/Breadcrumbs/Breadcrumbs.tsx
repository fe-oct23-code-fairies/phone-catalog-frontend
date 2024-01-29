import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../../ui/Icons';
import './breadcrumbs.scss';
import { GoBack } from './GoBack';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathCrumbs
    = location.pathname.split('/').filter(segment => segment !== '');

  return (
    <div className="breadcrumbs-wrapper">
      <ul className="breadcrumbs">
        <li className="breadcrumbs__item">
          <Link to="/#" aria-label="home" className="breadcrumbs__link">
            <Icon iconName="home" />
          </Link>
          <span className="breadcrumbs__icon">
            <Icon iconName="arrow-right" />
          </span>
        </li>
        {
          pathCrumbs.map((item, ind) => {
            if (ind === pathCrumbs.length - 1) {
              return (
                <li className="breadcrumbs__item " key={`${item + ind}`}>
                  <span className="breadcrumbs__text-over">
                    {item}
                  </span>
                </li>
              );
            }

            return (
              <li className="breadcrumbs__item" key={`${item + ind}`}>
                <Link to={`/${item}`} aria-label="home" className="breadcrumbs__link">
                  {item}
                </Link>
                <span className="breadcrumbs__icon">
                  <Icon iconName="arrow-right" />
                </span>
              </li>
            );
          })
        }
      </ul>
      {
        pathCrumbs.length > 1 && <GoBack />
      }

    </div>
  );
};
