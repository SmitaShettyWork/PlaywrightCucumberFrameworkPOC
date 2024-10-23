import{test,expect} from '@playwright/test'
const {POMmanager}=require('../POM-Manager/POMmanager');
const dataset=JSON.parse(JSON.stringify(require('../POM-TestUtils/Testdata.json')))
// this is to covert out json written file dat into string and then concert it into js object



test('Launch the browser and search for playwright',async({page})=>
    {
        
           const pomManager= new POMmanager(page, dataset.searchpageName);
           const GoogleSearch=pomManager.getGoogleSearchPage();

           await GoogleSearch.BrowserLaunch(dataset.url);
           await GoogleSearch.SearchIntheGoogle(dataset.SearchContent);
           const Title=await page.title();
           await expect(Title).toMatch("Playwright - Google Search")
          

    });

for(const data of dataset)
 {
    // to run the multiple test data for the same test from JSON
    test.only(`Click on the playwright link and search in the doc for ${data.contentToSearch}`, async({page})=>
    {

    const pomManager= new POMmanager(page,data.searchpageName);

    const GoogleSearch=pomManager.getGoogleSearchPage();
    const navigateToPages=pomManager.getNavigateToPages();

         await GoogleSearch.BrowserLaunch(data.url);
         await GoogleSearch.SearchIntheGoogle(data.SearchContent);
         await navigateToPages.ClickOntheRequiredSearchResult();
         const HomePageTitle=await page.title();
         //await expect(HomePageTitle).toMatch("Playwright - Google Search");
         await navigateToPages.searchThedocForLocatorInfo(data.contentToSearch);

   });

 }



