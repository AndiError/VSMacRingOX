import {expect, test} from '@playwright/test';

test('basic test', async ({ page }) => {
    test.setTimeout(100000);
     // Add your tests here
        // Expect a title "to contain" a substring.
    await page.goto('https://my.dev.ringrx.com/v2');
    await expect(page).toHaveTitle(/RingRx/);
   
});

test('Login.Put Incorrect data into login field', async ({page}) => {
    test.setTimeout(100000);
        //await page.pause();
    await page.goto('https://my.dev.ringrx.com/v2');
    await page.fill('[placeholder="email@email.com"]', 'test');
    await page.fill('[type="password"]', 'test');
    await page.click('button[type="submit"]');
    await page.getByText('Login failed. Invalid "');

});

test('Login.Put correct data', async ({ page }) => {

    await page.goto('https://my.dev.ringrx.com/v2');
    test.setTimeout(100000);
    // await page.pause();

    await page.fill('[placeholder="email@email.com"]', 'amandryk.qualitygeek@gmail.com');
    await page.fill('[type="password"]', 'Geek2023!!!');
    await page.click('button[type="submit"]');  
    await page.getByRole('heading', { name: 'Stay Up to Date' }).click();

}); 

test ('Login.Logout', async ({ page }) => {
    test.setTimeout(100000);
    await page.goto('https://my.dev.ringrx.com/v2');
        //await page.pause();
    await page.locator('[placeholder="email@email.com"]').fill('amandryk.qualitygeek@gmail.com');
    await page.locator('[id="ember195"]').fill('Geek2023!!!');
        // uncheck checkbox "remember me"
    await page.locator('role=checkbox').click();
    await page.locator('[type="submit"]').click();
        // Check that Login is successful - using xpath locator
    await page.locator('//*[@id="page"]/header/div/div/div[5]/div').click();
        // click on Logout button
    await page.getByRole('link', { name: 'Logout' }).click();
        // check that we are on login page and the fields are empty
    await page.locator('role=checkbox').click();
    await page.locator('[type="submit"]').click();
    await page.getByText('Login failed. Invalid "');
    
});
    
test ('Login.Forgot Password', async ({ page }) => {
    test.setTimeout(100000);

    await page.goto('https://my.dev.ringrx.com/v2');
        //await page.pause();
    await page.locator('[id="ember199"]').click();
    await page.getByPlaceholder('Enter Login').click();
    await page.getByPlaceholder('Enter Login').fill('amandryk.qualitygeek@gmail.com');
    await page.getByRole('button', { name: 'Send me reset password' }).click();


});