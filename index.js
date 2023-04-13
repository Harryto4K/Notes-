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






