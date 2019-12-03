const button = document.querySelector(".button");
const buttonCoords = button.getBoundingClientRect();

const boxShadow = () => {
  const 
  const CSS = `box-shadow: ${} ${} 0px var(--blue-midtone), ${} ${} 0px var(--red-highlight), ${} ${} 0px var(--green-highlight)``;
}

const listenAction = ({ clientX, clientY }) => {
  const xOffset = clientX - buttonCoords.left;
  const yOffset = clientY - buttonCoords.top;
  debugger;
};

document.addEventListener("mousemove", listenAction);
