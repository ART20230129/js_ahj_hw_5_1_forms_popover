import Popover from "../Popover";

describe("Popover class", () => {

//afterEach(() => popover.removePopover());        
test('create Popover', () => {
        const content = '<div class="button"><button type="button" name="button" class="btn">Click to toggle popover</button></div>';
        document.body.innerHTML = content;
        const button = document.querySelector('.btn');
        const popover = new Popover(button, 'some title', 'some text');
        popover.createPopover();
        expect(document.querySelector('.popover')).not.toBeNull();
      

});

test('click', () => {
        const content = '<div class="button"><button type="button" name="button" class="btn">Click to toggle popover</button></div>';
        document.body.innerHTML = content;
        const button = document.querySelector('.btn');
        const popover = new Popover(button, 'some title', 'some text');
        //button.click();
        popover.createPopover();
        popover.popoverOff()
        expect(document.querySelector('.popover')).toBeFalsy(); 
        popover.popoverToggle()
        expect(document.querySelector('.popover')).not.toBeFalsy(); 

});

});

