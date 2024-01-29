import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Icon } from '../Icons';
import { useCatalogContext } from '../../context/CatalogContext';

type Props = {
  startValue?: string | number,
  itemIdx?: number,
  items: string[] | number[],
  onSelection?: (item: string | number) => void,
  description?: string,
};

export const Dropdown: React.FC<Props> = ({
  startValue,
  itemIdx,
  items,
  onSelection = () => { },
  description,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(
    itemIdx === 0 ? 0 : (itemIdx || -1),
  );

  const {
    parsedItemsPerPage,
    setItemsPerPage,
    parsedSortBy,
    setSortBy,
  } = useCatalogContext();

  useEffect(() => {
    setItemsPerPage(parsedItemsPerPage);
    setSortBy(parsedSortBy);
  });

  const firstValue = startValue || items[currentIdx] || 'Select a value';

  const onClick = (item: string | number, i: number) => {
    if (!isChanged) {
      setIsChanged(true);
    }

    onSelection(item);
    setCurrentIdx(i);
    setIsMenuOpen(false);
  };

  return (
    <div className="dropdown">
      {!!description && (
        <p className="text-small dropdown__description">{description}</p>
      )}
      <button
        type="button"
        className="dropdown__field"
        onBlur={() => setTimeout(() => setIsMenuOpen(false), 500)}
        onClick={() => setIsMenuOpen(prev => !prev)}
      >
        <p className="text-button dropdown__value">
          {isChanged ? items[currentIdx] : firstValue}
        </p>
        <div className="dropdown__icon">
          <Icon iconName={isMenuOpen ? 'arrow-up' : 'arrow-down'} />
        </div>
      </button>

      <ul className={cn(
        'dropdown__menu',
        { 'dropdown__menu--open': isMenuOpen },
      )}
      >
        {items.map((item, i) => (
          <li
            role="presentation"
            className={cn(
              'dropdown__menu-item',
              { 'dropdown__menu-item--active': i === currentIdx },
            )}
            key={item}
            onClick={() => onClick(item, i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
