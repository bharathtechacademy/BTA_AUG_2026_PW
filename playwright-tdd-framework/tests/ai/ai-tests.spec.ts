import { AICommons } from "../../commons/ai/ai-commons.ts";
import {test} from "@playwright/test";

test('AI response test', async () =>{
    test.slow();
    const aiCommons = new AICommons();
    await aiCommons.initializeRequestContext();
    const response = await aiCommons.getResponse('gemma3:1b', 'Can you write a JavaScript Function to identify the prime number from the given numbers array?');
    console.log(response);
})