const inputArea = document.querySelector(".ideaInput");
const addButton = document.querySelector(".addButton");
const ideaList = document.querySelector(".ideaList");

function createNewIdea() {
  const newIdeaText = inputArea.value;

  if (newIdeaText === "") {
    return;
  }

  const newListItem = document.createElement("li");

  newListItem.textContent = newIdeaText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("deleteButton");

  function deleteThisIdea() {
    newListItem.remove();
  }

  deleteButton.addEventListener("click", deleteThisIdea);
  newListItem.appendChild(deleteButton);

  ideaList.appendChild(newListItem);

  inputArea.value = "";
}

addButton.addEventListener("click", createNewIdea);
