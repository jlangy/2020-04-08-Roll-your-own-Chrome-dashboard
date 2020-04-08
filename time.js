
function startTime() {
  const today = new Date();
  const hour = today.getHours();
  let min = today.getMinutes();
  min = checkTime(min);
  document.getElementById('time').innerHTML =
  `${hour} : ${min}`;
  const t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


