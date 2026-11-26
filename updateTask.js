//Funktio päivittää valitun tehtävän statustiedon sekä päivitysajankohdan
function updateTaskInformation() {

  // Haetaan tehtävän nimi ja uusi status HTML-sivulta
  const taskName = document.getElementById("updateTaskName").value;
  const newStatus = document.getElementById("newStatus").value;

  // Etsitään tehtävä taulukosta
  for (let i = 0; i < tasks.length; i++) {

    // Tarkistetaan vastaako tehtävän nimi käyttäjän antamaa nimeä
    if (tasks[i].nimi === taskName) {

      // Päivitetään tehtävän status
      tasks[i].tila = newStatus;

      // Tallennetaan päivitysajankohta
      tasks[i].paivitetty = new Date().toLocaleString();

      // Päivitetään tehtävälista
      refreshList();

      return;
    }
  }

  // Jos tehtävää ei löydy
  alert("Task not found.");
}
