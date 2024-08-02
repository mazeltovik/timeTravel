//Styles
import './cirlceTab.scss';

//React
import { useRef } from 'react';

export default function CircleTab() {
  const mainCircle = useRef<HTMLDivElement>(null);
  return (
    <div
      className="main"
      ref={mainCircle}
      onClick={(event: React.FormEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        if (
          (target.tagName == 'DIV' && target.className == 'circle') ||
          target.tagName == 'P'
        ) {
          console.log('yes');
          const id = Number(target.id);
          console.log(id);
          const deg = 360 - 60 * id;
          //   mainCircle.current?.classList.add('active');
          mainCircle.current.style.rotate = `${deg}deg`;
          Array.from(mainCircle.current?.children).forEach(
            (elem) =>
              ((elem.children[0] as HTMLParagraphElement).style.rotate =
                `${deg}deg`)
          );
        }
      }}
    >
      <div className="circle" id="0">
        <p id="0">1</p>
      </div>
      <div className="circle" id="1">
        <p id="1">2</p>
      </div>
      <div className="circle" id="2">
        <p id="2">3</p>
      </div>
      <div className="circle" id="3">
        <p id="3">4</p>
      </div>
      <div className="circle" id="4">
        <p id="4">5</p>
      </div>
      <div className="circle" id="5">
        <p id="5">6</p>
      </div>
    </div>
  );
}
