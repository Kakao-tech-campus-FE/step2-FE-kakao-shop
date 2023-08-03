const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  let selector;

  await page.goto("http://localhost:3000");

  await page.setViewport({ width: 1280, height: 1024 });
  console.log("테스트 시작");

  console.log("사이드바 내 로그인 버튼 클릭");
  selector =
    "#root > div > header > div > div:nth-child(2) > div.absolute.bottom-4 > a > div";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("이메일-패스워드 입력");
  selector = "#email";
  await page.waitForSelector(selector);
  await page.focus(selector);
  await page.keyboard.type("juyeongnoh@gmail.com", { delay: 100 });
  selector = "#password";
  await page.waitForSelector(selector);
  await page.focus(selector);
  await page.keyboard.type("Juyeong57!", { delay: 100 });

  console.log("로그인 버튼 클릭");
  selector = "#root > div > div > button";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("상품 클릭");
  await page.waitForTimeout(1000);
  selector =
    "#root > div > main > div > div:nth-child(3) > div.grid.grid-cols-4.gap-4.px-4.max-w-screen-lg > a:nth-child(3) > picture > img";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("옵션 클릭");
  await page.waitForTimeout(1000);
  selector =
    "#root > div > main > div.my-8 > div > div:nth-child(2) > ol.option-list > li:nth-child(2) > div.name.font-bold";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("옵션 수량 1회 증가");
  await page.waitForTimeout(1000);
  selector =
    "#root > div > main > div.my-8 > div > div:nth-child(2) > ol.selected-option-list > li > div:nth-child(2) > div > button:nth-child(3)";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("장바구니 담기 버튼 클릭");
  selector =
    "#root > div > main > div.my-8 > div > div:nth-child(2) > div.button-group > button.w-36.h-12.bg-gray-900.rounded-lg.text-white.text-sm";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("장바구니 페이지로 이동");
  selector =
    "#root > div > header > div > div:nth-child(2) > a:nth-child(4) > div";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("n건 주문하기 버튼 클릭");
  await page.waitForTimeout(1000);
  selector = "#root > div > main > div > main > div > button";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("약관 동의");
  selector = "#all-agree";
  await page.waitForSelector(selector);
  await page.click(selector);
  selector = "#agree";
  await page.waitForSelector(selector);
  await page.click(selector);
  selector = "#policy";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("주문하기 버튼 클릭");
  selector =
    "#root > div > main > div > main > div > div > div.border.flex.flex-col.p-4.gap-4 > button";
  await page.waitForSelector(selector);
  await page.click(selector);

  console.log("주문 완료!");
  await page.waitForTimeout(1000);

  await page.screenshot({ path: "./tests/screenshots/screenshot.png" });

  await browser.close();
})();