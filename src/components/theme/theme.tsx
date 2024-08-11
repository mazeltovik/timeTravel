import { ThemeProps } from './themeTypes';

import { useEffect, useRef } from 'react';

export default function Theme({ theme, currentPeriod }: ThemeProps) {
  const themeContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const themeCurrent = themeContainer.current as HTMLDivElement;
    setTimeout(() => {
      themeCurrent.classList.add('fadeIn');
    }, 500);
    return () => {
      themeCurrent.classList.remove('fadeIn');
    };
  }, [theme, currentPeriod]);
  return (
    <div className="theme" ref={themeContainer}>
      <p>{theme}</p>
    </div>
  );
}
