const buttonElement = document.getElementById('button-to-hide');
const textElement = document.getElementById('text');

function hideText() {
    if (textElement) {
        textElement.style.display = 'none';
    }
}

function hideButton() {
    if (buttonElement) {
        buttonElement.style.display = 'none';
    }
}

document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    mapDiv = document.getElementById('map');
    if (mapDiv) {
        mapDiv.textContent = `Координаты нажатия: X = ${x}, Y = ${y}`;
    }
    alert('Был щелчок!');
});

function showMessage() {
    alert("Текст был изменен!!!");
}