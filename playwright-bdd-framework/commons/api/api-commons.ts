import { expect, request } from '@playwright/test';
import config from '../../config/config.json' with {type: 'json'};

export class APICommons {

    private requestContext: any; //To hold the context of the API request (like baseurl,headers etc..) 
    private response: any; //To hold the response of the API request 

    //Common method to create the request context 
    async initializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.api.baseUrl,
            extraHTTPHeaders: {
                'Authorization': config.api.token,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2026-03-10'
            }
        });
    }

    //Common method to send the API request and get the response 
    async getResponse(requestType: string, endpoint: string, requestBody?: any) {
        switch (requestType.toLowerCase()) {
            case 'get':
                this.response = await this.requestContext.get(endpoint);
                break;
            case 'post':
                this.response = await this.requestContext.post(endpoint, { data: requestBody });
                break;
            case 'put':
                this.response = await this.requestContext.put(endpoint, { data: requestBody });
                break;
            case 'patch':
                this.response = await this.requestContext.patch(endpoint, { data: requestBody });
                break;
            case 'delete':
                this.response = await this.requestContext.delete(endpoint);
                break;
            default:
                throw new Error(`Unsupported request type: ${requestType}`);
        } 
        
        //Wait for 2 seconds and print the response body within the console. 
        await new Promise(resolve => setTimeout(resolve, 2000));
        if(requestType !== 'delete')
            console.log(await this.response.json());
    }

    //Common method to validate the response status code 
    async validateStatusCode(expectedStatusCode: number) {
        const actualStatusCode = this.response.status();
        expect(actualStatusCode).toBe(expectedStatusCode);
    }

    //Common method to validate status message 
    async validateStatusMessage(expectedStatusMessage: string) {
        const actualMessage = this.response.statusText();
        expect(actualMessage).toContain(expectedStatusMessage);
    }

    //Common method to validate key and value within the response body 
    async validateResponseBodyKeyValue(key: string, expectedValue: any) {
        const responseBody = await this.response.json();
        const actualValue = await responseBody[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Common method to validate the response headers 
    async validateResponseHeader(headerName: string, expectedValue: string) {
        const responseHeaders = this.response.headers();
        const actualValue = responseHeaders[headerName];
        expect(actualValue).toBe(expectedValue);
    }

    //Common method to validate the response schema 
    async validateResponseSchema(key: string, expectedDataType: any) {
        const responseBody = await this.response.json();
        const actualValue = await responseBody[key];
        expect(typeof actualValue).toBe(expectedDataType);
    }



}