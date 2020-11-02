// 1. Implemente o algoritmo Bubble Sort em javascript

let array = [5,7,15,22,43,9,12  ];

function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1-i; j++) {
            if(array[j] >= array[j+1] ){
                let aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux;
            } 
        }
    }
}

console.log(array);
bubbleSort(array)
console.log(array);

// 2. Dê um exemplo de sequencia entrada onde ocorram o
// maior número de trocas (pior caso).
    // 90, 45, 34, 23, 12, 11, 9, 2

// 3. Dê um exemplo de sequencia entrada onde ocorram o
// menor número de trocas (melhor caso).
    // 2, 9, 11, 12, 23, 34, 45, 90

// 4. Qual o limite assintótico superior do pior caso?
    // O(n²)

// 5. Qual o limite assintótico superior do melhor caso?

    // O(n²), mas se colocarmos uma flag dentro do if vamos saber quando não entrou aí poderia ser reduzido para 0(n) 