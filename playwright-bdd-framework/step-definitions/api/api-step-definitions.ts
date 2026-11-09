import { Given, When, Then } from '@cucumber/cucumber';
import { APICommons } from '../../commons/api/api-commons.ts';
import data from '../../testdata/api/data.json' with {type: 'json'};

let api: APICommons;

//Given API request context is initialized
Given('API request context is initialized', async () => {
    api = new APICommons();
    await api.initializeRequestContext();
});

//When User sends a "POST" request with an endpoint "/user/repos" to create a repository with the name "PlaywrightRepo"
When('User sends a {string} request with an endpoint {string} to create a repository with the name {string}', async (method: string, endpoint: string, repoName: string) => {
    let requestBody = data.duplicateRepo.payload;
    requestBody.name = repoName;
    await api.getResponse(method, endpoint, requestBody);
});

//Then User should receive a response with status code 422
Then('User should receive a response with status code {int}', async (expCode: number) => {
    await api.validateStatusCode(expCode);
});

//And User should receive status message "Unprocessable Entity"
Then('User should receive status message {string}', async (statusMessage: string) => {
    await api.validateStatusMessage(statusMessage);
});

//And User should receive a body having a "message" as "Repository creation failed."
Then('User should receive a body having a {string} as {string}', async (key: string, value: string) => {
    await api.validateResponseBodyKeyValue(key, value);
});

//And User should receive a body having "message" datatype as "string"
Then('User should receive a body having {string} datatype as {string}', async (key: string, type: string) => {
    await api.validateResponseSchema(key, type);
});

//When User sends a "PATCH" request with an endpoint "/repos/bharathtechacademy05/ValidPlaywrightRepo" to update the repository description as "Updated description"
When('User sends a {string} request with an endpoint {string} to update the repository description as {string}', async (method: string, endpoint: string, description: string) => {
    let requestBody = data.updateRepo.payload;
    requestBody.description = description;
    await api.getResponse(method, endpoint, requestBody);
});

//When User sends a "GET" request with an endpoint "/repos/bharathtechacademy05/ValidPlaywrightRepo"
When('User sends a {string} request with an endpoint {string}', async (method: string, endpoint: string) => {
    await api.getResponse(method, endpoint);
});
