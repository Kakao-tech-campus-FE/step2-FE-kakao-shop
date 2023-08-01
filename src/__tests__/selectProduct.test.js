const puppeteer = require("puppeteer");

const base = "http://192.168.0.7:3000";
// const base = process.env.REACT_APP_BASE_URL;

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: "new" });
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

const selectNthProduct = async (n) => {
  let lastHeight = await page.evaluate("document.body.scrollHeight");
  while (true) {
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    await page.waitForTimeout(1000);
    let newHeight = await page.evaluate("document.body.scrollHeight");
    if (newHeight === lastHeight) {
      break;
    }
    lastHeight = newHeight;
  }
  const xpath = `//section/div/div[${n}]/a`;
  await page.waitForSelector("xpath/" + xpath);
  const [nth] = await page.$x(xpath);
  await nth.click();
};

describe("Select Product Test", () => {
  it("첫번째 상품 페이지로 이동", async () => {
    await selectNthProduct(1);
    const mainURL = await page.url();
    expect(mainURL).toBe(`${base}/products/1`);
  });

  it("15번째 상품 페이지로 이동", async () => {
    await selectNthProduct(15);
    const mainURL = await page.url();
    expect(mainURL).toBe(`${base}/products/15`);
  });

  it("에러 메세지 표시", async () => {
    await page.goto(`${base}/products/0`);
    const errorXpath = "//div[contains(text(), '해당 상품을')]";
    await page.waitForSelector("xpath/" + errorXpath, { timeout: 20000 });
    const [errorBox] = await page.$x(errorXpath);
    expect(errorBox).toBeDefined();
  }, 20000);

  beforeEach(async () => {
    await page.goto(`${base}/`);
    await page.waitForSelector("xpath///section/div/div/a");
  });
});
