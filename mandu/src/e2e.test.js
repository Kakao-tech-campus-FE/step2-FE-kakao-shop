import puppeteer from "puppeteer";


describe('login-test', () => {
    let browser;
    let page;

    const email = 'hi@naver.com';
    const asciiEmail = 'hi%40naver.com';
    const password = '1q2w3e4r5t!';

    beforeAll(async () => {

        browser = await puppeteer.launch();
        page = await browser.newPage();
        const cookies = await page.cookies()
        console.log(cookies);
        await page.goto('http://localhost:3000');
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
    });

    it('go to login page', async () => {
        const loginButton = await page.waitForSelector('#header-login-btn');
        await loginButton.click();
        expect(page.url()).toBe('http://localhost:3000/login');
    });

    it('login', async () => {
        const emailInput = await page.waitForSelector('#login-id');
        await emailInput.type(email);
        const passwordInput = await page.waitForSelector('#login-password');
        await passwordInput.type(password);
        const loginButton = await page.waitForSelector('#login-btn');
        await loginButton.click();
        await page.waitForNavigation();
        const cookies = await page.cookies()
        console.log(cookies);
        expect(cookies.find(e => e.name === 'access_token')["value"]).not.toBe(undefined || null || "");
        expect(cookies.find(e => e.name === 'user_id')["value"]).toBe(asciiEmail);
    });

    it('check header user id', async () => {
        const userId = await page.$eval('#header-user-id', el => el?.innerText);
        expect(userId).toContain(email);
    });

    afterAll(() => browser.close());
})