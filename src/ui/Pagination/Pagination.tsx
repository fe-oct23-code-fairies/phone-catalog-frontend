import { useEffect } from 'react';
import { useCatalogContext } from '../../context/CatalogContext/CatalogContext';
import { getNumbers } from '../../helpers/getNumbers';
import { CircleButton, CircleButtonWithIcon } from '../CircleButtonWithIcon';
import { Icon } from '../Icons';

export const Pagination = () => {
  const {
    totalItems,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    setCurrentPage,
    params,
    setParams,
    parsedItemsPerPage,
    selectItemsPerPage,
    selectSortBy,
    parsedSortBy,
  }
    = useCatalogContext();

  const paramsPage = params.get('page') || '1';
  const paramsPerPage = params.get('perPage') || parsedItemsPerPage;
  const paramsSortBy = params.get('sort') || parsedSortBy;

  const pagesCount = getNumbers(1, Math.ceil(totalItems / itemsPerPage));
  const isFirstPage = currentPage === pagesCount[0];
  const isLastPage = currentPage === pagesCount.length;

  useEffect(() => {
    setCurrentPage(+paramsPage);
    setItemsPerPage(+paramsPerPage);
    selectItemsPerPage(+paramsPerPage);

    const sortByMappings: { [key: string]: string } = {
      price: 'Cheapest',
      title: 'Alphabetically',
      age: 'Newest',
      Cheapest: 'Cheapest',
      Alphabetically: 'Alphabetically',
      Newest: 'Newest',
    };

    selectSortBy(sortByMappings[paramsSortBy] || 'Newest');

    params.set('page', paramsPage);
    params.set('perPage', paramsPerPage.toString());
    params.set('sort', paramsSortBy);
  }, [
    params,
    paramsPage,
    paramsPerPage,
    paramsSortBy,
    selectItemsPerPage,
    selectSortBy,
    setCurrentPage,
    setItemsPerPage,
    itemsPerPage,
  ]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);

    const urlParams = new URLSearchParams(params);

    urlParams.set('page', page.toString());
    setParams(urlParams);
  };

  const goToNextPage = () => {
    return !isLastPage ? onPageChange(currentPage + 1) : currentPage;
  };

  const backToPreviousPage = () => {
    return !isFirstPage ? onPageChange(currentPage - 1) : currentPage;
  };

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <CircleButtonWithIcon
          onClick={backToPreviousPage}
          additionalClass={isFirstPage ? 'button-circle-icon--disabled' : ''}
        >
          <Icon iconName="arrow-left" />
        </CircleButtonWithIcon>
      </li>

      <div className="pagination__pages">
        {pagesCount.map((pageNumber) => (
          <li className="pagination__item" key={pageNumber}>
            <CircleButton
              onClick={() => onPageChange(pageNumber)}
              additionalClass={
                currentPage === pageNumber ? 'button-circle--active' : ''
              }
            >
              {pageNumber}
            </CircleButton>
          </li>
        ))}
      </div>

      <li className="pagination__item">
        <CircleButtonWithIcon
          onClick={goToNextPage}
          additionalClass={isLastPage ? 'button-circle-icon--disabled' : ''}
        >
          <Icon iconName="arrow-right" />
        </CircleButtonWithIcon>
      </li>
    </ul>
  );
};
