//Funktiolla listätään uusi tehtävä taulukkoon
function addtask() {
  let name = document.getElementById("taskName").value.trim();
  tasks.push({ name: name, status: "Not Started" });
  refreshList();
}
