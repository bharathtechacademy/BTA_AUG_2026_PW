# API Testing - Step By Step


## What is API ?
API stands for Application Programming Interface. Conceptually, API is a combination of routines (logic / task), protocols (format), and a set of supporting tools to exchange information between your application and a backend server. 

XML
===
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <UserId>12345</UserId>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>


<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <Username>Bharath Reddy</Username>
         <Userrole>Senior SDET</Userrole>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>

JSON
====
{
    "empId" : 1234
}

Response:
{
   "id": 12345,
   "name": "John Doe",
   "email": "johndoe@example.com"
}

JSON Query
==========
{
   "query": "{ user(id: \12345\) { name, email } }"
}

Response:
{
   "data": {
      "user": {
         "name": "John Doe",
         "email": "johndoe@example.com"
      }
   }
}

## What is the difference between an API , Web Service and a microservice? 
API, web service, and microservice all are APIs only. 

** All web services are APIs, but all APIs are not web services. 

## Web Service 
Web services are all about the APIs that run over the internet / Web. 

## Micro Services
A microservice is a small, independent API that can be used internally inside the application to exchange information between different components. 

## Different types of API architectures ?

## REST ( Representational State Transfer )
RESTful services mainly use the JSON format to exchange information between your application and the server. RESTful services will use different types of HTTP methods to perform different types of operations via API. 

GET => The GET method will be used to get the existing information from the server. (READ)
POST => The POST method will be used to create the new information within the server. (CREATE)
PUT => The `PUT` method will be used to update the existing information within the server. (UPDATE)
PATCH => The PATCH method will be used to update the specific information within the server. (UPDATE)
DELETE => The delete method will be used to delete the information from the server. (DELETE)

Request: GET api.example.com/users/12345 HTTP/1.1
{
    "empId" : 1234
}

Response:
{
   "id": 12345,
   "name": "John Doe",
   "email": "johndoe@example.com"
}

## SOAP (Simple Object Access Protocol )
SOAP services mainly rely on the XML format to exchange information between the application and the server, and each SOAP service mainly uses a POST request to complete different types of operations via API. 

POST /webservice HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
Content-Length: length

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <UserId>12345</UserId>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>


<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <Username>Bharath Reddy</Username>
         <Userrole>Senior SDET</Userrole>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>

## GRAPHQL
GraphQL Is mainly helping us to reduce the overfetching and underfetching of the data from the server .And GraphQL is also going to use the JSON query format to exchange the information, and it is always going to use POST requests to get the information. 


POST /graphql HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
   "query": "{ user(id: \12345\) { name, email } }"
}

Response:
{
   "data": {
      "user": {
         "name": "John Doe",
         "email": "johndoe@example.com"
      }
   }
}


## What is API Testing ?
API testing is a type of testing technique that involves the testing of APIs directly to validate core business logic without using the application UI. 

## Benefits of API testing ?
1. Faster test execution compared to UI 
2. Early issue detection 
3. Broder test coverage compared to UI. 
4. Completely independent from the UI changes 
5. API testing is automation-friendly. 

Only API testing is enough without doing any application UI validations to release the application. ??-NO

## API testing for RESTful services 

## Request : The request is all about the input data that we are going to share with the server to complete a specific task through an API. 

## Response : Response is all about the output received from the server every time we are going to send the API request. 

## What all the details can we expect in the requirement document from the developer to begin the API testing ? (While sending the API request) 

1. Purpose of the API request or functionality of the API 

In our application, on which screen or in which feature are we going to use this API request? If required, we can ask for even more details, like the particular screen, under which field this API request is integrated, or after clicking on which button or hyperlink this API request will be triggered. 

2. What type of request is it, or what request method type? 

- GET, POST, PUT, PATCH, DELETE 

3. Request URL 

A request URL mainly has two important parts:
   1. Base URL : https://api.amazon.com
   2. Endpoint : /mobiles/iphone?model=17ProMax&&size=512GB

/{category}/{product}?model=17ProMax&&size=512GB

Within this endpoint, we are mainly going to have two important parameters. 
   1. Path parameters  {Path parameters refer to different categories of information that we are maintaining within the server. }
   2. Query parameters  {Query parameters are all about the parameters that we are going to use to filter the data received from the server. }

4. Request body or payload 

- The data that we are going to share with our server through an API request 

https://api.amazon.com/electronics/alexa-devices/create

{
   "device": "Amazon Alexa Echo 3",
   "Price" : 6999,
   "color" : "blue"
}

5. Request headers & Authorization details 

Request headers are all about the additional metadata that we are going to share along with the API request. 

Authentication : Authentication will verify whether you are a valid user or not. 
Authorization : What kind of permissions do you have to access the information from the server

- Common API security mechanisms to authenticate the users 

=> No Auth => No authentication. The API endpoint doesn't need any credentials. It's an open API. 

=> Basic auth => Basic authorization. That means data can be accessed from the server through an API request by providing a username and password. 

=> API Key => We can access information through an API request by providing a unique key and value. (Ex: X-API-KEY :782436FGHJFJ69698GJH)

=> Bearer token => We can access the information through a unique API token that includes specific roles, permissions, and an expiry date as well. 

(Ex: Authorization : Bearer 9386598694kghfjldbndf5496y54knb)

=> OAuth => Open authorization. 

Open Authorization is a kind of framework that is going to allow a user to access the information from the server by providing limited access to the server temporarily. 


## What are all the details we can expect in the requirement document from the developer to validate the API response? 

1. Response code or status code and status message 

Response code is a unique number generated by the server every time you are going to send an API request. Based on this status code, we can automatically understand the status of our request. 


2XX => Symbol of success (200-OK , 201 -Created , 204- No Content)
4XX => Client side error (401-Unauthorized , 400-Bad request , 404- Not found , 422-Unprocessable entity )
5XX => Server-side error. (500 - Internal server error , 502- Bad gateway , 503 - Service unavailable , 504 - Gateway timeout  )

1XX => Informational codes (100-Processing)
3XX => Redirectional codes (Temporary redirection, permanent redirection ) 

2. Response body 

The response body is all about the output response or the result received from the server. 


Request : Get https://api.amazon.com/mobiles/iphone?model=17ProMax&&size=512GB


Response: 

Success Response :

{
  "status": "success",
  "message": "Products fetched successfully",
  "data": [
    {
      "id": "iphone-17-ProMax-512Gb",
      "name": "iPhone 17-Promax",
      "price": 149999,
      "storage": "512GB",
      "currency": "INR"
    },
    {
      "id": "iphone-17-512GB",
      "name": "iPhone 17",
      "price": 124999,
      "storage": "512GB",
      "currency": "INR"
    }
  ]
}

Sample error response: 

If the query parameters are invalid, you could return:

{
  "success": false,
  "statusCode": 400,
  "message": "Invalid request parameters",
  "errors": [
    {
      "field": "price",
      "code": "INVALID_FORMAT",
      "message": "price must be a valid maximum price"
    }
  ]
}


3. Response schema 

Schema is all about the format or nature of response data that we can expect from the server. 


{
  "status": "string",
  "message": "string",
  "data": [
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "storage": "string",
      "currency": "string"
    }
  ]
}

4. Response headers 

Response headers are all about the additional metadata sent by the server along with the actual response. 

"Session-id" : "754256998gfkjdgskjd3485"

5. Response time 

What is the maximum time your server can take to respond back with whatever information you are looking for? 

Ex: Maximum response time should be 2 seconds for each and every request up to 10,000 concurrent users. 

6. Error handling 

For each and every invalid request sent by the user, what kind of data or error message can we expect within the response? 

