const clickButton = document.getElementById('clickButton');
const mainText = document.getElementById('mainText');
const hint = document.getElementById('hint');
const flowerSection = document.getElementById('flowerSection');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseText = document.getElementById('responseText');
const moon = document.getElementById('moon');
const moonContainer = document.getElementById('moonContainer');
const seeMore = document.getElementById('seeMore');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const bgMusic = document.getElementById('bgMusic');

clickButton.addEventListener('click', () => {
  mainText.classList.add('hidden');
  clickButton.classList.add('hidden');
  hint.classList.remove('hidden');
  flowerSection.classList.remove('hidden');
  bgMusic.volume = 0.2;
  bgMusic.play();
});

hint.addEventListener('click', () => {
  moonContainer.classList.remove('hidden');
  moon.style.display = 'inline';
  seeMore.style.display = 'none';  // Garante que o "See more" não aparece ainda.
});

yesBtn.addEventListener('click', () => {
  responseText.textContent = "I didn't want to think it was that much, but I already knew. lol, just kidding. I hope you really enjoyed it!";
});

noBtn.addEventListener('click', () => {
  responseText.textContent = "oh that's ok ig";
});

moon.addEventListener('click', () => {
  moon.classList.add('clicked');
  seeMore.style.display = 'inline';  // Agora sim aparece o "See more..." depois de clicar na lua.
});

seeMore.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});
