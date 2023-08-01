const puppeteer = require("puppeteer");
const { doLogin, doLogout } = require("./modules");
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

describe("Login Test", () => {
  it("로그인", async () => {
    await doLogin("a@naver.com", "qqqq111!");
    await page.waitForNavigation();
    const mainURL = await page.url();
    expect(mainURL).toBe(`${base}/`);
  });

  it("로그인 오류", async () => {
    await doLogin("b@naver.com", "qqqq111!");
    const errorXpath = "//div[contains(text(), '실패')]";
    await page.waitForSelector("xpath/" + errorXpath);
    const [errorBox] = await page.$x(errorXpath);
    expect(errorBox).toBeDefined();
  });

  beforeEach(async () => {
    await page.goto(`${base}/`);
    await doLogout();
  });
});
