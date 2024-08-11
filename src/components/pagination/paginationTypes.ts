import { Content } from '../../api/data';
export type PaginationType = {
  currentPeriod: number;
  setCurrentPeriod: React.Dispatch<React.SetStateAction<number>>;
  maxLength: number;
  ringMenu: React.RefObject<HTMLDivElement>;
  setDest: React.Dispatch<React.SetStateAction<number[]>>;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
