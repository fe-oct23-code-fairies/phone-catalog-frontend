import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCatalogContext } from '../../context/CatalogContext/CatalogContext';
import { getNumbers } from '../../helpers/getNumbers';
import { CircleButton } from '../CircleButtonWithIcon';
import { Icon } from '../Icons';

export const Pagination = () => {
  const {
    totalItems,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    sortBy,
  }
    = useCatalogContext();

  const [params, setParams] = useSearchParams();
  const paramsPage = params.get('page') || '1';

  const pagesCount = getNumbers(1, Math.ceil(totalItems / itemsPerPage));
  const isFirstPage = currentPage === pagesCount[0];
  const isLastPage = currentPage === pagesCount.length;

  useEffect(() => {
    setCurrentPage(+paramsPage);

    params.set('page', paramsPage.toString());
    params.set('perPage', itemsPerPage.toString());

    switch (sortBy) {
      case 'Alphabetically':
        params.set('sort', 'title');
        break;

      case 'Cheapest':
        params.set('sort', 'price');
        break;

      case 'Newest':
        params.set('sort', 'age');
        break;

      default:
        params.set('sort', 'all');
    }

    setParams(params);
  }, [itemsPerPage, params, paramsPage, setParams, setCurrentPage, sortBy]);

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
        <CircleButton
          onClick={backToPreviousPage}
          additionalClass={isFirstPage ? 'button-circle-icon--disabled' : ''}
        >
          <Icon iconName="arrow-left" />
        </CircleButton>
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
        <CircleButton
          onClick={goToNextPage}
          additionalClass={isLastPage ? 'button-circle-icon--disabled' : ''}
        >
          <Icon iconName="arrow-right" />
        </CircleButton>
      </li>
    </ul>
  );
};
