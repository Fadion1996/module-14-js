const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
let start = 0;
let tens = 0;
let seconds = 0;

const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");

buttonStart.addEventListener("click",
  () => {
    console.log(`Start time: ${seconds}:${tens}`);
    TimerConstructor.prototype.start = `${seconds}.${tens}`;
    timer = setInterval( () => {
      tens++;

      if (tens < 9) appendTens.textContent = "0" + tens;

      if (tens > 9) appendTens.textContent = tens;

      if (tens > 99) {
        seconds++;
        appendSeconds.textContent = "0" + seconds;
        tens = 0;
        appendTens.textContent = "0" + 0;
      }

      if (seconds > 9) appendSeconds.textContent = seconds;
  }, 10);
});

buttonStop.addEventListener("click",
  () => {
    clearInterval(timer);
    TimerConstructor.prototype.stop =  `${seconds}.${tens}`;
    interval = parseFloat(TimerConstructor.prototype.stop) - parseFloat(TimerConstructor.prototype.start);
    console.log(`Stop time: ${seconds}:${tens}`);
    console.log('Interval: ', interval)
  }
);

function TimerConstructor (startTime, stopTime = 0, interval = 0) {
  this.startTime = startTime;
  this.stopTime = stopTime;
  this.interval = interval;
};

TimerConstructor.prototype.start = 'start';
TimerConstructor.prototype.stop = 'stop';
