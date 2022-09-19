//cerner_2^5_2022

const clockWise = (matrix) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < row; column++) {
            let temp = matrix[row][column];
            matrix[row][column] = matrix[column][row];
            matrix[column][row] = temp;
        }
    }
    let finalMatrix = matrix.map((row) => row.reverse());

    return finalMatrix;
};

let matrix = [
    [9, 1, 4],
    [7, 4, 5],
    [0, 7, 7],
];

clockWise(matrix);
