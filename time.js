//Begin clock
function startTime() {
  const today = new Date();
  const hour = today.getHours();
  let min = today.getMinutes();
  min = padTime(min);
  document.getElementById('time').innerHTML =
  `${hour} : ${min}`;
  const t = setTimeout(startTime, 1000);
}

function padTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


