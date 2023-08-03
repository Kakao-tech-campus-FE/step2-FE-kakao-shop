const puppeteer = require("puppeteer"); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  page.on("dialog", async (dialog) => {
    await dialog.dismiss();
  });
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1920,
      height: 1080,
    });
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await targetPage.goto("http://localhost:3000/");
    await Promise.all(promises);
  }
  {
    const targetPage = page;

    await scrollIntoViewIfNeeded(
      [
        ["aria/로그인"],
        ["a.login-button"],
        ['xpath///*[@id="root"]/div/nav/div[2]/a[1]'],
        ["pierce/a.login-button"],
        ["text/로그인"],
      ],
      targetPage,
      timeout,
    );

    const element = await waitForSelectors(
      [
        ["aria/로그인"],
        ["a.login-button"],
        ['xpath///*[@id="root"]/div/nav/div[2]/a[1]'],
        ["pierce/a.login-button"],
        ["text/로그인"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await targetPage.pdf({
      path: "./orderTest/results/main.pdf",
      format: "A4",
    });
    await element.click({
      offset: {
        x: 48.046875,
        y: 10.5,
      },
    });
  }
  {
    const targetPage = page;

    await scrollIntoViewIfNeeded(
      [
        ["aria/이메일 (아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["aria/이메일 (아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      { timeout, visible: true },
    );

    await targetPage.pdf({
      path: "./orderTest/results/login.pdf",
      format: "A4",
    });

    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "qwer@qwer.com");
    } else if (
      [
        "textarea",
        "text",
        "url",
        "tel",
        "search",
        "password",
        "number",
        "email",
      ].includes(inputType)
    ) {
      await typeIntoElement(element, "qwer@qwer.com");
    } else {
      await changeElementValue(element, "qwer@qwer.com");
    }
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/비밀번호"],
        ["#password"],
        ['xpath///*[@id="password"]'],
        ["pierce/#password"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["aria/비밀번호"],
        ["#password"],
        ['xpath///*[@id="password"]'],
        ["pierce/#password"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "qwer1234!");
    } else if (
      [
        "textarea",
        "text",
        "url",
        "tel",
        "search",
        "password",
        "number",
        "email",
      ].includes(inputType)
    ) {
      await typeIntoElement(element, "qwer1234!");
    } else {
      await changeElementValue(element, "qwer1234!");
    }
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await scrollIntoViewIfNeeded(
      [
        ['aria/로그인[role="button"]'],
        ["div.page button"],
        ['xpath///*[@id="root"]/div/div[3]/div/div/button'],
        ["pierce/div.page button"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ['aria/로그인[role="button"]'],
        ["div.page button"],
        ['xpath///*[@id="root"]/div/div[3]/div/div/button'],
        ["pierce/div.page button"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 220,
        y: 31.5,
      },
    });
    await Promise.all(promises);
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!"],
        ["a:nth-of-type(3) img"],
        ['xpath///*[@id="root"]/div/div[3]/div/div/div[1]/a[3]/picture/img'],
        ["pierce/a:nth-of-type(3) img"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["aria/삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!"],
        ["a:nth-of-type(3) img"],
        ['xpath///*[@id="root"]/div/div[3]/div/div/div[1]/a[3]/picture/img'],
        ["pierce/a:nth-of-type(3) img"],
      ],
      targetPage,
      { timeout, visible: true },
    );

    await targetPage.pdf({
      path: "./orderTest/results/findProduct.pdf",
      format: "A4",
    });

    await element.click({
      offset: {
        x: 156.7216796875,
        y: 125.78826904296875,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["li:nth-of-type(1) > span.block"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[1]/ol/li[1]/span[2]',
        ],
        ["pierce/li:nth-of-type(1) > span.block"],
        ["text/29,900원"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["li:nth-of-type(1) > span.block"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[1]/ol/li[1]/span[2]',
        ],
        ["pierce/li:nth-of-type(1) > span.block"],
        ["text/29,900원"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 30.8359375,
        y: 8,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["div.overflow-y-auto button:nth-of-type(2)"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[1]/ol[2]/li/div[2]/div/div/button[2]',
        ],
        ["pierce/div.overflow-y-auto button:nth-of-type(2)"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["div.overflow-y-auto button:nth-of-type(2)"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[1]/ol[2]/li/div[2]/div/div/button[2]',
        ],
        ["pierce/div.overflow-y-auto button:nth-of-type(2)"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 6.421875,
        y: 3,
      },
    });
    await element.click({
      clickCount: 2,
      offset: {
        x: 6.421875,
        y: 3,
      },
    });
    await targetPage.pdf({
      path: "./orderTest/results/selectOption.pdf",
      format: "A4",
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/바로 구매"],
        ["button.buy-directly"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[2]/div[2]/button[2]',
        ],
        ["pierce/button.buy-directly"],
        ["text/바로 구매"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["aria/바로 구매"],
        ["button.buy-directly"],
        [
          'xpath///*[@id="root"]/div/div[3]/div[2]/div/div[2]/div[2]/div[2]/button[2]',
        ],
        ["pierce/button.buy-directly"],
        ["text/바로 구매"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await targetPage.pdf({
      path: "./orderTest/results/clickBuyButton.pdf",
      format: "A4",
    });
    await element.click({
      offset: {
        x: 11.671875,
        y: 23,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["div:nth-of-type(3) > button"],
        ['xpath///*[@id="root"]/div/div[3]/div/div[3]/button'],
        ["pierce/div:nth-of-type(3) > button"],
        [".order-button"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["div:nth-of-type(3) > button"],
        ['xpath///*[@id="root"]/div/div[3]/div/div[3]/button'],
        ["pierce/div:nth-of-type(3) > button"],
        [".order-button"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 332.5703125,
        y: 20,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["div.items-center > label"],
        ['xpath///*[@id="root"]/div/div[3]/div[5]/div/div[1]/label'],
        ["pierce/div.items-center > label"],
        ["text/전체 동의"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["div.items-center > label"],
        ['xpath///*[@id="root"]/div/div[3]/div[5]/div/div[1]/label'],
        ["pierce/div.items-center > label"],
        ["text/전체 동의"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 34,
        y: 11,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/결제하기"],
        ["div.order-template button"],
        ['xpath///*[@id="root"]/div/div[3]/div[5]/button'],
        ["pierce/div.order-template button"],
        ["text/결제하기"],
      ],
      targetPage,
      timeout,
    );
    const element = await waitForSelectors(
      [
        ["aria/결제하기"],
        ["div.order-template button"],
        ['xpath///*[@id="root"]/div/div[3]/div[5]/button'],
        ["pierce/div.order-template button"],
        ["text/결제하기"],
      ],
      targetPage,
      { timeout, visible: true },
    );
    await element.click({
      offset: {
        x: 216,
        y: 8,
      },
    });
  }

  await browser.close();

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error(
      "Could not find element for selectors: " + JSON.stringify(selectors),
    );
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, {
      visible: false,
      timeout,
    });
    if (!element) {
      throw new Error("The element could not be found.");
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate((element) => {
      element.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "auto",
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty("isConnected");
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to waitForSelector");
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error("Could not find element: " + selector.join(">>"));
      }
      if (i < selector.length - 1) {
        element = (
          await element.evaluateHandle((el) =>
            el.shadowRoot ? el.shadowRoot : el,
          )
        ).asElement();
      }
    }
    if (!element) {
      throw new Error("Could not find element: " + selector.join("|"));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = ">=",
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      "==": (a, b) => a === b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle(
        (...elements) => {
          return elements;
        },
        ...elements,
      );
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes,
        );
      }
      await elementsHandle.dispose();
      return result === visible;
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to querySelectorAll");
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (
            await el.evaluateHandle((el) =>
              el.shadowRoot ? el.shadowRoot : el,
            )
          ).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Timed out");
  }

  async function changeSelectElement(element, value) {
    await element.select(value);
    await element.evaluateHandle((e) => {
      e.blur();
      e.focus();
    });
  }

  async function changeElementValue(element, value) {
    await element.focus();
    await element.evaluate((input, value) => {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }, value);
  }

  async function typeIntoElement(element, value) {
    const textToType = await element.evaluate((input, newValue) => {
      if (
        newValue.length <= input.value.length ||
        !newValue.startsWith(input.value)
      ) {
        input.value = "";
        return newValue;
      }
      const originalValue = input.value;
      input.value = "";
      input.value = originalValue;
      return newValue.substring(originalValue.length);
    }, value);
    await element.type(textToType);
  }

  console.log("test complete");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
