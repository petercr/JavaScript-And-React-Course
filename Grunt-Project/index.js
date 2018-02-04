var count = 0;

document.getElementById('tomato').addEventListener('click', function() {
  count++;
  document.getElementById('counter').innerText = count;
  logger();
});
