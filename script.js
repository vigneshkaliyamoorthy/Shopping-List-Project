var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");
var delBtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}
	

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(document.createTextNode(" "));
	var deletebtn = document.createElement("button");
	deletebtn.appendChild(document.createTextNode("Delete"));
	deletebtn.onclick = removeParent;
	li.appendChild(deletebtn);
	ul.appendChild(li);
	input.value = "";
}

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
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

ul.addEventListener("click", function(e){
		e.target.classList.toggle("done");
});

for(i=0;i<delBtn.length;i++){
	delBtn[i].addEventListener("click", removeParent);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);