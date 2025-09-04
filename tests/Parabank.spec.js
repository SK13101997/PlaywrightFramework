import { test, expect } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage.js';
import { NewAccount } from '../Pages/NewAccount.js';
import testdata from '../TestData.json' assert { type: 'json' };

test("Testing ParaBAnk Registration page", {tag:'@Super'},async ({page})=>{

    const registerpage=new RegisterPage(page)

    await registerpage.fillDetails(testdata.Url,testdata.fname,testdata.lname,testdata.add,testdata.city,testdata.state,testdata.zip,testdata.phone,testdata.ssn,testdata.user,testdata.pass,testdata.repeat)
    //await expect(page.locator("//h1[@class='title']")).toHaveText("Welcome")






})


test(" Testing Open new account page", {tag:'@Low'},async ({page})=>{


    const newaccount=new NewAccount(page)

    await newaccount.OpenNewAccount()

})