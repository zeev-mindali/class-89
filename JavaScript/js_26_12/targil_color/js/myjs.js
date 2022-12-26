const changeColor = () => {
  const colorPicker = document.getElementById("userColor");
  console.log(colorPicker.value);
  document.body.style.background = colorPicker.value;
};
