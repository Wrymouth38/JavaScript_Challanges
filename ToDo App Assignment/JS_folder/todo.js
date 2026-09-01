/*this function gets the task from input*/
function get_todos() {
    /*This creates an array of task that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in teh web browser memoery*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*this takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*this adds a new tassk the end of the array*/
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*this function keeps the tasks permanetly displayed on the screen */
function show() {
    /*this sets the task that was retrieved as a variable*/
    var todos = get_todos();

    /*this sets up each task an unordered list*/
    var html = '<ul>';
    /*this displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++)  {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    /*This displays the tas as a list*/
    document.getElementById('todos').innerHTML = html;
}

/*this function removes the items from the list  */
function remove() {
    var od = this.getAttribute('id');
    var todos = get_todos();

    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);

/*remove todo when the x button is clicked*/
document.addEventListener('click', function(event) {
    if (event.target.className === 'remove') {
        remove.call(event.target);
    }
});
/*this will keep the inputs displayed permantaly on the screen*/
show();



