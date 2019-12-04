const button = document.querySelector(".button");

const clip = (min, max, value) => {
  return Math.max(min, Math.min(value, max));
};

const boxShadow = (xOffset, yOffset) => {
  const xBasis = xOffset / 100;
  const yBasis = yOffset / 100;
  const shadow1X = clip(-4, 4, xBasis * 1);
  const shadow1Y = clip(-4, 4, yBasis * 1);
  const shadow2X = clip(-8, 8, xBasis * 2);
  const shadow2Y = clip(-8, 8, yBasis * 2);
  const shadow3X = clip(-12, 12, xBasis * 3);
  const shadow3Y = clip(-12, 12, yBasis * 3);

  return `${shadow1X}px ${shadow1Y}px 0px #8C1746, ${shadow2X}px ${shadow2Y}px 0px #329F4A, ${shadow3X}px ${shadow3Y}px 0px #4F33F3`;
};

const listenAction = ({ clientX, clientY }) => {
  const xOffset = clientX - window.innerWidth / 2;
  const yOffset = clientY - window.innerHeight / 2;
  const newBoxShadow = boxShadow(xOffset, yOffset);
  button.style.boxShadow = newBoxShadow;
};

document.addEventListener("mousemove", listenAction, { passive: true });
