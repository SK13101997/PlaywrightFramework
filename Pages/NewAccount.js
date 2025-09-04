export class NewAccount{

    constructor(page){
     this.page=page

     this.OpenNewLink=page.locator("//a[text()='Open New Account']")
     this.AccountDropDown=page.locator('#type')
     this.FromAccountid=page.locator('#fromAccountId')
     this.OpenAccountBtn=page.locator("//input[@value='Open New Account']")

    }

     async OpenNewAccount(){
        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm")

        await this.OpenNewLink.click()
        await this.AccountDropDown.selectOption('1')
        await this.FromAccountid.selectOption('13455')
        await this.OpenAccountBtn.click()

     }





}