import {expect,test} from '@playwright/test'

import { RegisterPage } from '../Pages/RegisterPage'
import { NewAccount } from '../Pages/NewAccount'

const testdata= import {TestData} from '../TestData.json'  

test("Testing ParaBAnk Registration page", {tag:'@Super'},async ({page})=>{

    const registerpage=new RegisterPage(page)

    await registerpage.fillDetails('shivani','kumbhar','sangli','Pune','Maharashtra','411057','9766043682','123445','sk139712','Passcode@123','Passcode@123')
    //await expect(page.locator("//h1[@class='title']")).toHaveText("Welcome")






})


test(" Testing Open new account page", {tag:'@Low'},async ({page})=>{


    const newaccount=new NewAccount(page)

    await newaccount.OpenNewAccount()

})