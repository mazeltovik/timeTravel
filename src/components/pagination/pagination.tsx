import './pagination.scss';
import { PaginationType } from './paginationTypes';
import Minus from '../../assets/Vector 2 (1).svg';
import Plus from '../../assets/Vector 2 (2).svg';
import onClickPagination from '../../handlers/onClickPagination';
import { useRef } from 'react';

export default function Pagination({
  currentPeriod,
  setCurrentPeriod,
  maxLength,
  ringMenu,
  setDest,
  setContent,
  setTheme,
}: PaginationType) {
  const bulletContainer = useRef<HTMLDivElement>(null);
  return (
    <div className="paginationContainer">
      <div className="counterPagination">
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
            setTheme,
            bulletContainer,
            false
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
      <div
        className="bulletPagination"
        ref={bulletContainer}
        onClick={onClickPagination(
          setCurrentPeriod,
          maxLength,
          ringMenu,
          setDest,
          setContent,
          setTheme,
          bulletContainer,
          true
        )}
      >
        {new Array(maxLength).fill(0).map((_, i) => {
          if (i == 0)
            return <div key={i} id={String(i)} className="active"></div>;
          else return <div key={i} id={String(i)}></div>;
        })}
      </div>
    </div>
  );
}
