export default class Popover {
  constructor(btn, header, text) {
    this.btn = btn;
    this.header = header;
    this.text = text;
    this.popover = null;
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.style.display = 'block';
    document.body.appendChild(this.popover);

    const headerPopover = document.createElement('div');
    headerPopover.classList.add('popover-header');
    headerPopover.textContent = this.header;
    this.popover.appendChild(headerPopover);

    const bodyPopover = document.createElement('div');
    bodyPopover.classList.add('popover-body');
    bodyPopover.textContent = this.text;
    this.popover.appendChild(bodyPopover);

    const bottomArrow = document.createElement('div');
    bottomArrow.classList.add('arrow');
    this.popover.appendChild(bottomArrow);

    const { top, left } = this.btn.getBoundingClientRect();
    this.popover.style.top = `${top - this.popover.offsetHeight - 5}px`;
    this.popover.style.left = `${left + this.btn.offsetWidth / 2 - this.popover.offsetWidth / 2}px`;
  }

  popoverToggle() {
    const popover = document.querySelector('.popover');
    if (popover) {
      popover.remove();
    } else {
      this.createPopover();
    }
  }

  popoverOff() {
    const popover = document.querySelector('.popover');
    popover.remove();
  }
}
