let doneButton1 = document.getElementsByClassName('done-note')[0]; 
let doneButton2 = document.getElementById('note-2'); 
let doneButton3 = document.getElementById('note-3'); 
let doneButton4 = document.getElementById('note-4'); 
let doneButton5 = document.getElementById('note-5'); 
let doneButton6 = document.getElementById('note-6'); 
let doneButton7 = document.getElementById('note-7'); 
let doneButton8 = document.getElementById('note-8'); 
let doneButton9 = document.getElementById('note-9'); 
let doneButton10 = document.getElementById('note-10'); 
let doneButton11 = document.getElementById('note-11'); 
let doneButton112 = document.getElementById('note-12'); 

doneButton1.onclick = function() {
    let textNote1 = document.getElementsByClassName('text-note')[0]; 
    textNote1.readOnly = true;  
    textNote1.style.cursor = 'default';
}