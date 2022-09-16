let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

//Submit
form.addEventListener("submit", addItem);

//Adding Items
function addItem(e) {
  e.preventDefault();

  //Grabbing Inputs
  let newItem = document.getElementById("item").value;

  //Create new list
  let li = document.createElement("li");

  //Setting things to the list
  li.className = "list-group-item listStyle";
  //   console.log(li);
  li.appendChild(document.createTextNode(newItem));

  //Appending the new list into the ul
  itemList.appendChild(li);
}
