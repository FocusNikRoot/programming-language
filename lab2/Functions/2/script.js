function TwoDisplayInfo() {
    const num = document.getElementById("TwoNumberInput1").value;
    const output = document.getElementById("TwoOutput");
    const dialog = document.getElementById("TwoDialog");
    const closeDialog = document.getElementById("TwoCloseDialog");

    output.innerHTML = '';

    if (num > 0) {
        if (num < 18) {
            output.innerHTML = '<p>Привет, малыш!</p>';
        } else {
            output.innerHTML = '<p>Здравствуй, юноша!</p>';
        }
    }

    dialog.showModal();

    closeDialog.addEventListener('click', () => {
        dialog.close();
    });

}