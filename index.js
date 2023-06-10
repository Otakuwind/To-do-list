const addform = document.querySelector('.add');
const list = document.querySelector('.list-group-item');

addform.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = addform.add.value.trim();

    if (todo.length !=0) {
        generateTemplate(todo);
        addform.reset();
    }else{
        alert('Enter task');
    }
        


});

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex
 justify-content-between align-items-center">
    <span>${todo}</span>'
    <i class="fa delete fa-trash"></i>
    </li>`;
    list.innerHTML += html;
}
list.addEventListener("click", (e) => {
  if (e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

})