// 1. Implemente o algoritmo de Quick Sort em javascript

let vetor = [5,4,8,1,2,6,7,3];

function quicksort(array, inferior, superior) {
    if(inferior < superior){
        let pivo = array[superior];
        let i, j;
        i = inferior -1;
        for (j = inferior; j <= superior-1; j++) {
            if(array[j] <= pivo){
                i++;
                let aux = array[j]
                array[j] = array[i]
                array[i] = aux;
            }   
        }
        let aux = array[superior]
        array[superior] = array[i+1]
        array[i+1] = aux;
        pivo_pos = i+1;

        quicksort(array, inferior, pivo_pos-1)
        quicksort(array, pivo_pos+1, superior)

    }

}
quicksort(vetor, 0, vetor.length -1 )
console.log(vetor);


// 2. Dê um exemplo de sequencia entrada onde ocorram o
// maior número de trocas (pior caso).
    // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
    // Quando uma lista já está ordenada tanto crescente como decrescente. 

// 3. Dê um exemplo de sequencia entrada onde ocorram o
// menor número de trocas (melhor caso).

    // Não sei

// 4. Qual o limite assintótico superior do pior caso?
    
    // O(n²)

// 5. Qual o limite assintótico superior do melhor caso?
