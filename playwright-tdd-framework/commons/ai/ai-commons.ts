import { request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};
import data from '../../testdata/ai/data.json' with {type: 'json'};

export class AICommons {

    private requestContext: any;
    private response: any;

    //Common method to create the request context 
    async initializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.ai.baseUrl
        });
    }

    //Common method to send the request and get the response from an AI model 
    async getResponse(model:string, prompt:string) {
        const requestBody = data.body;
        requestBody.model=model;
        requestBody.prompt=prompt;
        this.response = await this.requestContext.post(config.ai.endpoint, {data: requestBody});
        const responseBody = await this.response.json();
        return responseBody['response'];
    }
}