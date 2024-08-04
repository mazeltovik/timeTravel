//Styles
import './timePeriod.scss';

//React
import { useState, useEffect } from 'react';

//Handlers

export default function TimePeriod() {
  const [period1, setPeriod1] = useState(1997);
  const [period2, setPeriod2] = useState(2003);
  const dest = [2010, 2025];
  useEffect(() => {
    const [dest1, dest2] = dest;
    if (period1 != dest1 && period2 != dest2) {
      setTimeout(() => {
        setPeriod1(period1 + 1);
        setPeriod2(period2 + 1);
      }, 100);
    }
  }, [period1, period2]);
  return (
    <div className="timeContainer">
      <p>{period1}</p>
      <p>{period2}</p>
    </div>
  );
}
