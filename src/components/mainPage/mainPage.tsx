//Styles
import './mainPage.scss';

//React
import { useRef, useState } from 'react';

//Handlers

//Components
import RingMenu from '../ringMenu/ringMenu';
import TimePeriod from '../timePeriod/timePeriod';
import Pagination from '../pagination/pagination';
import Slider from '../slider/slider';

//data
import data from '../../api/data';

export default function MainPage() {
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [theme, setTheme] = useState(data[0].theme);
  const [period1, setPeriod1] = useState(data[0].period[0]);
  const [period2, setPeriod2] = useState(data[0].period[1]);
  const [dest, setDest] = useState(data[0].period);
  const [content, setContent] = useState(data[0].content);
  const maxLength = data.length;
  const ringMenu = useRef<HTMLDivElement>(null);

  return (
    <div className="wrapper">
      <div className="mainContainer">
        <div className="vector"></div>
        <div className="markup">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="ringContainer">
          <RingMenu
            ringMenuRef={ringMenu}
            maxLength={maxLength}
            currentPeriod={currentPeriod}
            setCurrentPeriod={setCurrentPeriod}
            setDest={setDest}
            setContent={setContent}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
        <div className="timePeriodContainer">
          <TimePeriod
            period1={period1}
            period2={period2}
            setPeriod1={setPeriod1}
            setPeriod2={setPeriod2}
            dest={dest}
          />
        </div>
        <div className="contentContainer">
          <div className="titleContainer">
            <p className="title">
              Исторические
              <br />
              даты
            </p>
          </div>
          <div className="pagSwiperWrapper">
            <Pagination
              currentPeriod={currentPeriod}
              setCurrentPeriod={setCurrentPeriod}
              maxLength={maxLength}
              ringMenu={ringMenu}
              setDest={setDest}
              setContent={setContent}
              setTheme={setTheme}
            />
            <Slider content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}
