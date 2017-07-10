var todoList = [
	'Walk the dog',
	'Pick up some milk',
	'Put the kids to bed',
	'Pour yourself a beer'
];

var todo = document.getElementById('todo');

function drawTodoList(){
	// first delete old list
	todo.innerHTML = ' ';
	// Now add updated array to new list
	for(var i = 0; i < todoList.length; i++){
	todo.innerHTML += "<li> <input type='checkbox'> " + todoList[i] + "</li>";
	}
}

var action = document.getElementById("activity");

function addTodoItem(){
	var action = document.getElementById("activity");

	if(action.value === ''){
		alert("Enter a task first.");
	} else{
		todoList.push(action.value);
		action.value = '';
		drawTodoList();
	}
}

function deleteTodoItem(){
	console.log("deleted");
	todo.innerHTML += "";
}