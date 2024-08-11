import spinAround from '../helpers/spinAround';
import data, { Content } from '../api/data';
import removeActiveClass from '../helpers/removeActiveClass';
export default function onClickPagination(
  setCurrentPeriod: React.Dispatch<React.SetStateAction<number>>,
  maxLength: number,
  ringMenu: React.RefObject<HTMLDivElement>,
  setDest: React.Dispatch<React.SetStateAction<number[]>>,
  setContent: React.Dispatch<React.SetStateAction<Content>>,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  bulletContainer: React.RefObject<HTMLDivElement>,
  pagination: boolean
) {
  return function (event: React.FormEvent<HTMLDivElement>) {
    if (pagination) {
      const target = event.target as HTMLElement;
      if (target.id) {
        const current = bulletContainer.current as HTMLDivElement;
        const id = Number(target.id);
        removeActiveClass(current, id);
        setCurrentPeriod(id);
        setDest(data[id].period);
        setContent(data[id].content);
        setTheme(data[id].theme);
        spinAround(id, ringMenu);
      }
      return;
    }
    const target = event.target as HTMLElement;
    const paragraph = target.closest('p') as HTMLParagraphElement;
    if (paragraph) {
      paragraph.classList.contains('plus')
        ? setCurrentPeriod((value) => {
            if (value < maxLength - 1) {
              const currentPeriod = value + 1;
              setDest(data[currentPeriod].period);
              setContent(data[currentPeriod].content);
              setTheme(data[currentPeriod].theme);
              spinAround(currentPeriod, ringMenu);
              const current = bulletContainer.current as HTMLDivElement;
              removeActiveClass(current, currentPeriod);
              return currentPeriod;
            } else {
              return value;
            }
          })
        : setCurrentPeriod((value) => {
            if (value == 0) {
              return value;
            } else {
              const currentPeriod = value - 1;
              setDest(data[currentPeriod].period);
              setContent(data[currentPeriod].content);
              setTheme(data[currentPeriod].theme);
              spinAround(currentPeriod, ringMenu);
              const current = bulletContainer.current as HTMLDivElement;
              removeActiveClass(current, currentPeriod);
              return currentPeriod;
            }
          });
    }
  };
}
