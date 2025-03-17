document.addEventListener('DOMContentLoaded', (event) => {
  const gameArea = document.getElementById('gameArea');
  const ball = document.createElement('div');
  
  ball.style.width = '30px';
  ball.style.height = '30px';
  ball.style.backgroundColor = 'red';
  ball.style.borderRadius = '50%';
  ball.style.position = 'absolute';
  ball.style.left = '50%';
  ball.style.top = '50%';
  
  gameArea.appendChild(ball);
  
  ball.addEventListener('click', () => {
      alert('Ballen klikket!');
  });
});
