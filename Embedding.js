import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.HF_TOKEN);


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


const output = await hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: "That is a happy person",
});

const output2 = await hf.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: "a rollercoaster is a cool thing to do",
});

const similarity  = dotProduct(output,output2);
console.log(similarity);
