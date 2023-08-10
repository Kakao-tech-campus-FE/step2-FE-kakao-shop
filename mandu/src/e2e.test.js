import puppeteer from "puppeteer";

let browser;
let page;

const email = 'hi@naver.com';
const asciiEmail = 'hi%40naver.com';
const password = '1q2w3e4r5t!';
const productId = 1;
const optionId = 1;
const productName = '기본에 슬라이딩 지퍼백 크리스마스/플라워에디션 에디션 외 주방용품 특가전';
const optionName = '01. 슬라이딩 지퍼백 크리스마스에디션 4종';


beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
    //delete all cookies before test
    const cookies = await page.cookies();
    console.log(cookies);
    await page.deleteCookie(...cookies);
});

afterAll(() => browser.close());


describe('login-test', () => {

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
        expect(cookies.find(e => e.name === 'access_token')?.["value"]).toBeDefined();
        expect(cookies.find(e => e.name === 'user_id')?.["value"]).toBe(asciiEmail);
    });

    it('check header has user id', async () => {
        const userId = await page.$eval('#header-user-id', el => el?.innerText);
        expect(userId).toContain(email);
    });

})

describe('cart-test', () => {
    it('select option', async () => {
        await page.goto(`http://localhost:3000/product/${productId}`);
        for (let i = 0; i < 2; i++) {
            const optionShowButton = await page.waitForSelector('#option-show-btn');
            await optionShowButton.click();
            const optionSelectButton = await page.waitForSelector(`#option-${optionId}`);
            await optionSelectButton.click();
        }
        const optionQuantity = await page.$eval(`#option-${optionId}-quantity`, el => el?.innerText);
        expect(optionQuantity).toBe('2');
    });

    it('add to cart', async () => {
        const addToCartButton = await page.waitForSelector('#add-cart-btn');
        await addToCartButton.click();
        await page.goto('http://localhost:3000/cart');
        const cartProductCard = await page.waitForSelector('.cart-product-card');
        const cartProductName = await cartProductCard.$eval('.product-name', el => el?.innerText);
        const cartProductOptionName = await cartProductCard.$eval('.option-name', el => el?.innerText);
        expect(cartProductName).toContain(productName);
        expect(cartProductOptionName).toContain(optionName);
    });

    it('go to payment page', async () => {
        const orderRouteButton = await page.waitForSelector('#payment-route-btn');
        await orderRouteButton.click();
        expect(page.url()).toBe('http://localhost:3000/payment');
    });

    it('pay', async () => {
        const payButton = await page.waitForSelector('#payment-btn');
        await payButton.click();
        expect(page.url()).toContain('http://localhost:3000/ordered');
    });

    it('check pay product', async () => {
        //ordered-product
        const orderedProductName = await page.$eval('.ordered-product', el => el?.innerText);
        expect(orderedProductName).toContain(productName);
    });


});

describe('logout-test', () => {

    it('logout', async () => {
        const logoutButton = await page.waitForSelector('#header-logout-btn');
        await logoutButton.click();
        const cookies = await page.cookies()
        console.log(cookies);
        expect(cookies.find(e => e.name === 'access_token')?.["value"]).toBeUndefined();
        expect(cookies.find(e => e.name === 'user_id')?.["value"]).toBeUndefined();
    })

    it('check header has no user id', async () => {
        const userIdHeader = await page.$('#header-user-id');
        expect(userIdHeader).toBeNull();
    });
});


