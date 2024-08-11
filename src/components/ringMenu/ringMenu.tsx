//Styles
import './ringMenu.scss';

//React
import { useRef, useState } from 'react';

//Handlers
import onClickRingMenu from '../../handlers/onClickRingMenu';

//Types
import { RingMenuProps } from './ringMeneTypes';

import Theme from '../theme/theme';

export default function RingMenu({
  currentPeriod,
  setCurrentPeriod,
  maxLength,
  ringMenuRef,
  setDest,
  setContent,
  theme,
  setTheme,
}: RingMenuProps) {
  return (
    <div className="ringMenuWrapper">
      <Theme theme={theme} currentPeriod={currentPeriod} />
      <div
        className="ringMenu"
        ref={ringMenuRef}
        onClick={onClickRingMenu(
          ringMenuRef,
          setCurrentPeriod,
          setDest,
          setContent,
          setTheme
        )}
      >
        <div className="menuItem active" id="0">
          <p id="0">1</p>
        </div>
        <div className="menuItem" id="1">
          <p id="1">2</p>
        </div>
        <div className="menuItem" id="2">
          <p id="2">3</p>
        </div>
        <div className="menuItem" id="3">
          <p id="3">4</p>
        </div>
        <div className="menuItem" id="4">
          <p id="4">5</p>
        </div>
        <div className="menuItem" id="5">
          <p id="5">6</p>
        </div>
      </div>
    </div>
  );
}
