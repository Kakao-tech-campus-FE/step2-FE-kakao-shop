import puppeteer from "puppeteer";
import cookie from "react-cookies";


describe('login-test', () => {
    let browser;
    let page;

    const email = 'hi@naver.com';
    const password = '1q2w3e4r5t!';

    beforeAll(async () => {
        await cookie.remove('access_token', {path: '/'});
        await cookie.remove('user_id', {path: '/'});
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000');
        await page.waitForNavigation();
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        })
    });

    it('go to login page', async () => {
        const loginButton = await page.$('#header-login-btn');
        await loginButton.click();
        await page.waitForNavigation();
        expect(page.url()).toBe('http://localhost:3000/login');
    });

    it('login', async () => {
        const emailInput = await page.$('#login-id');
        await emailInput.type(email);
        const passwordInput = await page.$('#login-password');
        await passwordInput.type(password);
        const loginButton = await page.$('#login-btn');
        await loginButton.click();
        await page.waitForNavigation();
        const cookieAccessToken = await cookie.load('access_token');
        const cookieUserId = await cookie.load('user_id');
        console.log(cookieAccessToken);
        console.log(cookieUserId);
        expect(cookieAccessToken).not.toBe(undefined || null || "");
        expect(cookieUserId).toBe(email);
    });

    it('check header user id', async () => {
        const userId = await page.$eval('#header-user-id', el => el?.innerText);
        expect(userId).toContain(email);
    });

    afterAll(() => browser.close());
})