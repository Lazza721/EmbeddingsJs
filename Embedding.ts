import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_TOKEN);

await hf.featureExtraction({
    model: "intfloat/e5-small-v2",
    inputs: "That is a happy person",
  });   

  