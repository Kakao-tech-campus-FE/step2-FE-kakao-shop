// @ts-ignore
const { test, expect } = require('@playwright/test');

// test('페이지 라우팅', async ({ page }) => {
//   await page.goto('/order');
// });

// // 전체 동의 체크박스를 클릭하면 하위 체크 박스도 체크가 되어야 한다.
// test('전체 동의 체크박스가 잘 동작한다. (체크됨)', async ({ page }) => {
//   await page.goto('/order');
//   await page.getByTestId('order-allChecked').click();
//   expect(await page.getByTestId('order-checkbox1').isChecked()).toBeTruthy();
//   expect(await page.getByTestId('order-checkbox2').isChecked()).toBeTruthy();
// });

// // 하위 체크 박스를 하나 선택했을 때 전체 동의 체크박스는 체크가 되지 않아야한다.
// test('전체 동의 체크박스가 잘 동작한다. (하위 체크박스1 체크)', async ({ page }) => {
//   await page.goto('/order');
//   await page.getByTestId('order-checkbox1').click();
//   expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
// });

// // 하위 체크 박스를 하나 선택했을 때 전체 동의 체크박스는 체크가 되지 않아야한다.
// test('전체 동의 체크박스가 잘 동작한다.(하위 체크박스2 체크)', async ({ page }) => {
//   await page.goto('/order');
//   await page.getByTestId('order-checkbox2').click();
//   expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
// });

// // 모든 체크박스가 체크 되어 있을 때 하위의 체크박스 하나를 해제하면 전체 동의 체크박스도 해제되어야 한다.
// test('전체 동의 체크박스가 잘 동작한다. (체크해제)', async ({ page }) => {
//   await page.goto('/order');
//   await page.getByTestId('order-allChecked').click();
//   await page.getByTestId('order-checkbox2').click();
//   expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
// });

// // 전체 동의가 되지 않았는데 결제하기 버튼을 누르는 경우 경고창이 뜨고 결제가 되지 않아야 한다.
// test('버튼 비활성화', async ({ page }) => {
//   await page.goto('/order');

//   let dialogMessage = null;
//   page.on('dialog', dialog => {
//     dialogMessage = dialog.message();
//     dialog.accept();
//   });

//   await page.getByTestId('order-submit').click();

//   expect(dialogMessage).toBe('약관에 동의해주세요.');
// });

// // 전체 동의가 되었을 때 결제하기 버튼을 누르면 결제 팝업이 뜬다.
// test('카카오 결제 팝업', async ({ context, browser, page }) => {
//   const popupPromise = page.waitForEvent('popup');
//   await page.goto('/order');
//   await page.getByTestId('order-allChecked').click();

//   // 버튼을 눌렀을때 서버 응답이 오는지 확인
//   const [response] = await Promise.all([
//     page.waitForResponse(
//       response => response.status() === 200 && response.url().includes('https://kapi.kakao.com/v1/payment/ready'),
//     ),
//     page.getByTestId('order-submit').click(),
//   ]);

//   const responseBody = await response.json();
//   // Start waiting for popup before clicking. Note no await.
//   const popup = await popupPromise;
//   await popup.goto(responseBody.next_redirect_pc_url);
// });

test('new tab accessing', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('/login');

  await page.goto('/order');
  await page.getByTestId('order-allChecked').click();

  // const [newtab] = await Promise.all([
  //   context.waitForEvent('popup'), //listener
  //   page.getByTestId('order-submit').click(),
  // ]);

  // console.log(newtab);
  // console.log(await newtab.title()); //child tab
  // console.log(await page.title()); //parent tab

  const [response] = await Promise.all([
    page.waitForResponse(response => response.url().includes('https://kapi.kakao.com/v1/payment/ready')),
    page.getByTestId('order-submit').click(),
  ]);

  const responseBody = await response.json();

  console.log(responseBody);

  const [newtab] = await Promise.all([
    context.waitForEvent('popup', { timeout: 5000 }).catch(error => null),
    page.getByTestId('order-submit').click(),
  ]);

  console.log(newtab);
  // const popupPromise = context.waitForEvent('popup');
  // await page.getByTestId('order-submit').click();
  // const popup = await popupPromise;
  // // Wait for the popup to load.
  // await popup.waitForLoadState();
  // console.log(await popup.title());
});
