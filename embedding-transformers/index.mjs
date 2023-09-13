import { pipeline } from '@xenova/transformers';

//el modelo se carga en el node:modules por lo que corre localmentes

/*const EmbeddingGenerator = pipeline('feature-extraction');


let classifier = await pipeline('sentiment-analysis');
let output = await classifier('I barely like to go swimming in the mornings!');

console.log(output);
*/

let extractor = await pipeline(
    'feature-extraction', 
    'Xenova/all-MiniLM-L6-v2');

let output = await extractor(
    'This is a simple test.',
     { pooling: 'mean', normalize: true });
// Tensor {
//   type: 'float32',
//   data: Float32Array [0.09094982594251633, -0.014774246141314507, ...],
//   dims: [1, 384]
// }

console.log(output);