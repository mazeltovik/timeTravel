//Styles
import './timePeriod.scss';

//React
import { useState, useEffect } from 'react';

//Handlers

//Types
import { TimePeriodProps } from './timePeriodTypes';

export default function TimePeriod({
  period1,
  setPeriod1,
  period2,
  setPeriod2,
  dest,
}: TimePeriodProps) {
  useEffect(() => {
    const [dest1, dest2] = dest;
    if (period1 != dest1 && period2 != dest2) {
      if (period1 < dest1 && period2 < dest2) {
        setTimeout(() => {
          setPeriod1(period1 + 1);
          setPeriod2(period2 + 1);
        }, 100);
      } else {
        setTimeout(() => {
          setPeriod1(period1 - 1);
          setPeriod2(period2 - 1);
        }, 100);
      }
    }
  }, [period1, period2, dest]);
  return (
    <div className="timeContainer">
      <p>{period1}</p>
      <p>{period2}</p>
    </div>
  );
}
