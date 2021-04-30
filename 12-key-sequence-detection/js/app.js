const secretcode = 'faysal';
const pressed = [];

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);

  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);

  if (pressed.join('').includes(secretcode)) {
    console.log('Dit it!');
    cornify_add();
  }

  console.log(pressed);
});
