const {googleSearch}=require('../POM-pages/googleSearch');
const {NavigateToPages}=require('../POM-pages/NavigateToPages');

class POMmanager {
    
    constructor(page,searchpageName) 
    {
        this.page=page;
        this.googleSearch=new googleSearch(this.page);
        this.NavigateToPages=new NavigateToPages(this.page,searchpageName);
    }

     getGoogleSearchPage()
     {
        return this.googleSearch;
     }

     getNavigateToPages()
     {
       return this.NavigateToPages;
     }
}

module.exports={POMmanager};