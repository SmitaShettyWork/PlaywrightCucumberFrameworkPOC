import { test, expect } from '@playwright/test';

test('First test case using fixtures', async({browser}) =>
    {

    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://www.google.com/");

    } );

test('second test using page fixturte', async({page})=>
{
await page.goto("https://www.google.com/");
const title= await page.title();
console.log("The title of the opened browser is",title);
await expect(page).toHaveTitle("Google");


});

test('Use of locators in playwright',async({page})=>
{
await page.goto("https://www.google.com/");
await page.locator("[title=Search]").fill("Playwright");
await page.press('[title=Search]','Enter');
console.log(await page.title());
await page.waitForLoadState('networkidle');
const headervalue=await page.locator("[class=YmvwI]").allTextContents(); 
//console.log(headervalue);

for(let i=0;i<headervalue.length;i++)
{
    console.log(headervalue[i]);

}
});

test.only('Handling the radio button and dropdowns', async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.locator("[title=Search]").fill("Playwright");
    await page.press('[title=Search]','Enter');
    await page.waitForLoadState('networkidle');
    
    await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
    await page.waitForLoadState('networkidle');
     await page.getByText('Node.js').click();;
    
    await page.pause();

    
 




   

});

