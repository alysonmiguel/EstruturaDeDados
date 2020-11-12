
// 1. Implemente o algoritmo Selection Sort em javascript

let array = [5,4,8,1,2,6,7,3];

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let indiceMenor = i;
        for (let j = i; j < array.length; j++) {
            if(array[indiceMenor] > array[j] ){
               indiceMenor = j;
            } 
        }
        if(i != indiceMenor){
            let aux = array[i]
            array[i] =  array[indiceMenor]
            array[indiceMenor] = aux;
        }
    }
}

console.log(array);
selectionSort(array)
console.log(array);

// 2. Dê um exemplo de sequencia entrada onde ocorram o
// maior número de trocas (pior caso).

// Independente da entrada ele sempre percorre todo o array 

// 3. Dê um exemplo de sequencia entrada onde ocorram o
// menor número de trocas (melhor caso).
 
// Independente da entrada ele sempre percorre todo o array 

// 4. Qual o limite assintótico superior do pior caso?

// O(n²)

// 5. Qual o limite assintótico superior do melhor caso?

// O(n²)