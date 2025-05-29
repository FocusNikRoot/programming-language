function FilterMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
                result.push(matrix[i][j]);
            }
        }
    }
    return result;
}

function PrintMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

function ThirteenDisplayInfo() {
    console.log("\nТринадцатое задание");
    let matrix =[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let ratio = Math.random() < 0.5 ? -1 : 1;
            matrix[i][j] = Math.floor( Math.random() * 10 * ratio);
        }
    }
    console.log('Матрица:');
    PrintMatrix(matrix);
    console.log(`Элементы матрицы, принадлежащие интервалу [-5; 7]: ${FilterMatrix(matrix)}`);
}