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