//*================= Variables =================

//* input
const entry = document.querySelector("#entry");

//* buttons
const addBtn = document.querySelector(".add");
const undoBtn = document.querySelector(".undo");

//* output container
const output = document.querySelector(".output");

//* array to store input values
const entryList = [];

//*================= Functions =================

addBtn.addEventListener("click", addItem);
undoBtn.addEventListener("click", undoItem);

function addItem() {
	if (entry.value !== "") {
		entryList.push(entry.value);
		output.innerHTML += `<li>${entry.value}</li>`;
		entry.value = " ";
	}
}

function undoItem() {
	entryList.pop();
	output.lastChild.remove();
}

/* other method inspired by Karin

function addItem() {
	if (entry.value !== "") {
		entryList.push(`<li>${entry.value}</li>`);
		output.innerHTML = entryList.join("");
		entry.value = " ";
	}
}

function undoItem() {
	entryList.pop();
	output.innerHTML = entryList.join("");
} 
*/
