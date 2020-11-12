// 1. Implemente o algoritmo de Insertion Sort em javascript

let vetor = [5,4,8,1,467,2,6,7,3];

function InsertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let escolhido =  array[i];

        j = i-1;

        while(j >= 0 && array[j] > escolhido){
            array[j+1] = array[j];
            j = j-1;
        }
        array[j+1] = escolhido;
    }
}

console.log(vetor);
InsertionSort(vetor)
console.log(vetor)

// 2. Dê um exemplo de sequencia entrada onde ocorram o
// maior número de trocas (pior caso).
    // 8, 7, 6, 5, 4, 3, 2, 

// 3. Dê um exemplo de sequencia entrada onde ocorram o
// menor número de trocas (melhor caso).
    // 1, 2, 3, 4, 5, 6, 7, 8

// 4. Qual o limite assintótico superior do pior caso?
    // O(n²)

// 5. Qual o limite assintótico superior do melhor caso?
    // O(n)