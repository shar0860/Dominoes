const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createDot = position => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (position) {
    dot.style.gridColumn = position.column;
    dot.style.gridRow = position.row;
  }
  return dot;
};

const getDotPositions = dotCount => {
  const positions = {
    1: [{ row: 2, column: 2 }],
    2: [{ row: 1, column: 1 }, { row: 3, column: 3 }],
    3: [{ row: 1, column: 1 }, { row: 2, column: 2 }, { row: 3, column: 3 }],
    4: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
    5: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 2, column: 2 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
    6: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 2, column: 1 }, { row: 2, column: 3 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
  };
  return positions[dotCount] || [];
};

const createSection = dotCount => {
  const section = document.createElement('div');
  section.classList.add('section');
  const positions = getDotPositions(dotCount);
  positions.forEach(pos => {
    section.appendChild(createDot(pos));
  });
  return section;
};

const createDomino = () => {
  const domino = document.createElement('div');
  domino.classList.add('domino');
  const topDots = randomInt(1, 6);
  const bottomDots = randomInt(1, 6);
  domino.appendChild(createSection(topDots));
  domino.appendChild(createSection(bottomDots));
  return domino;
};

const displayDominoes = () => {
  const dominoContainer = document.getElementById('dominoContainer');
  for (let i = 0; i < 50; i++) {
    dominoContainer.appendChild(createDomino());
  }
};

window.onload = displayDominoes;
