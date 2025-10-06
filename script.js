const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}
