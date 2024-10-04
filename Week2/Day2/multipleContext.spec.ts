import { chromium, firefox, test } from '@playwright/test'

test('multiple context', async () => {

    //MicroEdge browser
    const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

    const browser = await chromium.launch({
        executablePath: edgePath,
        headless: false
    })

    const context = await browser.newContext();
    const edgePage = await context.newPage();
    await edgePage.goto('https://www.redbus.in');

    await edgePage.waitForTimeout(10000);
    console.log(edgePage.url());
    console.log(edgePage.title());


    // Firefox browser
    const firefoxbrowser = await firefox.launch({
        headless: false,
        slowMo: 100
    })

    const fContext = await firefoxbrowser.newContext();
    const fpage = await fContext.newPage();

    fpage.goto('https://www.flipkart.com');

    await fpage.waitForTimeout(10000);
    console.log(fpage.url());
    console.log(fpage.title());
})