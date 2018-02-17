ready(() => {

    let todoList = new TodoList();

    let taskInputFields = document.getElementById('todo__list');
    let todoInput = document.querySelectorAll('.todo__add');


    todoInput.forEach((element) => {

        element.addEventListener('keyup', handleKeyUp);

        function handleKeyUp(event) {
            if(event.keyCode === 13 && todoInput.value != ""){

                todoList.addTask(element.value);
                element.value = "";

                console.log(todoList.tasks);
            }
        }
    });
});