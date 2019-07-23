window.addEventListener("load", createButton);

function createButton() {
  const headerTable1 = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
  );
  var button = document.createElement("button");
  button.setAttribute("id", "button1");
  button.innerHTML = "click here to see Graph";
  button.style.backgroundColor = "gray";
  button.style.color = "white";
  button.addEventListener("click", createGraph1);
  headerTable1.appendChild(button);
}

function createGraph1() {
  const headerTable1 = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
  );
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "canvas1");
  headerTable1.appendChild(canvas);
  canvas.style.backgroundColor = "red"; /*to still comment out*/
  canvas.style.width = "600px";
  canvas.style.height = "400px";

  //   collect country data from Table 1
  let table1 = document.getElementById("table1");
  let tableNodes = table1.childNodes[5].children;
  let countries = [];

  //console.log(tableNodes);
  //console.log(tableNodes[5].cells);

  for (let i = 1; i < tableNodes.length; i++) {
    let array = [];

    for (let j = 1; j < tableNodes[i].children.length; j++) {
      array.push(tableNodes[i].children[j].innerText);
    }
    countries.push(array);
    console.log(array);
  }
  console.log(countries);
}
