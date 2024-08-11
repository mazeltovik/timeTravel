import spinAround from '../helpers/spinAround';
import data, { Content } from '../api/data';
export default function onClickPagination(
  setCurrentPeriod: React.Dispatch<React.SetStateAction<number>>,
  maxLength: number,
  ringMenu: React.RefObject<HTMLDivElement>,
  setDest: React.Dispatch<React.SetStateAction<number[]>>,
  setContent: React.Dispatch<React.SetStateAction<Content>>,
  setTheme: React.Dispatch<React.SetStateAction<string>>
) {
  return function (event: React.FormEvent<HTMLDivElement>) {
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
              return currentPeriod;
            }
          });
    }
  };
}
