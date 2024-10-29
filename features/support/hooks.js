const {POMmanager}=require('../../POM-Manager/POMmanager');
const playwright= require('@playwright/test');
const { chromium, firefox, webkit } = require('playwright');
const reporter = require('multiple-cucumber-html-reporter');
const {After, Before, Status,AfterStep, BeforeStep,AfterAll }= require('@cucumber/cucumber');
const { type } = require('os');
const path = require('path');
const fs = require('fs');

// Function to generate date and timestamp
function getDateTime() {
   const now = new Date();
   const date = now.toISOString().split('T')[0]; // YYYY-MM-DD
   const time = now.toTimeString().split(' ')[0].replace(/:/g, '-'); // HH-MM-SS
   return `${date}_${time}`;
 }

Before(async function ({pickle}) {
   const browserType = process.env.BROWSER || 'chromium'; // Default to Chromium if no browser is specified
   this.browser = await { chromium, firefox, webkit }[browserType].launch({
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

    const dateTime = getDateTime();
    await this.context.tracing.stop({ path: `./test-results/traces/${pickle.name}_${dateTime}.zip`, type:"zip" });
    await this.context.close();
    await this.browser.close();

  
  // Access the video file path from the page object
  const videoPath = await this.page.video().path();
  const newVideoPath = path.join('./test-results/videos/', `${pickle.name}_${dateTime}.mp4`);

 // Rename the video file
 fs.rename(videoPath, newVideoPath, (err) => {
   if (err) throw err;
   console.log('Video file renamed successfully!');
 });
    
    console.log("Here the browser is closed succesfully")
    
  })

  AfterStep( async function ({result,pickle}) {
   const dateTime = getDateTime();
    if (result.status === Status.FAILED) 
     {
       const img= await this.page.screenshot({path: `./test-results/screenshots/${pickle.name}_${dateTime}.png`, type:"png"}); // we are getting the screenshot here
       await this.attach(img,"image/png");
     }
    });