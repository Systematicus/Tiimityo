//Funktio päivittää tehtävälistan (task list)
function refreshList() {
  const listaAlue = document.getElementById("tasksList");

  // Jos tehtäviä ei ole, näytetään pelkkä teksti
  if (tasks.length === 0) {
    listaAlue.innerHTML = "No tasks yet.";
    return;
  }

  for (let i = 0; i < tasks.length; i++) {
    const tehtava = tasks[i];

    // Jos tilaa ei ole vielä muutettu, näytetään viiva
    let paivitetty = tehtava.paivitetty;
    if (paivitetty === null) {
      paivitetty = "-";
    }

    html += "<tr>";
    html += "<td>" + tehtava.nimi + "</td>";
    html += "<td>" + tehtava.tila + "</td>";
    html += "<td>" + tehtava.luotu + "</td>";
    html += "<td>" + paivitetty + "</td>";
    html += "</tr>";
  }

  html += "</table>";

  listaAlue.innerHTML = html;
}
