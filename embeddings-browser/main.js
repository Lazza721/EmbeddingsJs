//vamos a correr nuestro index-html desde live server click derecho
import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0';

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const generatebutton = document.getElementById("generateButton");
const output = document.getElementById("output");


const generateEmbeddings = await pipeline(
    'feature-extraction', 
    'Xenova/all-MiniLM-L6-v2');

generateButton.disabled = false;

function dotProduct(a, b){
    if(a.length !== b.length){
        throw new Error('Arrays must be same length');
    }

    let result = 0;

    for(let i =0;i<a.length;i++){
        result += a[i]*b[i];
    }

    return result;
}

generateButton.addEventListener('click', async() =>{


    
    const input1Value = input1.value;
    const input2Value = input2.value;



    const output = await generateEmbeddings(
    input1.value,
     { 
        pooling: 'mean',  //cada token tiene su embedding le sacamos la media a todos y generamos un embedding por la oracion
        normalize: true //convert em to unit vector 
     });

     const output2 = await generateEmbeddings(
        input2.value,
         { 
            pooling: 'mean',  //cada token tiene su embedding le sacamos la media a todos y generamos un embedding por la oracion
            normalize: true //convert em to unit vector 
         });

    const similarity = dotProduct(output.data, output2.data);


    salida.innerText = similarity;
});