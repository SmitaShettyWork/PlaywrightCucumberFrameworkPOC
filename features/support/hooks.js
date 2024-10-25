const {POMmanager}=require('../../POM-Manager/POMmanager');
const playwright= require('@playwright/test');
const reporter = require('cucumber-html-reporter');
const {After, Before, Status,AfterStep, BeforeStep,AfterAll }= require('@cucumber/cucumber');
const { type } = require('os');


Before(async function ({pickle}) {
   this.browser = await playwright.chromium.launch({
      headless: false
    });
  
    this.context = await this.browser.newContext({
      recordVideo: {
         dir: './test-results/videos/',
      }
    });
  
    this.page = await this.context.newPage();
    await this.context.tracing.start({ screenshots: true, snapshots: true });

    
  });

  After(async function ({pickle}) {

    await this.context.tracing.stop({ path: `./test-results/traces/${pickle.name}.zip`, type:"zip" });
    await this.context.close();
    await this.browser.close();
    console.log("Here the browser is closed succesfully")
    
  })

  AfterStep( async function ({result,pickle}) {
  
    if (result.status === Status.PASSED) 
     {
       const img= await this.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"}); // we are getting the screenshot here
       await this.attach(img,"image/png");
     }


   AfterAll(async function () {
      const options = {
        theme: 'bootstrap',
        jsonFile: './test-results/reports/cucumber_report.json',
        output: './test-results/reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      }
      reporter.generate(options);
});


});