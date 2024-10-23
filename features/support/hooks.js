const {POMmanager}=require('../../POM-Manager/POMmanager');
const playwright= require('@playwright/test');
const {After, Before, Status,AfterStep, BeforeStep }= require('@cucumber/cucumber');


Before(async function () {
     this.browser= await playwright.chromium.launch({
        headless:false
    });
    const context = await this.browser.newContext();
     this.page = await context.newPage();
  });

  After(async function () {

   // await this.page.close();
    await this.browser.close();
    console.log("Here the browser is closed succesfully")
    
  })

  BeforeStep({tags: ""}, function () {
    // This hook will be executed before all steps in a scenario with tag @regression
  });
  
  AfterStep( async function ({result}) {
  
    if (result.status === Status.FAILED) 
     {
        await this.page.screenshot({path: 'FailedTestScreenshot.png'});
     }

  });