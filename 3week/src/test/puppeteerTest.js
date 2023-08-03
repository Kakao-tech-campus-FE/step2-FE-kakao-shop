const puppeteer = require("puppeteer");

(async () => {
  // 브라우저 실행 및 새로운 페이지 생성
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // 특정 페이지 이동
  await page.goto("http://localhost:3000/");

  // 로그인 페이지 이동 및 실행


  await page.screenshot({ path: "./test/example.png" });

  await browser.close();
})();
