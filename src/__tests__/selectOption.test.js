const puppeteer = require("puppeteer");
const {
  doLogin,
  doLogout,
  selectOption,
  add,
  removeAll,
} = require("./modules");
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

describe("Select Product Test", () => {
  it("첫번째 상품의 1,2번째 옵션 선택", async () => {
    await doLogin(page, "a@naver.com", "qqqq111!");
    await page.waitForNavigation();

    await selectOption(page, 1);
    const selectedOptions = await page.$x("//input");
    expect(selectedOptions.length).toBe(2);
  });

  it("장바구니 추가", async () => {
    await add(page);
    const toastXpath = "//div[contains(text(), '담았습니다.')]";
    await page.waitForSelector("xpath/" + toastXpath);
    const [toast] = await page.$x(toastXpath);
    expect(toast).toBeDefined();
  });

  it("에러 메세지 (로그인 X 일때)", async () => {
    await doLogout(page);
    await page.goto(`${base}/products/1`);
    await page.waitForSelector("xpath///ol[2]");

    const [first] = await page.$x("//ol[2]");
    await first.click();

    const toastXpath = "//div[contains(text(), '로그인 해주세요')]";
    await page.waitForSelector("xpath/" + toastXpath);
    const [errorBox] = await page.$x(toastXpath);
    expect(errorBox).toBeDefined();
  });
});
