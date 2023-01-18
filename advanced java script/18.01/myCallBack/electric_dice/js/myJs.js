const stopDice = () => {
  clearInterval(dice);
};

const getDice = () => {
  return Math.floor(Math.random() * 6 + 1);
};

var dice = setInterval(() => {
  document.getElementById("dice1").innerText = getDice();
  document.getElementById("dice2").innerText = getDice();
}, 50);
