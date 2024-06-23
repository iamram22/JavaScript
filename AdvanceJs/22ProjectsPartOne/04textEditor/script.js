const uC = document.querySelector('.uppercase');
const lC = document.querySelector('.lowercase');
const capt = document.querySelector('.capitalize');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const uL = document.querySelector('.underline');
const btn = document.querySelector('.btn');

let output = document.getElementById('output-field');

let ip = document.getElementById('input-field');

uC.addEventListener('click', function () {
  ip.style.textTransform = 'uppercase';
});
lC.addEventListener('click', function () {
  ip.style.textTransform = 'lowercase';
});
capt.addEventListener('click', function () {
  ip.style.textTransform = 'capitalize';
});
bold.addEventListener('click', function () {
  ip.style.fontWeight = 'bold';
});
italic.addEventListener('click', function () {
  ip.style.fontStyle = 'italic';
});
uL.addEventListener('click', function () {
  ip.style.textDecoration = 'underline';
});

output.innerHTML =
  'Available edits : uppercase, italic, underline, lowecase, capitalize ';
