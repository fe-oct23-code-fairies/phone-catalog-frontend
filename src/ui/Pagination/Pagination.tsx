import { useCatalogContext } from '../../context/CatalogContext/CatalogContext';
import { getNumbers } from '../../helpers/getNumbers';
import { CircleButton } from '../CircleButtonWithIcon';
import { Icon } from '../Icons';

export const Pagination = () => {
  const {
    totalItems, currentPage, itemsPerPage, setCurrentPage,
  }
    = useCatalogContext();
  const pagesCount = getNumbers(1, Math.ceil(totalItems / itemsPerPage));
  const isFirstPage = currentPage === pagesCount[0];
  const isLastPage = currentPage === pagesCount.length;
  const onPageChange = (page: number) => setCurrentPage(page);

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
