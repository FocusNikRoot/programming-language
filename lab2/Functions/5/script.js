function FiveDisplayInfo() {
    const x = document.getElementById("FiveInput1").value;
    const y = document.getElementById("FiveInput2").value;
    const z = document.getElementById("FiveInput3").value;
    const output = document.getElementById("FiveOutput");

    let result = (Math.max(x,y) + Math.max(x + y,z)) / (Math.pow(Math.max(0.5,x + z), 2));

    output.innerHTML = `<p>u = ${result}</p>`;
}