const puppeteer = require("puppeteer"); // v13.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await targetPage.setViewport({
      width: 1713,
      height: 454,
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
        ["li:nth-of-type(1) > a"],
        ['xpath///*[@id="root"]/header/nav/ul/li[1]/a'],
        ["pierce/li:nth-of-type(1) > a"],
        ["text/로그인"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/로그인"],
        ["li:nth-of-type(1) > a"],
        ['xpath///*[@id="root"]/header/nav/ul/li[1]/a'],
        ["pierce/li:nth-of-type(1) > a"],
        ["text/로그인"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 26.390625,
        y: 10.6015625,
      },
    });
    console.log("로그인 페이지로 이동");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 122.5,
        y: 4,
      },
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "emis@");
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
      await typeIntoElement(element, "emis@");
    } else {
      await changeElementValue(element, "emis@");
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("2");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/이메일(아이디)"],
        ["#email"],
        ['xpath///*[@id="email"]'],
        ["pierce/#email"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "emis@naver.com");
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
      await typeIntoElement(element, "emis@naver.com");
    } else {
      await changeElementValue(element, "emis@naver.com");
    }
    console.log("이메일 입력");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.down("Tab");
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("Tab");
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
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/비밀번호"],
        ["#password"],
        ['xpath///*[@id="password"]'],
        ["pierce/#password"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "@");
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
      await typeIntoElement(element, "@");
    } else {
      await changeElementValue(element, "@");
    }
  }
  {
    const targetPage = page;
    await targetPage.keyboard.up("2");
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
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/비밀번호"],
        ["#password"],
        ['xpath///*[@id="password"]'],
        ["pierce/#password"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    const inputType = await element.evaluate((el) => el.type);
    if (inputType === "select-one") {
      await changeSelectElement(element, "@sws1234");
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
      await typeIntoElement(element, "@sws1234");
    } else {
      await changeElementValue(element, "@sws1234");
    }
    console.log("비밀번호 입력");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ['aria/로그인[role="button"]'],
        ["button"],
        ['xpath///*[@id="root"]/div/div/form/button'],
        ["pierce/button"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ['aria/로그인[role="button"]'],
        ["button"],
        ['xpath///*[@id="root"]/div/div/form/button'],
        ["pierce/button"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 273.5,
        y: 21.8046875,
      },
    });
    console.log("로그인 성공");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        [
          'aria/[황금약단밤 골드]2022년산 햇밤 칼집밤700g외/군밤용/생율[role="img"]',
        ],
        ["a:nth-of-type(2) img"],
        ['xpath///*[@id="root"]/div[2]/main/section/a[2]/div/picture/img'],
        ["pierce/a:nth-of-type(2) img"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        [
          'aria/[황금약단밤 골드]2022년산 햇밤 칼집밤700g외/군밤용/생율[role="img"]',
        ],
        ["a:nth-of-type(2) img"],
        ['xpath///*[@id="root"]/div[2]/main/section/a[2]/div/picture/img'],
        ["pierce/a:nth-of-type(2) img"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 162,
        y: 155,
      },
    });
    console.log("상품 상세 페이지로 이동");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["div:nth-of-type(3) > p:nth-of-type(2)"],
        [
          'xpath///*[@id="root"]/div/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[3]/p[2]',
        ],
        ["pierce/div:nth-of-type(3) > p:nth-of-type(2)"],
        ["text/5,500원"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["div:nth-of-type(3) > p:nth-of-type(2)"],
        [
          'xpath///*[@id="root"]/div/div/div/div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[3]/p[2]',
        ],
        ["pierce/div:nth-of-type(3) > p:nth-of-type(2)"],
        ["text/5,500원"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 37,
        y: 24.15625,
      },
    });
    console.log("상품 옵션 선택");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/장바구니 담기"],
        ["button.dJWQWB"],
        [
          'xpath///*[@id="root"]/div/div/div/div[2]/div/div/div[2]/div[3]/button[1]',
        ],
        ["pierce/button.dJWQWB"],
        ["text/장바구니 담기"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/장바구니 담기"],
        ["button.dJWQWB"],
        [
          'xpath///*[@id="root"]/div/div/div/div[2]/div/div/div[2]/div[3]/button[1]',
        ],
        ["pierce/button.dJWQWB"],
        ["text/장바구니 담기"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 98,
        y: 36,
      },
    });
    console.log("장바구니 담기");
    page.on("dialog", async (dialog) => {
      //on event listener trigger
      console.log(dialog.message()); //get alert message
      await dialog.accept(); //accept alert
    });
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ['aria/장바구니[role="img"]'],
        ["ul img"],
        ['xpath///*[@id="root"]/header/nav/ul/a/img'],
        ["pierce/ul img"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ['aria/장바구니[role="img"]'],
        ["ul img"],
        ['xpath///*[@id="root"]/header/nav/ul/a/img'],
        ["pierce/ul img"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 7.8671875,
        y: 16.09375,
      },
    });
    console.log("장바구니 페이지 이동");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/1건 주문하기"],
        ["div.sc-bTfYZt > button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/div.sc-bTfYZt > button"],
        ["text/1건 주문하기"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/1건 주문하기"],
        ["div.sc-bTfYZt > button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/div.sc-bTfYZt > button"],
        ["text/1건 주문하기"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 479.5,
        y: 16.1015625,
      },
    });
    console.log("장바구니 상품 주문");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["div.iOmxUd > label"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/div[2]/div[1]/label'],
        ["pierce/div.iOmxUd > label"],
        ["text/전체 동의하기"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["div.iOmxUd > label"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/div[2]/div[1]/label'],
        ["pierce/div.iOmxUd > label"],
        ["text/전체 동의하기"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 28.5,
        y: 12.21875,
      },
    });
    console.log("약관 전체 동의");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/5,500원 결제하기"],
        ["button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/button"],
        ["text/5,500원 결제하기"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/5,500원 결제하기"],
        ["button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/button"],
        ["text/5,500원 결제하기"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 408.5,
        y: 22.21875,
      },
    });
    console.log("결제하기");
  }
  {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/쇼핑 계속하기"],
        ["button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/button"],
        ["text/쇼핑 계속하기"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/쇼핑 계속하기"],
        ["button"],
        ['xpath///*[@id="root"]/div/main/div/div[2]/button'],
        ["pierce/button"],
        ["text/쇼핑 계속하기"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 447,
        y: 30.71875,
      },
    });
    console.log("쇼핑 계속하기");
  }
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await scrollIntoViewIfNeeded(
      [
        ["aria/로그아웃"],
        ["li > a"],
        ['xpath///*[@id="root"]/header/nav/ul/li/a'],
        ["pierce/li > a"],
        ["text/로그아웃"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/로그아웃"],
        ["li > a"],
        ['xpath///*[@id="root"]/header/nav/ul/li/a'],
        ["pierce/li > a"],
        ["text/로그아웃"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 38.8671875,
        y: 7.6015625,
      },
    });
    console.log("로그아웃");
    await Promise.all(promises);
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
      "Could not find element for selectors: " + JSON.stringify(selectors)
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
            el.shadowRoot ? el.shadowRoot : el
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
      const elementsHandle = await frame.evaluateHandle((...elements) => {
        return elements;
      }, ...elements);
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
          attributes
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
              el.shadowRoot ? el.shadowRoot : el
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
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
