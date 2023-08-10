// @ts-ignore
const { expect } = require('@playwright/test');
// @ts-ignore
const { test } = require('../baseFixtures');

test('페이지 라우팅', async ({ page }) => {
  await page.goto('/order');
});

// 전체 동의 체크박스를 클릭하면 하위 체크 박스도 체크가 되어야 한다.
test('전체 동의 체크박스가 잘 동작한다. (체크됨)', async ({ page }) => {
  await page.goto('/order');
  await page.getByTestId('order-allChecked').click();
  expect(await page.getByTestId('order-checkbox1').isChecked()).toBeTruthy();
  expect(await page.getByTestId('order-checkbox2').isChecked()).toBeTruthy();
});

// 하위 체크 박스를 하나 선택했을 때 전체 동의 체크박스는 체크가 되지 않아야한다.
test('전체 동의 체크박스가 잘 동작한다. (하위 체크박스1 체크)', async ({ page }) => {
  await page.goto('/order');
  await page.getByTestId('order-checkbox1').click();
  expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
});

// 하위 체크 박스를 하나 선택했을 때 전체 동의 체크박스는 체크가 되지 않아야한다.
test('전체 동의 체크박스가 잘 동작한다.(하위 체크박스2 체크)', async ({ page }) => {
  await page.goto('/order');
  await page.getByTestId('order-checkbox2').click();
  expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
});

// 모든 체크박스가 체크 되어 있을 때 하위의 체크박스 하나를 해제하면 전체 동의 체크박스도 해제되어야 한다.
test('전체 동의 체크박스가 잘 동작한다. (체크해제)', async ({ page }) => {
  await page.goto('/order');
  await page.getByTestId('order-allChecked').click();
  await page.getByTestId('order-checkbox2').click();
  expect(await page.getByTestId('order-allChecked').isChecked()).toBeFalsy();
});
