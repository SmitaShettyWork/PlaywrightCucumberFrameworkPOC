const { Given,When, Then } = require('@cucumber/cucumber')
const {POMmanager}=require('../../POM-Manager/POMmanager');
const{test, expect} = require('@playwright/test')
const playwright= require('@playwright/test');

Given('a {string} to launch the google website', {timeout: 100*1000},async function (url) {
     

   
    const searchpageName="Playwright: Fast and reliable";
     this.pomManager= new POMmanager(this.page,searchpageName);
    this.GoogleSearch=this.pomManager.getGoogleSearchPage();
    this.navigateToPages=this.pomManager.getNavigateToPages();

    await this.GoogleSearch.BrowserLaunch(url);
  
  });

  When('searched for {string} keyword in the google search', async function (SearchContent) {
    
     await this.GoogleSearch.SearchIntheGoogle(SearchContent);

  });

  Then('verify the searchresult page with the title {string}', async function (string) {
            
           const Title=await this.page.title();
           await expect(Title).toMatch(string)
          
  });

  Given('a user searched the playwright in google', async function () {
   const SearchPageTitle=await this.page.title();
   console.log(SearchPageTitle);

 });

 When('Click on the required Playwright link', async function () {
  
   //this.navigateToPages= this.pomManager.getNavigateToPages();
   await this.navigateToPages.ClickOntheRequiredSearchResult();
  

 });

 Then('verify if we are landed in the playwright homepage with title {string}',async function (ExpectedTitle) {
   const HomePageTitle=await this.page.title();
   await expect(HomePageTitle).toMatch(ExpectedTitle);
   
 });

 When('in the homepage, search the doc with {string}', async function (string) {
    await this.navigateToPages.searchThedocForLocatorInfo(string);
 });