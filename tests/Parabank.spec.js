import {expect,test} from '@playwright/test'

import { RegisterPage } from '../Pages/RegisterPage'

test("Testing ParaBAnk", {tag:'@Super'},async ({page})=>{

    const registerpage=new RegisterPage(page)

    await registerpage.fillDetails('shivani','kumbhar','sangli','Pune','Maharashtra','411057','9766043682','123445','sk13971','Passcode@123','Passcode@123')
    await expect(page.locator("//h1[@class='title']")).toHaveText("Welcome")






})


test(" Tag Testing ParaBAnk", {tag:'@Low'},async ({page})=>{


    console.log("working tags")

})