export default function spinAround(
  currentPeriod: number,
  ringMenu: React.RefObject<HTMLDivElement>
) {
  const deg = 360 - 60 * currentPeriod;
  const current = ringMenu.current;
  if (current) {
    const children = current.children;
    const arrChildren = Array.from(children);
    arrChildren.forEach((elem) => {
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      }
      (elem.children[0] as HTMLParagraphElement).style.rotate =
        `${60 * currentPeriod}deg`;
    });
    arrChildren[currentPeriod].classList.add('active');
    current.style.rotate = `${deg}deg`;
  }
}
