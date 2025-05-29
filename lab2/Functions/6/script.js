function CalculatingPerimeter(vertexes) {
    let perimeter = 0;
    for (let i = 0; i < vertexes.length; i += 1) {
        if (vertexes[i] !== undefined) {
            console.log(vertexes[i]);
        }
        const x1 = vertexes[i][0];
        const y1 = vertexes[i][1];
        const x2 = vertexes[(i + 1) % vertexes.length][0];
        const y2 = vertexes[(i + 1) % vertexes.length][1];
        const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        perimeter += distance;
    }

    return perimeter;
}

function VertexQuantity(coords) {
    console.log(coords);

    const vertexes = [];
    for (let i = 0; i < coords.length; i += 2) {
        vertexes.push([coords[i], coords[i + 1]]);
    }

    console.log(vertexes.length);

    return vertexes;
}

function SixDisplayInfo() {
    const xInputs = document.querySelectorAll(".x");
    const yInputs = document.querySelectorAll(".y");
    const coords = [];

    xInputs.forEach((input,index) => {
        const x = parseFloat(input.value);
        const y = parseFloat(yInputs[index].value);
        if (!isNaN(x) && !isNaN(y)) {
            coords.push(x, y);
        }
    })

    if (coords.length < 6) {
        alert("Введите координаты трёх или более вершин!");
        return;
    }

    try {
        const vertexes = VertexQuantity(coords)
        const perimeter = CalculatingPerimeter(vertexes);
        document.getElementById("SixOutput").textContent = `Периметр ${vertexes.length}-угольника: ${perimeter}`
    } catch (e) {
        alert(e.message);
    }


}

function SixAddInput() {
    const inputDiv = document.getElementById("SixInputs");
    const newInputs = document.createElement("div");
    newInputs.innerHTML = `
        <label>Вершина: ${inputDiv.children.length + 1}</label>
        <input type="number" class="x" placeholder="x">
        <input type="number" class="y" placeholder="y">
    `;
    inputDiv.appendChild(newInputs);
}

SixAddInput();
SixAddInput();