const readSound=(e)=>{
    var span = document.querySelector(`div[data-key="${e.keyCode}"]`)
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  
    if(!span || !audio) return;
  
    span.classList.add('playing')
    audio.currentTime = 0
    audio.play();
      setTimeout(() => { span.classList.remove('playing')}, audio.duration);
  }
  
  window.onkeydown=readSound    