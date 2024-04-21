const vectorSize = 5;

function getInputVector() {
    const vector = [];
    
    for (let i = 0; i < vectorSize; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1} del vector:`));
        
        while (isNaN(num) || (i > 0 && num <= vector[i - 1])) {
            num = parseInt(prompt(`Número inválido. Ingrese el número ${i + 1} del vector (mayor que el número anterior):`));
        }
        
        vector.push(num);
    }
    
    return vector;
}

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    return mergedArray;
}

const vector1 = getInputVector();
const vector2 = getInputVector();

const mergedVector = mergeSortedArrays(vector1, vector2);

console.log(`Lista de números ordenados: ${mergedVector.join(', ')}`);