# Prompt engineering frameworks (step by step)

Problem Statement : Read the below user story and write all the possible positive, negative, and edge cases for the given user story. 


Userstory: Description: As an existing user, I want to log in to my Creatio CRM account using my business email and password through a secure and well-designed form.

Acceptance Criteria:
	The form should have a header with the title "LOG IN TO YOUR ACCOUNT".
	Fields required for login include " BUSINESS EMAIL" , " PASSWORD" textboxes along with label on top of each textbox and ‘LOG IN’ button.
	Password textbox should have ‘eye’ icon to display the password entered in textbox
	Provide "Forgot password" link to reset the password on top of Password textbox
	Below ‘LOG IN’ button add label ‘or log in using’ to login with other options
	LinkedIn, Google, and Facebook logo’s should be added as icons with hyperlink below ‘LOG IN’ button along with labels.
	Below social media icons add label ‘Don’t have an account?’ to create new account
	Add ‘SIGN UP’ link to create new account below the label ‘Don’t have an account?’
	Add ‘cookie settings’ icon without label to change consent at the bottom left corner to view, withdraw, change cookie consent settings.
	Add ‘creatio chatbot’ icon without label to help customers FAQ’s at the bottom right corner.


With RACE Framework
===================

Role :  Currently, I am working as a Senior Quality Analyst with more than 14 years of experience in the software testing area. 

Action : Read the below user story and write all the possible positive, negative, and edge test cases for the given user story. 

Context : The application I am currently working on is the Creasio CRM application, which is related to the CRM domain. This application is going to provide CRM solutions, something like marketing, sales, collecting feedback from the customers, maintaining customer data, and all the CRM-related stuff we can have. These companies usually offer custom CRM solutions based on the client's needs as a service.
Currently, we are designing a login page for the same application. Now I want to validate that particular application as part of my QA activities.

Examples : I want all the test cases in CSV format to upload all the test cases with detailed test steps directly into Azure TFS. Please try to follow the format below, which I have mentioned as sample test cases. Try to write all the possible test cases in the same format so that I can directly upload the same in Azure TFS. 

SampleTestCases.csv
===================
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
159,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
160,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
170,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo  should be displayed within the cookies popup.,,,
,,,5,Verify social media platform logos displayed in the cookies pop-up,"Bookies pop-up also should have the below social media logos. 

1. Instagram
2. X / twitter
3. Facebook",,,
171,Test Case,Verify selection buttons displayed within the Cookies pop.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify selection buttons displayed within the Cookies pop.,"Cookies popup should be displayed with three different selection buttons mentioned below. 
1.Allow All
2.Allow Selection
3.Deny",,,



Userstory: Description: As an existing user, I want to log in to my Creatio CRM account using my business email and password through a secure and well-designed form.

Acceptance Criteria:
	The form should have a header with the title "LOG IN TO YOUR ACCOUNT".
	Fields required for login include " BUSINESS EMAIL" , " PASSWORD" textboxes along with label on top of each textbox and ‘LOG IN’ button.
	Password textbox should have ‘eye’ icon to display the password entered in textbox
	Provide "Forgot password" link to reset the password on top of Password textbox
	Below ‘LOG IN’ button add label ‘or log in using’ to login with other options
	LinkedIn, Google, and Facebook logo’s should be added as icons with hyperlink below ‘LOG IN’ button along with labels.
	Below social media icons add label ‘Don’t have an account?’ to create new account
	Add ‘SIGN UP’ link to create new account below the label ‘Don’t have an account?’
	Add ‘cookie settings’ icon without label to change consent at the bottom left corner to view, withdraw, change cookie consent settings.
	Add ‘creatio chatbot’ icon without label to help customers FAQ’s at the bottom right corner.




With CLEAR Framework
===================

Role :  Currently, I am working as a Senior Quality Analyst with more than 14 years of experience in the software testing area. 

Action : Read the below user story and write all the possible positive, negative, and edge test cases for the given user story. 

Context : The application I am currently working on is the Creasio CRM application, which is related to the CRM domain. This application is going to provide CRM solutions, something like marketing, sales, collecting feedback from the customers, maintaining customer data, and all the CRM-related stuff we can have. These companies usually offer custom CRM solutions based on the client's needs as a service.
Currently, we are designing a login page for the same application. Now I want to validate that particular application as part of my QA activities.

Examples : I want all the test cases in CSV format to upload all the test cases with detailed test steps directly into Azure TFS. Please try to follow the format below, which I have mentioned as sample test cases. Try to write all the possible test cases in the same format so that I can directly upload the same in Azure TFS. 

Limitations: 
1. Don't write too many test cases. For the login page, I want a maximum of 10 to 15 test cases only. That should cover most of the validations. You can add more steps, but don't increase the test cases. 
2. Every test case must begin with:
    * Launch the browser.
    * Enter the URL and launch the application.
    * Verify the cookies pop-up is launched.
    * Close the cookies pop-up.
    * The remaining test steps should be added according to the scenario.
3. Don't hallucinate anything. Try to generate the test cases based on the given user story and acceptance criteria only. Don't add anything generic. 

SampleTestCases.csv
===================
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
159,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
160,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
170,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo  should be displayed within the cookies popup.,,,
,,,5,Verify social media platform logos displayed in the cookies pop-up,"Bookies pop-up also should have the below social media logos. 

1. Instagram
2. X / twitter
3. Facebook",,,
171,Test Case,Verify selection buttons displayed within the Cookies pop.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify selection buttons displayed within the Cookies pop.,"Cookies popup should be displayed with three different selection buttons mentioned below. 
1.Allow All
2.Allow Selection
3.Deny",,,



Userstory: Description: As an existing user, I want to log in to my Creatio CRM account using my business email and password through a secure and well-designed form.

Acceptance Criteria:
	The form should have a header with the title "LOG IN TO YOUR ACCOUNT".
	Fields required for login include " BUSINESS EMAIL" , " PASSWORD" textboxes along with label on top of each textbox and ‘LOG IN’ button.
	Password textbox should have ‘eye’ icon to display the password entered in textbox
	Provide "Forgot password" link to reset the password on top of Password textbox
	Below ‘LOG IN’ button add label ‘or log in using’ to login with other options
	LinkedIn, Google, and Facebook logo’s should be added as icons with hyperlink below ‘LOG IN’ button along with labels.
	Below social media icons add label ‘Don’t have an account?’ to create new account
	Add ‘SIGN UP’ link to create new account below the label ‘Don’t have an account?’
	Add ‘cookie settings’ icon without label to change consent at the bottom left corner to view, withdraw, change cookie consent settings.
	Add ‘creatio chatbot’ icon without label to help customers FAQ’s at the bottom right corner.