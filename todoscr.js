ready(() => {

    let todoList = new TodoList();
    todoList.addTask('asdf1');
    todoList.addTask('asdf2');
    todoList.addTask('asdf3');

    let list = document.getElementById('todo__list');
    let todoInput = document.querySelectorAll('.todo__add');

    let itemCounter = 0;

    list.addEventListener('click', e => {
        // console.dir(e.target.parentNode.taskId);
        // console.dir(e);

        if(e.target.classList.contains("todo__button")){
            console.log("delete Task " + e.target.parentNode.taskId)
        }

        if(e.target.classList.contains("todo__name")){
            console.log("edit Task " + e.target.parentNode.taskId)
        }

        if(e.target.parentNode.classList.contains("todo__checkbox")){
            console.log("toggle Task " + e.target.parentNode.parentNode.taskId)
        }
    });

    todoInput.forEach((element) => {

        element.addEventListener('keyup', handleKeyUp);

        function handleKeyUp(event) {
            if(event.keyCode === 13 && todoInput.value != ""){

                let task = todoList.addTask(element.value);
                addTaskToList(task);
                element.value = "";

                console.log(todoList.tasks);
            }
        }
    });

    /**
     * fügt einen Task der Liste(DOM) hinzu
     * @param task
     */
    let addTaskToList = (task)=>{
        let newDomItem = createItemDom(task);
        list.appendChild(newDomItem);
    };


    /**
     * Baut die initiale Liste auf
     * @param taskListe
     */
    let initTaskList = (taskListe) => {
        taskListe.forEach(task => {
            let i = createItemDom(task);
            list.appendChild(i);
        })
    };

    /**
     * Erstellt ein dom item für einen neuen task
     * @param task
     * @returns {HTMLLIElement}
     */
    let createItemDom = (task) => {
        let item = document.createElement('li');
        item.classList.add('todo__item');
        item.innerHTML = "<div class='todo__checkbox id-" + itemCounter + "'><input type='checkbox'></div><div class='todo__name id-" + itemCounter + "'>" + task.text + "</div><button class='todo__button id-" + itemCounter + "'>×</button>";

        item.taskId = itemCounter;
        itemCounter++;

        return item;
    };


    // Initialisiert die Liste
    list.innerHTML = '';
    initTaskList(todoList.tasks);
});