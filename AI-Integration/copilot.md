# What is Copilot, and what is Coding Assistant? 

Copilot is a AI realted plugin we can set up within the IDE. So that now this plugin can read the complete project and can understand the complete context of your project. Whenever you are going to ask any question or share any problem statement, it is going to respond back immediately according to your project needs instead of giving you generic suggestions. Moreover, it is going to completely focus on coding-related stuff instead of deviating to different things. 

Coding assistant : Coding assistant is all about the IDE, which is actually integrated with AI models internally by default. That means we don't need to add any more plugins to access the AI models or to solve day-to-day coding problems. Instead, whenever you guys are going to install the IDE, along with the IDE, you are going to get all the AI model integrations built in. It will support you all the way to solve day-to-day coding-related problems, and it can produce the solutions. It can write the code, and it can provide you with suggestions, etc. 

# Features of Copilot ? Can we effectively use Copilot? 

# In-line suggestions (ghost text and next edit suggestions )
Every time you are going to write a comment, it is going to generate the code immediately within the same window in hidden mode. It is also going to provide you with suggestions to complete the next line of code based on the current context. 

# Co-pilot chat and inline chat 

# Codebase semantic index 

# Session sync feature 

# Multi-model support 

# It will support custom agent creation to complete repetitive tasks without sending multiple prompts. 

# We can directly integrate an MCP server to connect with external tools. 

Create a function to add two values. 

+

While providing the response to the above prompt, follow all these mandatory rules. 

You must provide the response in the form of a coding response. 

You must provide the response based on the existing code already written within the current project folder. Please refer to the current project folder and all the programs before you generate the response. 

Use minimal tokens. Don't hallucinate anything. Don't cross more than what the user is expecting. 

+ 

Next time, whenever I want to generate the test cases, I will simply provide the user story number, like ABC-123. And I'm not going to give you any more prompts except this user story number. 

Immediately when I am going to provide you with a user story number, you need to do the below things. 

First, you need to connect with my Jira account by using one of the APIs. Those API details I am going to maintain in the .env file for you. 

Then search for this user story number via API and copy the complete user story-related content. 

Try to understand what this user story is, what exactly the enhancements are that we are trying to implement, and what kind of validations need to be performed to verify this new feature that we are trying to implement. 

Then try to understand the format of test cases that need to be created if I want to directly upload the same in Jira test plans. In the same format, you need to write all possible positive, negative, and edge case scenarios with the detailed test steps. 

And every time you need to generate the CSV file, first I will review, then I'll upload it by myself. You should not upload any of the test cases by yourself, strictly. 



=> chatgpt