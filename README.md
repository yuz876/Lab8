# Lab8_Starter

Name: 


## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

        Answer: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

        Answer:

        No. Because unit test cannot test the interaction between multiple modules. Unit test "cannot test how these individual components interact with each other on an application/feature level."

        The "message" feature includes multiple users and modules/components.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

        Answer:
        
        Yes. Because "prevents the user from typing more than 80 characters" feature is a small feature which can be a feature unit. It can be encapsulated as an individual unit.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

        Answer:

        It will run the tests without a browser UI. We will not be able to see how Puppeteer drives our browser.

6. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   
        Answer:
   
```javascript
beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500');                
        await page.click("img");  
        await page.waitForTimeout(500);
});
```


