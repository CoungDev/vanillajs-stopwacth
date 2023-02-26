const lapBox = document.getElementById('lapBox')
const btnStart = document.getElementById('btn-start')
const btnStop= document.getElementById('btn-stop')
const btnLap = document.getElementById('btn-lap')
const btnReset = document.getElementById('btn-reset')
const time = document.querySelector('#TimerBox h3');

let sec = 0
let min = 0
let hr = 0

let stopTime = true;

const timeCycle = () => {
  if(stopTime == false){
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)
    sec = sec + 1
    
    if(sec == 60){
      min = min + 1
      sec = 0
    }

    if(min == 60){
      hr = hr + 1
      min = 0
      sec = 0
    }

    if(sec == 0 || sec < 10){
      sec = '0' + sec
    }
    if(min == 0 || min < 10){
      min = '0' + min
    }

    if(hr == 0 || hr < 10){
      hr = '0' + hr
    }

    time.innerHTML = hr + ':' + min + ':' + sec
    setTimeout(timeCycle, 1000)
  }

}

function startTimer(){
  if(stopTime == true){
    stopTime = false
    timeCycle();
  }
}

function stopTimer(){
  if(stopTime == false){
    stopTime = true
    timeCycle()
  }
}

function lapTimer(){
  const timeLap = document.createElement('h3')
  timeLap.textContent = time.textContent
  lapBox.append(timeLap)
}

function resetTimer(){
      time.innerHTML = '00:00:00';
      stopTime = true;
      hr = 0;
      min = 0;
      sec = 0;
      lapBox.innerHTML = ''
}

btnStart.addEventListener('click', startTimer)
btnStop.addEventListener('click', stopTimer)
btnLap.addEventListener('click', lapTimer)
btnReset.addEventListener('click', resetTimer)