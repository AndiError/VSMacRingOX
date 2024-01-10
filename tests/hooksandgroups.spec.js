import { test, expect } from '@playwright/test';

test.describe('Login Group', () => {
    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com'); // <-- navigate to the page
        await page.locator('[data-test="username"]').fill('standard_user'); // <-- fill in the username
        await page.locator('[data-test="password"]').fill('secret_sauce'); //   <-- fill in the password
        await page.locator('[data-test="login-button"]').click(); // <-- click on the login button  
        await page.waitForURL('https://www.saucedemo.com/inventory.html'); // <-- wait for the URL to change

    });
    test.afterEach(async ({ page }) => {
        await page.close(); // <-- close the page
    });

    test('homepage', async ({ page }) => {
        await page.goto('https://www.saucedemo.com'); // <-- navigate to the page
        await page.locator('[data-test="username"]').fill('standard_user'); // <-- fill in the username
        await page.locator('[data-test="password"]').fill('secret_sauce'); //   <-- fill in the password
        await page.locator('[data-test="login-button"]').click(); // <-- click on the login button  

        await page.waitForURL('https://www.saucedemo.com/inventory.html'); // <-- wait for the URL to change
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('#item_1_title_link').click();
        await page.waitForURL('https://www.saucedemo.com/inventory-item.html?id=1');
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.close(); // <-- close the page
        //await page.pause();// <-- pause the test

    })

    test('Logout', async ({ page }) => {

        await page.goto('https://www.saucedemo.com'); // <-- navigate to the page
        await page.locator('[data-test="username"]').fill('standard_user'); // <-- fill in the username
        await page.locator('[data-test="password"]').fill('secret_sauce'); //   <-- fill in the password
        await page.locator('[data-test="login-button"]').click(); // <-- click on the login button 

        await page.waitForURL('https://www.saucedemo.com/inventory.html'); // <-- wait for the URL to change
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
        await page.waitForURL('https://www.saucedemo.com');

        await page.close(); // <-- close the page

        //await page.pause();// <-- pause the test

    })
});