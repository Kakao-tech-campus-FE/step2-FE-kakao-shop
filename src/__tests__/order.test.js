const puppeteer = require("puppeteer");
const { doLogin, addToCart, removeAll } = require("./modules");
const base = "http://192.168.0.7:3000";
// const base = process.env.REACT_APP_BASE_URL;

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

const totalPrice = async () => {
  await page.waitForTimeout(500);
  const divs = '//div[contains(text(), "주문 금액")]/following-sibling::div[1]';
  const [total] = await page.$x(divs);
  const price = await total.evaluate((e) => e.textContent);
  return price;
};

describe("Select Product Test", () => {
  it("장바구니", async () => {
    await doLogin(page);
    await page.waitForNavigation();
    await removeAll(page);

    await addToCart(page, 1);
    await addToCart(page, 2);

    await page.goto(`${base}/carts`);
    const price = await totalPrice();
    expect(price).toBe("45,300 원");
  }, 10000);

  it("장바구니에 금액 제대로 나오는지", async () => {
    const btnPath = '//button[@type="submit"]';
    const [button] = await page.$x(btnPath);
    await Promise.all([button.click(), page.waitForNavigation()]);

    await page.waitForSelector("xpath/" + btnPath);
    const [payBtn] = await page.$x(btnPath);
    const price = await payBtn.evaluate((e) => e.textContent);
    expect(price).toMatch(/45,300/);
  }, 10000);

  it("장바구니 제출 잘클릭되는지", async () => {
    await page.click("#kakaoPay");
    await page.click("#all");
    const btnPath = '//button[@type="submit"]';
    const [payBtn] = await page.$x(btnPath);

    await Promise.all([payBtn.click(), page.waitForNavigation()]);

    const pricePath = "//section[3]/div[2]/div";
    await page.waitForSelector("xpath/" + pricePath);
    const [priceBox] = await page.$x(pricePath);
    const price = await priceBox.evaluate((e) => e.textContent);
    expect(price).toMatch(/45,300/);
  }, 10000);
});
