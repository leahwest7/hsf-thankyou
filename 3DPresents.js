let isSpinning = true;

let present = new Zdog.Illustration({
  element: ".presents-1",
  dragRotate: true,
  onDragStart: () => (isSpinning = false),
  rotate: {
    x: -9
  }
});

const mainBox = new Zdog.Box({
  addTo: present,
  width: 100,
  height: 100,
  depth: 100,
  stroke: false,
  color: "#5B0F41",
  leftFace: "#5B0F41",
  rightFace: "#8C1746",
  topFace: "#8C1746",
  bottomFace: "#5B0F41"
});

// side ribbons
const ribbon = new Zdog.Box({
  addTo: mainBox,
  width: 2,
  height: 96,
  depth: 15,
  stroke: 4,
  color: "#781356",
  translate: {
    x: -50
  }
});

ribbon.copy({
  color: "#B8225E",
  translate: {
    x: 50
  }
});

ribbon.copy({
  width: 15,
  depth: 2,
  translate: {
    z: 50
  }
});

ribbon.copy({
  width: 15,
  depth: 2,
  translate: {
    z: -50
  }
});

// top ribbons
ribbon.copy({
  width: 100,
  height: 2,
  depth: 15,
  color: "#B8225E",
  translate: {
    y: -50
  }
});

ribbon.copy({
  width: 15,
  height: 2,
  depth: 100,
  color: "#B8225E",
  translate: {
    y: -50
  }
});

// bottom ribbons
ribbon.copy({
  width: 100,
  height: 2,
  depth: 15,
  translate: {
    y: 50
  }
});

ribbon.copy({
  width: 15,
  height: 2,
  depth: 100,
  translate: {
    y: 50
  }
});

const animate = () => {
  present.rotate.y += isSpinning ? 0.005 : 0;
  present.updateRenderGraph();
  requestAnimationFrame(animate);
};

animate();
