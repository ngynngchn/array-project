//TODO: click on "cancel" btn should remove the last added item fromn the array and also from the visible HTML
//TODO:

//*================= Variables =================

//* input
const task = document.querySelector("#task");

//* buttons
const addBtn = document.querySelector(".add");
const undoBtn = document.querySelector(".undo");

//* output container
const output = document.querySelector(".output");
const finalOutput = document.querySelector(".finalList");

let item;
//* array to store input values
const taskList = [];

//TODO: click on "add" btn should add the input value as an item to an array; the output should be visible in the HTML

const taskElement = `<li>${item}</li>`;

addBtn.addEventListener("click", addItem);

function addItem() {
	if (task.value !== "") {
		taskList.push(task.value);
		output.innerHTML += `<li>${task.value}</li>`;
		task.value = " ";
		// finalOutput.innerHTML = `<p>You have to do the folllowing: ${taskList}</p>`;
	}
}

undoBtn.addEventListener("click", undoItem);

function undoItem() {
	taskList.pop();
	output.lastChild.remove();
	// finalOutput.innerHTML = `<p>You have to do the folllowing: ${taskList}</p>`;
}
