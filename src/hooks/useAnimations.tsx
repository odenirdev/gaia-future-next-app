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

  const splitText = (
    element: HTMLElement,
    type: "word" | "char" = "word"
  ): HTMLElement[] => {
    const text = element.textContent;
    if (!text) return [];

    element.textContent = "";
    const spanElements: HTMLElement[] = [];

    if (type === "word") {
      const words = text.split(" "); // Divide o texto em palavras
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.opacity = "1";
        wordSpan.textContent = word; // Define o conteúdo do span como a palavra

        element.appendChild(wordSpan);
        spanElements.push(wordSpan);

        // Adiciona espaço após cada palavra, exceto a última
        if (index < words.length - 1) {
          const spaceSpan = document.createElement("span");
          spaceSpan.innerHTML = "&nbsp;"; // Usando &nbsp; para espaços visíveis
          element.appendChild(spaceSpan);
          spanElements.push(spaceSpan);
        }
      });
    } else if (type === "char") {
      const chars = text.split(""); // Divide o texto em caracteres
      chars.forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.style.display = "inline-block";
        charSpan.style.opacity = "1";

        // Verifica se é um espaço e usa &nbsp;
        if (char === " ") {
          charSpan.innerHTML = "&nbsp;";
        } else {
          charSpan.textContent = char;
        }

        element.appendChild(charSpan);
        spanElements.push(charSpan);
      });
    }

    return spanElements;
  };

  return { onMousePerspectiveAnimation, splitText };
};
