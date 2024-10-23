class googleSearch {
    constructor(page) {
        
        this.page=page;
        this.SearchBox="[title=Search]";
    }

    async BrowserLaunch(url){
       
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
      
    }

    async SearchIntheGoogle(SearchContent)
    {
    
      await this.page.fill(this.SearchBox,SearchContent);
      await this.page.press(this.SearchBox,'Enter');

    }

}

module.exports={googleSearch};