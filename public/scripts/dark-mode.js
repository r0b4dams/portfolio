// On page load or when changing themes, best to apply class in <head> to avoid FOUC
// https://tailwindcss.com/docs/dark-mode

const html = document.querySelector('html');
const enabled = localStorage.getItem('dark_mode');

if (enabled) {
  html?.classList.toggle('dark', JSON.parse(enabled));
} else {
  html?.classList.toggle('dark', false);
  localStorage.setItem('dark_mode', JSON.stringify(false));
}
