import { chromium, test } from '@playwright/test';

test('launch chrome browser', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://login.salesforce.com/');

    await page.waitForTimeout(5000);
    console.log(page.url());

    await page.fill('#username', 'shanmugakesavan-rvhr@force.com');
    await page.fill('#password', 'citiB@nk12');
    await page.click('#Login');

    await page.waitForTimeout(10000);
    console.log(page.url());
    console.log(page.title());

    page.close();
})