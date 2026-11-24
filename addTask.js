//Funktiolla listätään uusi tehtävä taulukkoon
function addTask() {
  const input = document.getElementById("taskName");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a task name.");
    return;
 
  }
 {

  tasks.push({ name: name, status: "Not Started" });
  input.value = "";
  refreshList();
}
