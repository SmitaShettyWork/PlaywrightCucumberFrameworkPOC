Feature: Launch browser and open playwright.dev website

Background: 
   Given a "https://www.google.com/" to launch the google website
   When searched for "playwright" keyword in the google search
Scenario: Launch the browser and search for playwright
   Then verify the searchresult page with the title "playwright - Google Search"

Scenario Outline: Click on the playwright link and search in the doc
Given a user searched the playwright in google
When Click on the required Playwright link
Then verify if we are landed in the playwright homepage with title "Installation | Playwright"
When in the homepage, search the doc with "<searchcontent>"

Examples:
|searchcontent|
|locator|
|Reporter|