const form = document.querySelector('.task-form')

const todosList = document.querySelector('.task-list')




const todos = [
{   
    id: 1,
    description: 'Estudar JS para Web',
    completed: true
},
{
    id: 2,
    description: 'Estudar LLMs',
    completed: false
},
{
    id: 3,
    description: 'Estudar Cursor',
    completed: false
}
]

form.addEventListener('submit', (event) =>{
    event.preventDefault() 
    console.log('Yes')

    const formData = new FormData(form)
     
    const todo = {
        id: Date.now(),
        description: formData.get('task'),
        completed: false
    }

    const li = renderTodoListItem(todo)

    todosList.appendChild(li);
    todos.push(todo);

    form.reset();
    console.log(todos)

})


function renderTodoListItem(todo){

    const listItem = document.createElement('li')
    listItem.classList.add('task-list__item')
    if(todo.completed){
        listItem.classList.add("task-list__item--complete")
    }

    const statusButton = document.createElement('button')
        statusButton.type = 'button'
        statusButton.classList.add('task-list__status')
        statusButton.setAttribute('aria-pressed', todo.completed)

        if(todo.completed){
            statusButton.setAttribute('aria--label', 'Marcar tarefa como concluída')

        }else{
            statusButton.setAttribute('aria--label', 'Marcar tarefa como pendente')
        }

        const statusIcon = document.createElement('img')
        statusIcon.src = todo.completed ? '/public/icons/check_circle.svg': '/public/icons/check_circle_pending.svg'

        const paragraph = document.createElement('p')
        paragraph.classList.add('task-list__description')
        paragraph.textContent = todo.description

        const editButton = document.createElement('button')
        editButton.type = 'button'
        editButton.classList.add('task-list__edit')
        editButton.setAttribute('aria-label', 'Editar tarefa')
      
       
        
        const editIcon = document.createElement('span')
        editIcon.classList.add('icon', 'icon--edit', 'icon--lg') 
        editIcon.setAttribute( 'aria-hidden', 'true')



        statusButton.appendChild(statusIcon)
        listItem.appendChild(statusButton)
        listItem.appendChild(paragraph)
        listItem.appendChild(editButton)
        editButton.appendChild(editIcon)


    
    return listItem;
    // return`

    //         <li class="task-list__item">
    //             <button type="button" class="task-list__status" aria-pressed="false" aria-label="Marcar tarefa como concluída">
    //                 <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    //                     <circle cx="12" cy="12" r="12" />                            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" />
    //                     </svg>
    //                 </button>
    //              <p class="task-list__description">${todo.description}</p>
    //             <button type="button" class="task-list__edit" aria-label="Editar tarefa">
    //                 <span class="icon icon--edit icon--lg" aria-hidden="true"></span>
    //                 </button>
    //         </li>
    // `
}

todos.forEach(todo => {
    const element = renderTodoListItem(todo)
    todosList.appendChild(element); 

})