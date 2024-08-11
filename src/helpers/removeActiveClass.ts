export default function removeActiveClass(
  current: HTMLDivElement,
  currentPeriod: number
) {
  const arrChildren = Array.from(current.children);
  arrChildren.forEach((elem) => {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
    }
  });
  arrChildren[currentPeriod].classList.add('active');
}
