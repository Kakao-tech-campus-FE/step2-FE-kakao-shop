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

const totalQuantity = async () => {
  await page.waitForTimeout(500);
  const divs = '//div[contains(text(), "수량")]/following-sibling::div[1]';
  const [total] = await page.$x(divs);
  const quantity = await total.evaluate((e) => e.textContent);
  return quantity;
};

const changeQuantity = async (input, n) => {
  await input.click({ clickCount: 3 });
  await input.type(`${n}`);
  await page.click("h1");
};

describe("Select Product Test", () => {
  it("장바구니", async () => {
    await doLogin(page);
    await page.waitForNavigation();
    await removeAll(page);

    await addToCart(page, 1);
    await addToCart(page, 2);

    await page.goto(`${base}/carts`);
    const quantity = await totalQuantity();
    expect(quantity).toBe("4");
  });

  it("버튼으로 수량조절 (1개일 때)", async () => {
    const minusPath = "//section//input/preceding-sibling::button";
    const plusPath = "//section//input/following-sibling::button";
    const minusBtns = await page.$x(minusPath);
    const plusBtns = await page.$x(plusPath);

    await minusBtns[0].click();
    await plusBtns[1].click();
    await minusBtns[2].click();
    await plusBtns[3].click();

    const quantity = await totalQuantity();

    expect(quantity).toBe("6");
  });

  it("수량 입력: 수량 10개로 변경", async () => {
    const inputXpath = "//section//input";
    await page.waitForSelector("xpath/" + inputXpath);

    const inputs = await page.$x(inputXpath);
    const inputQ = inputs.length;

    for (let i = 0; i < inputQ; i++) {
      await page.waitForSelector("xpath/" + inputXpath);
      const input = await page.$x(inputXpath);
      await changeQuantity(input[i], 10);
    }
    const quantity = await totalQuantity();
    expect(quantity).toBe("40");
  });

  it("수량 0개로 변경", async () => {
    const inputXpath = "//section//input";
    const inputs = await page.$x(inputXpath);
    for (const input of inputs) {
      await changeQuantity(input, 0);
    }
    const quantity = await totalQuantity();
    expect(quantity).toBe("40");
  });
});
