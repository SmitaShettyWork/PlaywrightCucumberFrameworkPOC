class NavigateToPages{
    constructor(page,searchpageName)
    {
      this.page= page;
      this.searchResult= page.getByRole('link', { name: searchpageName });
      this.getStartedButton= page.locator('.getStarted_Sjon');  
      this.InternalSearch=page.locator('.DocSearch-Button-Keys');
      this.SearchInputbox=page.locator('.DocSearch-Input');

    }

    async ClickOntheRequiredSearchResult()
    {
        await this.searchResult.click();
        await this.getStartedButton.click();

    }

    async searchThedocForLocatorInfo(search){
        await this.InternalSearch.click();
        await this.SearchInputbox.type(search);

    }
}

module.exports={NavigateToPages};