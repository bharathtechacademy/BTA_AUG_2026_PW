# Source code management (step by step)

## What is source code management? 
Source code management is all about maintaining the source code in such a way that it should give us:
- better control over each and every change that we are adding
- better security to protect our changes
- faster delivery to share our changes with all the team members
- better availability to quickly access this code wherever we want and to quickly run these changes whenever we want

## What are all the different tools available to maintain the source code? 

- Git and GitHub 
- Bitbucket 
- Azure cloud repositories 

## What is Git, and what is GitHub? What's the difference? 

- Git : Git is software or a tool that is going to help us to update each and every change that we are going to add from our local computer to the cloud repository. 
Ex: Git Bash , GitHub Desktop , Tortois git

- Github : GitHub is a cloud repository which is going to provide us some storage space to maintain the source code. It is also going to provide multiple templates and configurations to track each and every change made by the user. It is also going to allow us to maintain multiple versions of the code. 

## Code life cycle in Git (Different stages in the Git lifecycle, starting from a local computer to a cloud repository )

There are mainly five important stages we are going to have in the Git lifecycle, especially when we are trying to push the code from a local computer to a cloud repository. 

1. Creating Local Working Directory 
Local working directory is all about the local folder created on our computer to maintain the source code and day-to-day changes. 

Command : `cd C:\Training\PlaywrightTrainings\Aug_2026\playwright-tdd-framework`

2. Initialize the local working directory. 
Installing the Git tool and supporting libraries within the project folder or local working directory to monitor day-to-day changes made by the user 

Command : `git init`

3. Adding working changes into the staging area. 
Staging area: meaning a temporary workspace created by the Git tool within the local computer to maintain working changes among all the files updated by the user. This staging area is going to help us to separate the working piece of code from all the files that we have edited previously. 

Command :  
`git status` (All the files modified in red and green color- Red represents the files not moved into the staging area. Green represents the files moved into the staging area. )

`git add <file_path>`  (Whenever we want to add a specific file to the staging area )

`git add .`  (Whenever we want to add all the files which we modified till now into the staging area )

4. Committing the latest changes. 
Once all the files are added into the staging area, we are going to bundle all the files together as a single package. Then we are going to add comments on top of the changes which we are trying to push into the cloud repository. 

Command : `git commit -m "message"`

5. Push the changes into a specific branch in the cloud repository. 
Once all the work is done, we are going to update the changes from the local computer to the cloud repository. Here, specific branch means that, within the cloud repository, we are going to maintain multiple copies of the code. Out of those copies, which copy do you want to update with these changes

## Branching Strategy




# CI/CD (continuous integration and continuous deployment. )

CI (Continuous Integration)
As a developer, we are going to add so many changes on a daily basis within our local computer workspace. At a later point in time, once the code is working fine on our local computer, we are going to push the changes into cloud repositories like GitHub, an Azure repository, Bitbucket, etc.

Now, this CI/CD pipeline is going to connect with our cloud repository, and it is going to continuously monitor each and every change that we are adding within the cloud repository. Whenever you are going to schedule the CI/CD pipeline, by that time, it is going to run the test suite. By using whatever pipeline configurations we have created, it is going to copy the latest code from your cloud repository. 

CD (Continuous deployment )
It is going to set up the environment according to the configurations that you have added, and it is going to run all the test suites that we are going to specify within the agent machine. Finally, it will try to collect the test results and share them with all the stakeholders. 

## Different stages of a CI/CD pipeline 

1. Connect to the source code management tool. 
In the first stage, based on the cloud repository URL which we have configured within the CI/CD pipeline, it is automatically going to connect to the source code management tool. Then it is going to check out the latest changes into the agent machine. 

2. Validate and build the latest changes. 
It will try to validate the latest code copied from the source code management tool. Then it will try to build the code, meaning it will try to download all the necessary libraries mentioned in the framework. Then it is going to verify each and every file which we have created within the repository: whether there is any error or not, and whether each and every line of code is valid or not, as per the libraries which we downloaded.

If everything looks fine, then it is going to move on to the next stage. Otherwise, it is going to stop the execution and send a notification to all the users who are connected to this pipeline via the configuration file. 

3. Testing stage (Execute the latest changes and understand the failures. )
The CI/CD pipeline will perform unit testing for individual components of your code. Developers are going to use this stage for their unit testing, just to make sure all the code is in working condition before they are going to deploy the changes into a different environment. When it comes to the testing team, this is going to be our main stage, where we are going to run each and every test suite which you want to run, and we will understand the overall test execution results. 

4. Deployment stage 
In this deployment stage, mainly developers are going to deploy the code from one environment to another environment. For example, developers are currently maintaining all the changes in the dev environment. Now they are going to transfer the changes from the dev environment to the QA environment for regular QA checks. This stage is not applicable for automation. 

5. Monitoring and feedback stage 
This is the final stage, where the CI/CD pipeline is going to continuously monitor the test execution flow. It will try to collect all the test results from different folders, which we are going to configure within the CI/CD pipeline by using different components like artifact builder, etc. It is also going to help us share all those test results with target team members by sending email notifications. 


## How to trigger a CI/CD pipeline? 

CI/CD pipeline can be triggered in three different ways. 

Option 1 : Manual build (Manually, we are going to trigger the CI/CD pipeline whenever it's needed. )

Option 2 : Schedule job (We are going to trigger the CI/CD pipeline by scheduling the job at a specific time. )

Option 3 : Dependency build (The CI/CD pipeline will trigger our test suites automatically every time our developer is going to make some changes in their code. )