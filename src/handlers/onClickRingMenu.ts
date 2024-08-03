export default function onClickRingMenu(
    ringMenu: React.RefObject<HTMLDivElement>
  ) {
    return (event: React.FormEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        const parent = target.closest('div');
        if (parent) {
          const id = Number(parent.id);
          const deg = 360 - 60 * id;
          const current = ringMenu.current;
          if (current) {
            const children = current.children;
            const arrChildren = Array.from(children);
            arrChildren.forEach(
              (elem) => {
                if(elem.classList.contains('active')){
                  elem.classList.remove('active');
                }
                ((elem.children[0] as HTMLParagraphElement).style.rotate =
                  `${60 * id}deg`)
              } 
            );
            arrChildren[id].classList.add('active');
            current.style.rotate = `${deg}deg`;
          }
        }
    };
  }