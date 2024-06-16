import { MouseEventHandler } from "react";

export const useAnimations = () => {
  const onMousePerspectiveAnimation: MouseEventHandler<HTMLElement> = (
    event
  ) => {
    if (window.innerWidth < 768) return;

    const SCALE_X = 4;
    const SCALE_Y = 8;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const mousePosition = { x, y };
    const cardSize = {
      width: card.offsetWidth || 0,
      height: card.offsetHeight || 0,
    };
    card.style.transform = `perspective(1000px) rotateX(${
      (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
    }deg) rotateY(${
      (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
    }deg) translateZ(10px)`;
  };

  return { onMousePerspectiveAnimation };
};
