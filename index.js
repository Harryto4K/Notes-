let newNote = document.getElementById('new-note'); 

let delNote = document.getElementById('delete-note');

let note = document.getElementsByClassName('note'); 

let noteNumber = 0;

newNote.onclick = function() { 
    console.log(noteNumber);
    if (noteNumber >= 12) {
        alert('Max Notes Reached!');
        noteNumber--;
    }
    noteNumber++;
    if (noteNumber <= 12) {
    for (let x=0; x<noteNumber; x++) {
        if (note[x].style.display = 'none') {
            note[x].style.display = 'block';
        }
    }
    }
}


delNote.onclick = function() {
    let noteArray = document.getElementsByClassName('note');
    let lastNote = noteArray[noteArray.length - 1]; 
    lastNote.style.display = 'none';
}

let alignButton = document.getElementById('align-button'); 

let alignButtonFunc = function() {
    let notesContainer = document.getElementById('notes-container'); 
    let notes = document.getElementsByClassName('note'); 

    if (alignButton.innerHTML === 'Vertical') {
        notesContainer.style.flexDirection = 'column'; 
        for (let x=0; x<notes.length; x++) {
            notes[x].style.width = '20%'; 
            notes[x].style.margin = '0.3% 0';
            notes[x].style.flexGrow = 0; 
        }
        alignButton.innerHTML = 'Horizontal';
    } else if (alignButton.innerHTML === 'Horizontal') {
        notesContainer.style.flexDirection = 'row'; 
        for (let y=0; y<notes.length; y++) {
            notes[y].style.width = '24.4%';
            notes[y].style.margin = '0 0.3%';
            notes[y].style.flexGrow = 0;
        }
        alignButton.innerHTML = 'Vertical';
    }
}

alignButton.onclick = alignButtonFunc; 

let doneButtons = document.getElementsByClassName('done-note');
let textNotes = document.getElementsByClassName('text-note');

let doneButton1 = document.getElementsByClassName('done-note')[0];  

let closeButton = document.getElementsByClassName('del-note'); 

let hola = 1;


for (let x=0; x<note.length; x++) {
    closeButton[x].hidden = true;   
}

for (let x=0; x<note.length; x++) {
    doneButtons[x].hidden = true;
}
 
for (let x=0; x<note.length; x++) {
note[x].onmouseleave = function() {
    let done= this.querySelector('.done-note'); 
    done.hidden = true;
    closeButton[x].hidden = true;
}
}

for (let y=0; y<note.length; y++) {
    note[y].onmouseover = function() {
        let done=this.querySelector('.done-note');
        done.hidden = false;
        closeButton[y].hidden = false;

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


for (let i=0; i<note.length; i++) {
    closeButton[i].onclick = function() {
        console.log(note[i]);
        note[i].style.display = 'none';
        noteNumber--;
    }
}


