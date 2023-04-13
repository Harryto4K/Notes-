let doneButtons = document.getElementsByClassName('done-note');
let textNotes = document.getElementsByClassName('text-note');

let doneButton1 = document.getElementsByClassName('done-note')[0];  

let note = document.getElementsByClassName('note'); 
let note1 = document.getElementById('note-1'); 

doneButtons.hidden = true;

for (let x=0; x<note.length; x++) {
note[x].onmouseleave = function() {
    let done= this.querySelector('.done-note'); 
    let input = this.parentNode.querySelector('text-note'); 
    if (done.value !== 'Done') {
    done.hidden = true;
    }
}
}

for (let y=0; y<note.length; y++) {
    note[y].onmouseover = function() {
        let done=this.querySelector('.done-note');
        done.hidden = false;
    }
}

let toggleButtonText = function() {
    let textNote = this.parentNode.querySelector('.text-note'); // Get the sibling .text-note input field
    if (this.value === 'Done') {
        this.value = 'Edit';
        textNote.readOnly = true;
        textNote.style.cursor = 'default';
    } else if (this.value === 'Edit') {
        this.value = 'Done';
        textNote.readOnly = false;
        textNote.style.cursor = 'text';
    }
};

// Loop through all elements in doneButtons array and add event listener to each
for (let i = 0; i < doneButtons.length; i++) {
    doneButtons[i].addEventListener('click', toggleButtonText);
}
