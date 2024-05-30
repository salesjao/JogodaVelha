document.addEventListener('DOMContentLoaded', () => {
  const game = document.getElementById('game');
  let currentPlayer = 'X';
  let winner = null;


  for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.cellIndex = i;
    game.appendChild(cell);
  }

  const cells = document.querySelectorAll('.cell');
  const victoryMessage = document.getElementById('victoryMessage');

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkForWinner = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
        winner = cells[a].textContent;
        victoryMessage.textContent = `Parabéns Jogador ${winner}! Você venceu!`;
        victoryMessage.classList.remove('hidden');
        return;
      }
    }
  };

  const handleClick = (e) => {
    const cell = e.target;

    if (cell.textContent !== '' || winner) return;

    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    checkForWinner();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
  });
});
