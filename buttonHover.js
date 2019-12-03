const button = document.querySelector(".button");
const buttonCoords = button.getBoundingClientRect();

const clip = (min, max, value) => {
  return Math.max(min, Math.min(value, max));
}

const boxShadow = (xOffset, yOffset) => {
  const xBasis = xOffset / 10;
  const yBasis = yOffset / 1000;
  const shadow1X = clip(-4, 4, xBasis * 1);
  const shadow1Y = clip(-4, 4, yOffset * 1);
  const shadow2X = clip(-4, 4, xBasis * 2);
  const shadow2Y = clip(-4, 4, yOffset * 2);
  const shadow3X = clip(-4, 4, xBasis * 3);
  const shadow3Y = clip(-4, 4, yOffset * 3);

  return `${shadow1X}px ${shadow1Y}px 0px var(--blue-midtone), ${shadow2X}px ${shadow2Y}px 0px var(--red-highlight), ${shadow3X}px ${shadow3Y}px 0px var(--green-highlight)`;
};

const listenAction = ({ clientX, clientY }) => {
  const xOffset = clientX - buttonCoords.left;
  const yOffset = clientY - buttonCoords.top;
  const newBoxShadow = boxShadow(xOffset, yOffset);
  button.style.boxShadow = newBoxShadow;
};

document.addEventListener("mousemove", listenAction, { passive: true });
