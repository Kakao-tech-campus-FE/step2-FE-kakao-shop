const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // Navigate the page to a URL
  await page.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 0 });
  // Set screen size
  await page.setViewport({ width: 2160, height: 2048 });

  // alert 창 핸들링
  page.on('dialog', async (dialog) => {
    console.log('Alert 창이 떴습니다.');
    await dialog.dismiss(); // alert 창을 닫습니다.
  });

  // 로그인페이지로 Redirect
  const selectLogin =
    '#root > div > header > nav > div > div > span:nth-child(3) > a:nth-child(3)';
  await page.waitForSelector(selectLogin);
  await page.click(selectLogin);

  // 로그인 페이지
  const inputEmail = await page.waitForSelector('#email');
  const inputPassword = await page.waitForSelector('#password');
  const loginButton = '#root > div > div > div > div:nth-child(4) > button';
  await inputEmail.type('zxcv@zxcv.com');
  await inputPassword.type('1q2w3e4r!@');
  await page.click(loginButton);
  const product = await page.waitForSelector(
    '#root > div > header > nav > div > div > span:nth-child(3) > button',
  );
  await product;

  // 로그인 완료 후 개별상품 페이지로 이동
  await page.goto('http://localhost:3000/product/1');
  await page.waitForSelector('#root > div > header > div > a > img');
  const option =
    '#root > div > div > div.col-span-1 > div > div.border-solid > .option-list > li:nth-child(4) > span';
  await page.waitForSelector(option);
  // 옵션 담기
  await page.click(option);
  await page.waitForSelector(
    '#root > div > div > div.col-span-1 > div > div.border-solid>.selected-option-list > li > div',
  );
  // 장바구니 담기버튼
  const cartButton =
    '#root > div > div > div.col-span-1> div > button:nth-child(7)';
  await page.click(cartButton);

  // 장바구니페이지
  await page.goto('http://localhost:3000/cart');
  await page.waitForSelector('#root > div > div > div > div > h1');

  // 주문하기버튼
  const orderCartButton = '#root > div > div > div > button';
  await page.click(orderCartButton);

  // 주문하기 페이지
  await page.goto('http://localhost:3000/order');
  await page.waitForSelector(
    '#root > div > div > div > div > div.border.p-2 > h1',
  );
  // 전체 동의 버튼
  const allAgree = '#all-agree';
  await page.click(allAgree);
  const orderButton =
    '#root > div > div > div > div > div.flex.flex-col.p-4.gap-4 > button';
  await page.click(orderButton);
  // 최종결제
  const completeButton = '#root > div > section > div:nth-child(3) > button';
  await page.waitForSelector(completeButton);

  await page.screenshot({ path: './result.jpg' });
  await browser.close();
})();
