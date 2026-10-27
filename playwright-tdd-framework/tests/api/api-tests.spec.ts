import {test} from '@playwright/test';
import { APICommons } from '../../commons/api/api-commons.ts';
import testdata from '../../testdata/api/data.json' with {type: 'json'};


test.describe('Github API Tests', () => {   

    let api:APICommons;

    //For each and every test case, create an object of JPA common methods and also run the `initialize request context` method. 
    test.beforeEach(async () => {
        api = new APICommons();
        await api.initializeRequestContext();
    });


    //Test Case 1: Validate the API request related to creating a duplicate repository within GitHub. 
    test('Create duplicate repo', async () => {
        const data = testdata.duplicateRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBodyKeyValue("message",data.expErrorMessage);
        await api.validateResponseSchema("message",data.expErrorDataType);
    });

    //Test Case 2: Validate the API request related to creating a valid repository within GitHub. 
    test('Create valid repo', async () => {
        const data = testdata.validRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBodyKeyValue("name",data.expRepoName);
        await api.validateResponseSchema("name",data.expRepoDataType);
    });

    //Test Case 3: Validate the API request to update the valid repository within GitHub. 
    test('Update repo', async () => {
        const data = testdata.updateRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBodyKeyValue("name",data.expRepoName);
        await api.validateResponseSchema("name",data.expRepoDataType);
    });

    //Test Case 4: Validate the API request to get the valid repository within GitHub. 
    test('Get repo', async () => {
        const data = testdata.getRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBodyKeyValue("name",data.expRepoName);
        await api.validateResponseSchema("name",data.expRepoDataType);
    });
    
    //Test Case 5: Validate the API request to delete the valid repository within GitHub. 
    test('Delete repo', async () => {
        const data = testdata.deleteRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expCode);
        await api.validateStatusMessage(data.expStatusMessage);
    });

});
