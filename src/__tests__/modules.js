const puppeteer = require("puppeteer");
const base = "http://192.168.0.7:3000";

async function doLogin(page, email = "a@naver.com", password = "qqqq111!") {
  await page.goto(`${base}/login`);

  await page.type("#email", email);
  await page.type("#password", password);

  const [submit] = await page.$x("//button[@type='submit']");
  await submit.click();
}
async function doLogout(page) {
  const [logout] = await page.$x("//button[contains(text(), '로그아웃')]");

  if (logout) {
    await logout.click();
  }
}

const selectOption = async (page, n) => {
  await page.goto(`${base}/products/${n}`);
  await page.waitForSelector("xpath///ol[2]");

  const [first] = await page.$x("//ol[2]");
  await first.click();
  const [title] = await page.$x("//ol[1]");
  await title.click();
  const [second] = await page.$x("//ol[3]");
  await second.click();
};

const add = async (page) => {
  const btnXpath = '//button/span[contains(text(), "장바구니")]';
  const [btn] = await page.$x(btnXpath);
  await btn.click();
  await page.waitForSelector("xpath///div[contains(text(), '담았습니다')]");
};

const addToCart = async (page, n) => {
  await selectOption(page, n);
  await add(page);
};

const removeAll = async (page) => {
  await page.goto(`${base}/carts`);
  await page.waitForTimeout(200);

  let isEmpty = await page.$x("//span[contains(text(), '비어있습니다')]");
  if (isEmpty[0] !== undefined) return;

  const removeXpath = "//section/div/div/div[1]/button";

  while (isEmpty[0] === undefined) {
    const btn = await page.$x(removeXpath);
    await btn[0].click();
    await page.waitForTimeout(200);
    isEmpty = await page.$x("//span[contains(text(), '비어있습니다')]");
  }
};

module.exports = { doLogin, doLogout, selectOption, add, removeAll, addToCart };
