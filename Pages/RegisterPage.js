export class RegisterPage{

  constructor(page){

    this.page=page
    this.RegisterLink=page.locator("//a[text()='Register']")
    this.FirstName=page.locator("//input[@id='customer.firstName']")
    this.LastName=page.locator("//input[@id='customer.lastName']")
this.address=page.locator("//input[@id='customer.address.street']")
this.City=page.locator("//input[@id='customer.address.city']")
this.State=page.locator("//input[@id='customer.address.state']")
this.ZipCode=page.locator("//input[@id='customer.address.zipCode']")
this.Phone=page.locator("//input[@id='customer.phoneNumber']")
this.SSN=page.locator("//input[@id='customer.ssn']")
this.Username=page.locator("//input[@id='customer.username']")
this.Password=page.locator("//input[@id='customer.password']")
this.ConfirmPass=page.locator("//input[@id='repeatedPassword']")
this.RegisterBtn=page.locator("//input[@value='Register']")



  }

  async fillDetails(fname,lname,add,city,state,zip,phone,ssn,user,pass,repeat){
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await this.RegisterLink.click()
    await this.FirstName.fill(fname)
    await this.LastName.fill(lname)
    await this.address.fill(add)
    await this.City.fill(city)
    await this.State.fill(state)
    await this.ZipCode.fill(zip)
    await this.Phone.fill(phone)
    await this.SSN.fill(ssn)
    await this.Username.fill(user)
    await this.Password.fill(pass)
    await this.ConfirmPass.fill(repeat)
    await this.RegisterBtn.click()







  }











}