var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var spans = document.querySelectorAll("span.listItem");
var deleteButtons = document.querySelectorAll("button.delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	ul.appendChild(li);

	var span = document.createElement("span");
	li.appendChild(span);
	span.appendChild(document.createTextNode(input.value + " "));

	span.addEventListener("click", function() {
		span.classList.toggle("done");
	})
	input.value = "";

	var deleteButton = document.createElement("button");
	deleteButton.className = "delete";
	deleteButton.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", function() {
		li.remove();
		deleteButton.remove();
	});

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function itemDone() {
	//here
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

spans.forEach(function(span) {
	span.addEventListener("click", function() {
		span.classList.toggle("done");
	});
});

deleteButtons.forEach(function(deleteButton, i) {
	deleteButton.addEventListener("click", function() {
		lis[i].remove();
	});
});