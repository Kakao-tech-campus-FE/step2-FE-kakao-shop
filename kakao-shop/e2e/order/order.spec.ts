// @ts-ignore
const { test, expect } = require('@playwright/test');

test('페이지 라우팅', async ({ page }) => {
  await page.goto('/order');
});
