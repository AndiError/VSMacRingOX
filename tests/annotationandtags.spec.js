import { test, expect } from '@playwright/test';

test.skip('Skip the test', async ({ page }) => {

})

test('failled test', async ({ page }) => {
    test.fail();

})
test.fixme('fixme test', async ({ page }) => {

})
test('slow test', async ({ page }) => {
    test.slow();

})

//TAGS
test('Test wit tag @fast', async ({ page }) => {

    //    test.slow();WITH TAG

})