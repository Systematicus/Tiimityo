//Funktiolla listätään uusi tehtävä taulukkoon
function insertTask() {
  const input = document.getElementById("taskName");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a task name.");
    return;
  }

  if (tasks.some((t) => t.name.toLowerCase() === name.toLowerCase())) {
    alert("A task with this name already exists.");
    return;
  }

  tasks.push({ name: name, status: "Not Started" });
  input.value = "";
  refreshList();
}
