let newNote = document.getElementById('new-note'); 

let delNote = document.getElementById('delete-note');

let x = 5;

newNote.onclick = function() {
    let divNote = document.createElement('div');
    divNote.className= 'note';
    divNote.innerHTML = `<textarea name="paragraph_text" cols="50" rows="10" class="text-note" placeholder="Enter text..."></textarea> <input type="submit" value="Done" class="done-note">`;
    divNote.id = `note-${x}`; 
    document.getElementById('notes-container').appendChild(divNote); 
    console.log('newNote');
    x++; 
}

delNote.onclick = function() {
    let noteArray = document.getElementsByClassName('note');
    let lastNote = noteArray[noteArray.length - 1]; 
    lastNote.remove();
    console.log('delnote');
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




