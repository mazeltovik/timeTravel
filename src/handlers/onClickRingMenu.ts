import data, { Content } from '../api/data';
import spinAround from '../helpers/spinAround';

export default function onClickRingMenu(
  ringMenu: React.RefObject<HTMLDivElement>,
  setCurrentPeriod: React.Dispatch<React.SetStateAction<number>>,
  setDest: React.Dispatch<React.SetStateAction<number[]>>,
  setContent: React.Dispatch<React.SetStateAction<Content>>,
  setTheme: React.Dispatch<React.SetStateAction<string>>
) {
  return (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const parent = target.closest('div');
    if (parent) {
      const id = Number(parent.id);
      setCurrentPeriod(id);
      setDest(data[id].period);
      setContent(data[id].content);
      setTheme(data[id].theme);
      spinAround(id, ringMenu);
    }
  };
}
