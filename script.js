//Submitting Movies
let form = document.getElementById("addForm");

form.addEventListener("submit", addMovie);

function addMovie(e) {
  e.preventDefault();

  //Grabbing Inputs
  let newItem = document.getElementById("item").value;

  //Create new list
  let li = document.createElement("li");

  //Setting attributes to the list
  //class
  li.className = "list-group-item listStyle";
  //   console.log(movie added);
  //text
  li.appendChild(document.createTextNode(newItem));

  //Appending the new list into the ul
  itemList.appendChild(li);

  //Create delete button
  let button = document.createElement("button");

  //Setting attributes to the button
  //class
  button.className = "btn btn-danger btn-sm float-right delete";
  // console.log(button added);
  //text
  button.appendChild(document.createTextNode("x"));

  //Appending the button into the li
  li.appendChild(button);
}

//Removing Movies
let itemList = document.getElementById("items");

itemList.addEventListener("click", removeMovie);

function removeMovie(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete")) {
    // console.log("movie removed");

    //removing
    if (confirm("Do you want to remove the Movie?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filtering Movies
let filter = document.getElementById("filter");

filter.addEventListener("keyup", filterMovies);

function filterMovies(e) {
  //converting to lowerCase
  let letters = e.target.value.toLowerCase();
  // console.log(letters);

  //Getting all list items
  let items = itemList.getElementsByTagName("li");
  // console.log(items);
  //converting HTML collection to an Array
  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    // console.log(itemName);
    //Searching movies
    if (itemName.toLowerCase().indexOf(letters) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
