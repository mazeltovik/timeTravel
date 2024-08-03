//Styles
import './cirlceTab.scss';

//React
import { useRef, useState } from 'react';

//Handlers
import onClickRingMenu from '../../handlers/onClickRingMenu';

export default function RingMenu() {
  const ringMenu = useRef<HTMLDivElement>(null);
  return (
    <div
      className="ringMenu"
      ref={ringMenu}
      onClick={onClickRingMenu(ringMenu)}
    >
      <div className="menuItem" id="0">
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
  );
}
