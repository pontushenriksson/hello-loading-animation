document.addEventListener('DOMContentLoaded', () => {
  const helloMessage = document.querySelector('.helloMessage');
  const loadingAnimation = document.querySelector('.loadingAnimation');
  const mainContent = document.querySelector('main');
  const languages = [
    'Hello',
    'Hallå',
    'Hola',
    'Bonjour',
    'Ciao',
    'Hallo',
    'Olá',
    'Привет',
    '你好',
    'こんにちは',
    '안녕하세요',
    'Merhaba',
    'Salam',
    'Здравствуйте',
    'Hej',
    'Helo',
  ];
  let index = 0;
  let intervalTime = 500;
  const minIntervalTime = 150; // Speed limit

  const changeLanguage = () => {
    helloMessage.textContent = languages[index];
    index++;
    if (index < languages.length) {
      if (intervalTime > minIntervalTime) {
        intervalTime /= 1.3; // Adjust the factor for a faster exponential increase
      }
      clearInterval(interval);
      interval = setInterval(changeLanguage, intervalTime);
    } else {
      clearInterval(interval);
      loadingAnimation.classList.add('hidden');
      setTimeout(() => {
        mainContent.classList.add('visible');
      }, 1000); // Match the transition speed in CSS
    }
  };

  let interval = setInterval(changeLanguage, intervalTime);
});
