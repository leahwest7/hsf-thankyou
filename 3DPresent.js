const generatePresent = ({
  selector,
  size,
  highlight,
  shadow,
  ribbonHighlight,
  ribbonShadow
}) => {
  let isSpinning = true;
  const ribbonWidth = size / 7;
  const ribbonDepth = 2;
  const randomBetween = (min, max) => Math.random() * (max - min) + min;

  const present = new Zdog.Illustration({
    element: selector,
    dragRotate: true,
    onDragStart: () => (isSpinning = false),
    onDragEnd: () => (isSpinning = true),
    rotate: {
      x: Math.round(randomBetween(-4, 4))
    }
  });

  const mainBox = new Zdog.Box({
    addTo: present,
    width: size,
    height: size,
    depth: size,
    stroke: false,
    color: shadow,
    rightFace: highlight,
    topFace: highlight
  });

  // side ribbons
  const ribbon = new Zdog.Box({
    addTo: mainBox,
    width: ribbonDepth,
    height: size - 4,
    depth: ribbonWidth,
    stroke: 4,
    color: ribbonShadow,
    translate: {
      x: -size / 2
    }
  });

  ribbon.copy({
    color: ribbonHighlight,
    translate: {
      x: size / 2
    }
  });

  ribbon.copy({
    width: ribbonWidth,
    depth: ribbonDepth,
    translate: {
      z: size / 2
    }
  });

  ribbon.copy({
    width: ribbonWidth,
    depth: ribbonDepth,
    translate: {
      z: -size / 2
    }
  });

  // top ribbons
  ribbon.copy({
    width: size,
    height: ribbonDepth,
    depth: ribbonWidth,
    color: ribbonHighlight,
    translate: {
      y: -size / 2
    }
  });

  ribbon.copy({
    width: ribbonWidth,
    height: ribbonDepth,
    depth: size,
    color: ribbonHighlight,
    translate: {
      y: -size / 2
    }
  });

  // bottom ribbons
  ribbon.copy({
    width: size,
    height: ribbonDepth,
    depth: ribbonWidth,
    translate: {
      y: size / 2
    }
  });

  ribbon.copy({
    width: ribbonWidth,
    height: ribbonDepth,
    depth: size,
    translate: {
      y: size / 2
    }
  });

  const animate = () => {
    present.rotate.y += isSpinning ? 0.005 : 0;
    present.updateRenderGraph();
    requestAnimationFrame(animate);
  };

  animate();
};

export default generatePresent;
