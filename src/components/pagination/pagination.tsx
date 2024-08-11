import './pagination.scss';
import { PaginationType } from './paginationTypes';
import Minus from '../../assets/Vector 2 (1).svg';
import Plus from '../../assets/Vector 2 (2).svg';
import onClickPagination from '../../handlers/onClickPagination';

export default function Pagination({
  currentPeriod,
  setCurrentPeriod,
  maxLength,
  ringMenu,
  setDest,
  setContent,
  setTheme,
}: PaginationType) {
  return (
    <div className="paginationContainer">
      <div className="amountContainer">
        <p>{`0${currentPeriod + 1 + '/0' + maxLength}`}</p>
      </div>
      <div
        className="counterContainer"
        onClick={onClickPagination(
          setCurrentPeriod,
          maxLength,
          ringMenu,
          setDest,
          setContent,
          setTheme
        )}
      >
        <p className={currentPeriod != 0 ? 'minus' : 'minus over'}>
          <img src={Minus} alt="minus" />
        </p>
        <p className={currentPeriod < maxLength - 1 ? 'plus' : 'plus over'}>
          <img src={Plus} alt="plus" />
        </p>
      </div>
    </div>
  );
}
