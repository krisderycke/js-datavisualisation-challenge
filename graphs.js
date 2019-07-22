window.addEventListener("load", createButton);

function createButton() {
  const headerTable1 = document.getElementById(
    "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
  );
  var button = document.createElement("button");
  button.setAttribute("id", "button1");
  button.innerHTML = "click here to see Graph";
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
  canvas.style.backgroundColor = "red"; /*to comment out*/
  canvas.style.width = "600px";
  canvas.style.height = "400px";
  console.log(canvas);
}
