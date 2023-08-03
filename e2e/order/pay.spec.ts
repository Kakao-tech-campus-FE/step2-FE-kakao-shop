// @ts-ignore
const { expect } = require('@playwright/test');
// @ts-ignore
const { test } = require('../baseFixtures');

// 전체 동의가 되지 않았는데 결제하기 버튼을 누르는 경우 경고창이 뜨고 결제가 되지 않아야 한다.
test('버튼 비활성화', async ({ page }) => {
  await page.goto('/order');

  let dialogMessage = null;
  page.on('dialog', dialog => {
    dialogMessage = dialog.message();
    dialog.accept();
  });

  await page.getByTestId('order-submit').click();

  expect(dialogMessage).toBe('약관에 동의해주세요.');
});

// 전체 동의가 되었을 때 결제하기 버튼을 누르면 결제 팝업이 뜬다.
test('카카오 결제 팝업', async ({ context }) => {
  const page = await context.newPage();

  await page.goto('/order');
  await page.getByTestId('order-allChecked').click();

  const [response] = await Promise.all([
    page.waitForResponse(response => response.url().includes('https://kapi.kakao.com/v1/payment/ready')),
    page.getByTestId('order-submit').click(),
  ]);

  const responseBody = await response.json();

  const [newtab] = await Promise.all([
    context.waitForEvent('popup', { timeout: 5000 }).catch(() => null),
    page.getByTestId('order-submit').click(),
  ]);
});
