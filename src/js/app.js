import Popover from './Popover';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  const header = 'Popover title';
  const text = 'And here is some amazing content. It is very engaging. Right?';
  const popover = new Popover(btn, header, text);

  document.addEventListener('click', (e) => {
    if (e.target === btn) {
      popover.popoverToggle();
    } else {
      popover.popoverOff();
    }
  });
});
