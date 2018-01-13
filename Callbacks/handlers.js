document.getElementById('one').addEventListener('click', function() {
  console.log('you clicked the button!');
});

document.getElementById('two').addEventListener('mouseover', function() {
  document.getElementById('two').innerText = 'you hovered over me!';
});

document.body.addEventListener('timeEvent', stateTime);

function stateTime(e) {
  alert("event time is: " + e.detail);
}

var myEvent = new CustomEvent('timeEvent', {
  'detail': new Date()
});
