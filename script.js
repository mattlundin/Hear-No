const hearNo = document.querySelector('.hear');
const seeNo = document.querySelector('.see');
const speakNo = document.querySelector('.speak');

hearNo.addEventListener('click', () => {
  if(seeNo.classList.contains('see')) {
    seeNo.classList.add('active');
    speakNo.classList.remove('active');
    hearNo.classList.remove('active');
  }
});

seeNo.addEventListener('click', () => {
  if(speakNo.classList.contains('speak')) {
    speakNo.classList.add('active');
    hearNo.classList.remove('active');
    seeNo.classList.remove('active');
  }
});

speakNo.addEventListener('click', () => {
  if(hearNo.classList.contains('hear')) {
    hearNo.classList.add('active');
    seeNo.classList.remove('active');
    speakNo.classList.remove('active');
  }
})