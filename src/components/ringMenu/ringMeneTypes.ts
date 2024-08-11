import { Content } from '../../api/data';
export type RingMenuProps = {
  ringMenuRef: React.RefObject<HTMLDivElement>;
  maxLength: number;
  currentPeriod: number;
  setCurrentPeriod: React.Dispatch<React.SetStateAction<number>>;
  setDest: React.Dispatch<React.SetStateAction<number[]>>;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
