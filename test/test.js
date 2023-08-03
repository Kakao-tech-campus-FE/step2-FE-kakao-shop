const puppeteer = require('puppeteer');

// *해당 코드를 실행하려면, 회원가입은 되어있는 상태여야 함!
(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('http://localhost:3000/');

  // Set screen size
  await page.setViewport({width: 2160, height: 2048});

  // 로그인 페이지 이동
  const loginPageSelector = '#root > div.navbar > a:nth-child(5)'
  await page.waitForSelector(loginPageSelector);
  await page.click(loginPageSelector);

  // 로그인 실행
  const inputEmailArea = await page.waitForSelector('#email');
  const inputPasswordArea = await page.waitForSelector('#password');
  const loginButtonSelector = await page.$('#root > div.loginPage > div > button');
  const loginOkSelector = 'body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled';
  await inputEmailArea.type('test@naver.com');
  await inputPasswordArea.type('test123!');
  await loginButtonSelector.click();
  await page.waitForSelector(loginOkSelector);
  await page.click(loginOkSelector);

  await page.goto('http://localhost:3000/product/1');
  
  // 물건 담기 진행
  const productSelector = '#root > div.productDetailPage > div > div.sc-pGawl.hiZIKB > ol.option-list > li:nth-child(4) > span.name';
  const getCartSelector =  '#root > div.productDetailPage > div > div.sc-pGawl.hiZIKB > div.sc-kEjaJL.iJZRvf > button:nth-child(1)';
  const getCarkOkSelector = 'body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled'
  await page.waitForSelector('#root > div.productDetailPage > div > div.sc-jSgtCu.boIGBE > div:nth-child(1) > picture > img');
  await page.waitForSelector(productSelector);
  await page.click(productSelector);
  await page.waitForSelector(getCartSelector);
  await page.click(getCartSelector);
  await page.waitForSelector(getCarkOkSelector);
  await page.click(getCarkOkSelector);

  // 장바구니 페이지 이동
  const cartPageSelector = '#root > div.navbar > a:nth-child(2)'
  await page.waitForSelector(cartPageSelector);
  await page.click(cartPageSelector);
  console.log("장바구니 클릭")

  // 장바구니 페이지에서 결제 클릭하기
  await page.goto('http://localhost:3000/cart');
  const paymentButtonSelector = '#root > div.sc-hHfsPW.gjDXNz > div > div > div.sc-bkzYJL.gUMPoI > div.sc-idOiCY.jetcTU.order-btn'
  await page.waitForSelector(paymentButtonSelector);
  await page.click(paymentButtonSelector);

  // 결제 페이지에서 동의 후 결제 클릭하기
  console.log("결제 페이지 이동")
  const realPaymentButtonSelector = '#root > div.sc-jJEJfv.dCqdhC > div > div > div:nth-child(3) > div.sc-iktGmw';
  const agreeAllSelector = '#root > div.sc-jJEJfv.dCqdhC > div > div > div:nth-child(3) > div.sc-ezrcWL.fwJUjV > div.sc-bYEvcm.ioFla-D > label';
  // await page.click(realPaymentButtonSelector);
  await page.waitForSelector(agreeAllSelector);
  await page.click(agreeAllSelector);
  console.log("전체 동의 완료");
  await page.waitForSelector(realPaymentButtonSelector);
  await page.click(realPaymentButtonSelector);
  console.log("결제 완료!")

  // 결제 완료
  const paymentCompleteSelector = 'body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled';
  await page.waitForSelector(paymentCompleteSelector);

  // 해당 화면을 스크린샷 찍어서 저장
  await page.screenshot({ path: "./test/screen/screen1.png" });

  await browser.close();
})();