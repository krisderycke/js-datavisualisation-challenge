// // const headerTable1 = document.getElementById(
// //   "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
// // );

// // window.addEventListener("load", createButton);

// // function createButton() {
// //   const headerTable1 = document.getElementById(
// //     "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
// //   );
// //   var button = document.createElement("button");
// //   button.setAttribute("id", "button1");
// //   button.innerHTML = "click here to see Graph";
// //   button.style.backgroundColor = "gray";
// //   button.style.color = "white";
// //   headerTable1.appendChild(button);
// //   button.addEventListener("click", checkForCanvas);
// // }

// // function checkForCanvas() {
// //   if (document.getElementById("canvas1")) {
// //     console.log("canvas1");
// //     headerTable1.removeChild(canvas1);
// //   } else {
// //     // console.log("tiert");

// //     createGraphData1();
// //   }

// //   function createGraphData1() {
// //   collect country data from Table 1
// const table1 = document.getElementById("table1");
// const tableNodes = table1.childNodes[5].children;
// const countries = [];

// console.log(tableNodes);
// //console.log(tableNodes[5].cells);

// for (let i = 1; i < tableNodes.length; i++) {
//   let array = [];

//   for (let j = 1; j < tableNodes[i].children.length; j++) {
//     array.push(tableNodes[i].children[j].innerText);
//   }
//   // countries.push(array);
//   console.log(array);
//   countries.push(array[0]);
// }
// console.log(countries);

// const canvas1 = document.createElement("canvas");

// console.log(table1);
// canvas1.setAttribute("id", "canvas1");
// table1.parentElement.insertBefore(canvas1, table1);
// //canvas1.style.backgroundColor = "red"; /*to still comment out*/
// canvas1.style.width = "600px";
// canvas1.style.height = "400px";
// var ctx = canvas1.getContext("2d");
// var chart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: [tableNodes[0].innerText],
//     datasets: [
//       {
//         label: countries,
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)"
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)"
//         ],
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true
//           }
//         }
//       ]
//     }
//   }
// });
//////////////////////// restart project ////////////////////////////////////////

// chart1
const header1 = document.getElementById("firstHeading");
const headerTable1 = document.getElementById(
  "Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police"
);
const headerTable2 = document.getElementById("Homicides");

window.addEventListener("load", createButtonAndTopCanvas);
window.addEventListener("load", createTopChart);

function createButtonAndTopCanvas() {
  var introCanvas = document.createElement("canvas");
  introCanvas.id = "introCanvas";
  header1.appendChild(introCanvas);
  introCanvas.style.width = "800px";
  introCanvas.style.height = "250px";
  // introCanvas.style.backgroundColor = "red";
  var button = document.createElement("button");
  button.setAttribute("id", "button1");
  button.innerHTML = "click here to see Graph";
  button.style.backgroundColor = "gray";
  button.style.color = "white";
  button.style.margin = "20px 0 50px 50px";
  headerTable1.appendChild(button);
  button.addEventListener("click", checkForCanvas);
}

////////////////////////// top chart

async function createTopChart() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const request = "https://canvasjs.com/services/data/datapoints.php";
  let response = await fetch(proxy + request);
  graphData = await response.json();
  //  let randomRGB = getRandomRgb();
  let xAxis = [];
  let data3 = [];
  let graphJson = [
    {
      label: "crime",
      backgroundColor: [
        "green",
        "yellow",
        "blue",
        "red",
        "black",
        "pink",
        "magenta",
        "cobalt",
        "azure"
      ],
      data: data3
    }
  ];

  for (let i = 0; i < graphData.length; i++) {
    let xdata;
    let ydata;
    let array = graphData[i];
    xdata = array[0];
    ydata = array[1];
    xAxis.push(xdata.toString());
    data3.push(ydata);
  }

  const ctx3 = document.getElementById("introCanvas").getContext("2d");

  var chart3 = new Chart(ctx3, {
    type: "line",
    data: {
      labels: xAxis,
      datasets: graphJson
    },
    options: {}
  });
}

///////////////////////////// end top chart
function checkForCanvas() {
  if (document.getElementById("myChart1")) {
    console.log("canvas1");
    headerTable1.removeChild(myChart1);
  } else {
    getRandomRgb();
  }

  function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  let years1 = [];
  for (let i = 2; i < table1.rows[1].cells.length; i++) {
    years1[i - 2] = table1.rows[1].cells[i].innerHTML;
  }

  let dataSet1 = [];
  for (let i = 2; i < table1.rows.length; i++) {
    let randomRGB = getRandomRgb();
    let tableRow = table1.rows[i];
    let country = tableRow.cells[1].innerHTML;
    let data = [];
    let rowJson = {
      label: country,
      fill: false,
      borderColor: randomRGB,
      data: data
    };
    for (let j = 2; j < tableRow.cells.length; j++) {
      data.push(parseInt(tableRow.cells[j].innerHTML));
    }
    dataSet1.push(rowJson);
  }

  const canvas1 = document.createElement("canvas");
  canvas1.id = "myChart1";
  table1.parentNode.insertBefore(canvas1, table1);
  const ctx = document.getElementById("myChart1").getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: years1,
      datasets: dataSet1
    },
    options: {
      title: {
        display: true,
        text: "Tableau 1: Infractions enregistrées par la police, 2002–12"
      }
    }
  });
}

////////// chart2

// graph2 v2
var button2 = document.createElement("button");
button2.setAttribute("id", "button2");
button2.innerHTML = "click here to see Graph";
button2.style.backgroundColor = "gray";
button2.style.color = "white";
button2.style.margin = "20px 0 50px 50px";
headerTable2.appendChild(button2);
button2.addEventListener("click", checkForCanvas2);

function checkForCanvas2() {
  if (document.getElementById("myChart2")) {
    headerTable2.removeChild(myChart2);
  } else {
    let dataSet2 = [];
    let country2 = [];
    for (let i = 1; i < table2.rows.length; i++) {
      let tableRow = table2.rows[i];
      let country = tableRow.cells[1].innerHTML;
      country2.push(country);
    }

    for (let i = 2; i < table2.rows[0].cells.length; i++) {
      let data2 = [];
      let yearData1 = [];
      let yearData2 = [];

      data2.push(yearData1, yearData2);
      for (let i = 1; i < table2.rows.length; i++) {
        let tableRow = table2.rows[i];
        yearData1.push(parseInt(tableRow.cells[2].innerHTML));
        yearData2.push(parseInt(tableRow.cells[3].innerHTML));
      }
      let data = data2[i - 2];
      let years2 = table2.rows[0].cells[i].innerHTML;
      let rowJson = {
        label: years2,

        data: data
      };
      dataSet2.push(rowJson);
    }

    const canvas2 = document.createElement("canvas");
    canvas2.id = "myChart2";
    table2.parentNode.insertBefore(canvas2, table2);
    const ctx2 = document.getElementById("myChart2").getContext("2d");
    ctx2.canvas.width = window.innerWidth;
    ctx2.canvas.height = window.innerHeight;

    var chart = new Chart(ctx2, {
      type: "line",
      data: {
        labels: country2,
        datasets: dataSet2
      },
      backgroundColor: "yellow",
      borderWidth: 1,
      borderColor: "#000",
      hoverBorderWidth: 3,
      hoverBorderColor: "#777",
      options: {
        title: {
          display: true,
          text:
            "Population carcérale, moyenne par an, 2007–09 et 2010–12 (pour 100 000 habitants)"
        }
      }
    });
  }
}

////////////////////2nd part of excercises//////////////////////////
