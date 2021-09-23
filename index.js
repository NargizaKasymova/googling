const playwright = require('playwright');
    async function main() {
        const browser = await playwright.chromium.launch({
            headless: false // setting this to true will not run the UI
        });
        
        const page = await browser.newPage();
        await page.goto('https://google.com');
        await page.waitForTimeout(1000)
        await page.type('input', 'Paese Бишкек')
        await page.click('input[type="submit"]')
    }

    main()