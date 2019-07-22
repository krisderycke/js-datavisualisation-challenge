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
  console.log(button);
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
  console.log(canvas);

  //   collect data from Table 1
  let table1 = document.getElementById("table1");
  let tableNodes = table1.childNodes[5].children;
  //console.log(tableNodes);
  // console.log(tableNodes[5]);
  // console.log(tableNodes[5].children);
  // console.log(tableNodes[5].children[1].cells[1]);
  // console.log(tableNodes[5].children[2].cells[1]);
  // console.log(tableNodes[5].children[3].cells[1]);

  for (let i = 1; i < tableNodes.length; i++) {
    // console.log(tableNodes[i].cells[1]);
    // countries.push(tableNodes[i].cells[1]);
    // countries.push(tableNodes[i]);
    let countries = [tableNodes[i].cells[1].innerHTML];
    console.log(countries);

    //console.log(countries);
  }

  // let tableData = document.getElementsByTagName("td");
  // console.log(tableData);
  // let countries = [];

  // for (let i = 0; i < country.length; i + 12) {
  //   countries.push(country[i]);
  //   console.log(countries);
  // }
}
