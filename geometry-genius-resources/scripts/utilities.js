let count = 0;
function captureElement(shape, shapeSideOne, shapeSideTwo) {
  let sideOne = document.getElementById(shapeSideOne);
  let sideTwo = document.getElementById(shapeSideTwo);
  if (!shape.length || isNaN(sideOne.value) || isNaN(sideTwo.value)) {
    alert("Provide Positive Integers");
    return;
  }
  sideOne = parseInt(sideOne.value);
  sideTwo = parseInt(sideTwo.value);
  console.log(shape, shapeSideOne, shapeSideTwo);
  let area = 0;
  switch (shape) {
    case "triangle":
      area = triangleAreaCalculator(sideOne, sideTwo);
      break;
    case "rectangle":
      area = rectangleAreaCalculator(sideOne, sideTwo);
      break;
    case "parallelogram":
      area = parallelogramAreaCalculator(sideOne, sideTwo);
      break;
    case "rhombus":
      area = rhombusAreaCalculator(sideOne, sideTwo);
      break;
    case "pentagon":
      area = pentagonAreaCalculator(sideOne, sideTwo);
      break;
    case "ellipse":
      area = ellipseAreaCalculator(sideOne, sideTwo);
      break;
  }
  count++;
  insertSelectedShape(shape, area);
  return;
}

function triangleAreaCalculator(b, h) {
  return (0.5 * b * h).toFixed(2);
}

function rectangleAreaCalculator(w, l) {
  return (w * l).toFixed(2);
}
function parallelogramAreaCalculator(b, h) {
  return (b * h).toFixed(2);
}

function rhombusAreaCalculator(d1, d2) {
  return (0.5 * d1 * d2).toFixed(2);
}
function pentagonAreaCalculator(p, b) {
  return (0.5 * p * b).toFixed(2);
}
function ellipseAreaCalculator(a, b) {
  return (3.14 * a * b).toFixed(2);
}

function insertSelectedShape(shape, area) {
  const calculationArea = document.getElementById("calculation-area");
  const child = document.createElement("div");
  child.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  child.innerHTML = `
                <p class="pt-2">${count}. ${shape}</p>
                <p class="pt-2">${area}</p>
                <button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button>
             `;
  calculationArea.appendChild(child);
}

const cards = document.getElementsByClassName('card');

for (const card of cards) {
    card.addEventListener('mouseenter', function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var col = "rgb(" + r + "," + g + "," + b + ")";
        card.style.backgroundColor = col;
    });
    
}
