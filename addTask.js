// Funktiolla lisätään uusi tehtävä taulukkoon
function addTask() {
  const input = document.getElementById("taskName");
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a task name.");
    return;
  }

  tasks.push({
    nimi: name,
    tila: "Not Started",
    luotu: new Date().toLocaleString(),
    paivitetty: null
  });

  input.value = "";
  refreshList();
}
