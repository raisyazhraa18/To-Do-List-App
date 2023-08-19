let input = document.querySelector('input');
let button = document.querySelector('.addPlan > button');

button.addEventListener('click', addList);

function addList(e) {
    let notFinished = document.querySelector('.notFinished');
    let Finished = document.querySelector('.Finished');

    let newLi = document.createElement('li');
    let checkButton = document.createElement('button');
    let deleteButton = document.createElement('button'); 

    checkButton.innerHTML = '<i class="fa fa-check"></i>';
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !=='') {
        newLi.textContent = input.value;
        input.value = '';
        notFinished.appendChild(newLi);
        newLi.appendChild(checkButton);
        newLi.appendChild(deleteButton);
    }

    checkButton.addEventListener('click', function() {
        let parent = this.parentNode;
        parent.remove();
        Finished.appendChild(parent);
        checkButton.style.display = 'none';
    });

    deleteButton.addEventListener('click', function() {
        let parent = this.parentNode;
        parent.remove();
    });
}
