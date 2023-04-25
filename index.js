let newNote = document.getElementById('new-note'); 
let delNote = document.getElementById('delete-note');
let note = document.getElementsByClassName('note'); 
let boldButton = document.getElementById('bold');
let noteNumber = 0;
let colorPicker = document.getElementsByClassName('color-picker');
 
function noteAdd() {
    if (noteNumber >= 12) {
        alert('Max Notes Reached!');
        noteNumber--;
    }
    if (noteNumber <= 12) {
    for (let x=noteNumber; x === noteNumber; x++) { 
        let thisNote; 
        if (note[x].style.display = 'none') {
            thisNote = note[x]; 
            thisNote.style.display = 'flex';
        }
    }
    }
    if (note[noteNumber].style.display = 'flex') {
    noteNumber++;
    }
    console.log(noteNumber); 
}

function noteAdd2() {
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

function noteAdd3() {
    let hiddenNotes = [];
    for (let x=0;x<note.length;x++) {
        if (window.getComputedStyle(note[x]).display === 'none') {
            hiddenNotes.push(note[x]); 
        } 
    } 
    if (hiddenNotes[0] === undefined) {
        alert('Max Notes Reached!');
    } else {
        hiddenNotes[0].style.display = 'block'; 
    } 
}

newNote.onclick = noteAdd3;

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
let closeButton = document.getElementsByClassName('del-note'); 

for (let x=0; x<note.length; x++) {
    closeButton[x].hidden = true;  
    colorPicker[x].hidden = true;    
}

for (let x=0; x<note.length; x++) {
    doneButtons[x].hidden = true;
}
 
for (let x=0; x<note.length; x++) {
note[x].onmouseleave = function() {
    let done= this.querySelector('.done-note'); 
    done.hidden = true;
    closeButton[x].hidden = true;
    let thisColorPicker = this.querySelector('.color-picker');
    thisColorPicker.hidden = true;
    let thisColorSelector = this.querySelector('.color-selector');
    thisColorSelector.style.display = 'none';
    thisColorSelector.id = 'not-active';

}
}

for (let y=0; y<note.length; y++) {
    note[y].onmouseover = function() {
        let done=this.querySelector('.done-note');
        if (done.value !== 'Edit') {
        done.hidden = false;
        } else if (done.innerHTML === 'Edit') {
            done.hidden = true;
        }
        closeButton[y].hidden = false;
        let thisColorPicker = this.querySelector('.color-picker');
        thisColorPicker.hidden = false;
    }
}

for (let x=0; x<note.length; x++) {
    note[x].onclick = function() {
        let done=this.querySelector('.done-note');
        if (done.value === 'Edit') {
            done.hidden = false;
        }
        let FF = document.getElementById('font-family');
        let textnote = this.querySelector('.text-note');
        let FS = document.getElementById('font-size');
        if (FS.value === '' || FS.value === 0) {
            FS.value = 24;
            console.log(FS);
            textnote.style.fontSize = `${FS.value}px`; 
        } else if (FS.value >= 1) {
            textnote.style.fontSize = `${FS.value}px`; 
        }

        if (FF.value === 'Times New Roman') {
            textnote.style.fontFamily = 'Times New Roman';
        } else if (FF.value === 'Cambria') {
            textnote.style.fontFamily = 'Cambria';   
        } else if (FF.value === 'Arial') {
            textnote.style.fontFamily = 'Arial';
        } else if (FF.value === 'Impact') {
            textnote.style.fontFamily = 'Impact';
        }

        if (boldButton.id === 'bold') {
            textnote.style.fontWeight = 400; 
        } else if (boldButton.id === 'bold-a') {
            textnote.style.fontWeight = 'bold';
        }
    }
}

let toggleButtonText = function() {
    let textNote = this.parentNode.querySelector('.text-note'); 
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

for (let i = 0; i < doneButtons.length; i++) {
    doneButtons[i].addEventListener('click', toggleButtonText);
}


function deleteNote() {
    let noteX = this.parentNode; 
    noteX.style.display = 'none';
}

for (let i=0; i<note.length; i++) {
    closeButton[i].addEventListener('click', deleteNote);
}

boldButton.onclick = function() {
    if (boldButton.id === 'bold') {
    boldButton.style.color = 'darkgoldenrod';
    boldButton.style.backgroundColor = 'white';
    boldButton.id = 'bold-a';
    } else if (boldButton.id === 'bold-a') {
    boldButton.style.backgroundColor = 'darkgoldenrod';
    boldButton.style.color = 'white';
    boldButton.id = 'bold';
    }
}


function colorSelectorFunc() {
    let thisColorSelector = this.parentNode.querySelector('.color-selector');
    if (thisColorSelector.id === 'not-active') {
        thisColorSelector.style.display = 'flex';
        thisColorSelector.id = 'active';
    } else if (thisColorSelector.id === 'active') {
        thisColorSelector.style.display= 'none';
        thisColorSelector.id = 'not-active';
    }

}

for (let x=0; x<note.length; x++) {
    colorPicker[x].onclick = colorSelectorFunc;
}

let colorOne = document.getElementsByClassName('color-one');
let colorTwo = document.getElementsByClassName('color-two');
let colorThree = document.getElementsByClassName('color-three'); 

for (let x=0; x<note.length; x++) {
    colorOne[x].onclick = function() { 
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorOne[x]).backgroundColor; 
        colorOne[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorOne[x].style.border = `1px solid ${ogBackgroundColor}`; 
    }
    colorTwo[x].onclick = function() {
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorTwo[x]).backgroundColor; 
        colorTwo[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorTwo[x].style.border = `1px solid ${ogBackgroundColor}`; 

    }
    colorThree[x].onclick = function() {
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorThree[x]).backgroundColor; 
        colorThree[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorThree[x].style.border = `1px solid ${ogBackgroundColor}`; 
    }
}
