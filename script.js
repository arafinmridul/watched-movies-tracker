let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

//Submit
form.addEventListener("submit", addMovie);

//Adding Movies
function addMovie(e) {
  e.preventDefault();

  //Grabbing Inputs
  let newItem = document.getElementById("item").value;

  //Create new list
  let li = document.createElement("li");

  //Setting things to the list
  //class
  li.className = "list-group-item listStyle";
  //   console.log(li);
  //text
  li.appendChild(document.createTextNode(newItem));

  //Appending the new list into the ul
  itemList.appendChild(li);

  //Create delete button
  let button = document.createElement("button");

  //Setting things to the button
  //class
  button.className = "btn btn-danger btn-sm float-right delete";
  // console.log(button);
  //text
  button.appendChild(document.createTextNode("x"));

  //Appending the button into the li
  li.appendChild(button);
}
