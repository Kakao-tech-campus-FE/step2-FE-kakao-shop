const puppeteer = require('puppeteer'); // v13.0.0 or later
console.log("테스트 시작");
(async () => {
    const browser = await puppeteer.launch({
        timeout: 0,
        defaultViewport: null,
        headless: false,
        protocolTimeout: 60000, // 60초로 타임아웃 설정
    });
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1029,
            height: 910
        })
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto('http://localhost:3000/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/로그인'
            ],
            [
                'header a:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/a/div/a[2]'
            ],
            [
                'pierce/header a:nth-of-type(2)'
            ],
            [
                'text/로그인'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/로그인'
            ],
            [
                'header a:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/a/div/a[2]'
            ],
            [
                'pierce/header a:nth-of-type(2)'
            ],
            [
                'text/로그인'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 11.33331298828125,
            y: 8,
          },
        });
        console.log("로그인 페이지 이동");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/이메일 (아이디)'
            ],
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/이메일 (아이디)'
            ],
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 129.33331298828125,
            y: 29.666664123535156,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/이메일 (아이디)'
            ],
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/이메일 (아이디)'
            ],
            [
                '#email'
            ],
            [
                'xpath///*[@id="email"]'
            ],
            [
                'pierce/#email'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'test30@test.com')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'test30@test.com');
        } else {
          await changeElementValue(element, 'test30@test.com');
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호'
            ],
            [
                '#password'
            ],
            [
                'xpath///*[@id="password"]'
            ],
            [
                'pierce/#password'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/비밀번호'
            ],
            [
                '#password'
            ],
            [
                'xpath///*[@id="password"]'
            ],
            [
                'pierce/#password'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'test1122!!')
        } else if ([
            'textarea',
            'text',
            'url',
            'tel',
            'search',
            'password',
            'number',
            'email'
        ].includes(inputType)) {
          await typeIntoElement(element, 'test1122!!');
        } else {
          await changeElementValue(element, 'test1122!!');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'main > div'
            ],
            [
                'xpath///*[@id="root"]/div/main/div'
            ],
            [
                'pierce/main > div'
            ],
            [
                'text/이메일 (아이디)test30@test.com비밀번호test1122!!로그인회원가입'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'main > div'
            ],
            [
                'xpath///*[@id="root"]/div/main/div'
            ],
            [
                'pierce/main > div'
            ],
            [
                'text/이메일 (아이디)test30@test.com비밀번호test1122!!로그인회원가입'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 217.66665649414062,
            y: 292,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/로그인[role="button"]'
            ],
            [
                'button'
            ],
            [
                'xpath///*[@id="root"]/div/main/div/button'
            ],
            [
                'pierce/button'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/로그인[role="button"]'
            ],
            [
                'button'
            ],
            [
                'xpath///*[@id="root"]/div/main/div/button'
            ],
            [
                'pierce/button'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 183,
            y: 15.666656494140625,
          },
        });
        console.log("로그인 완료");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'a:nth-of-type(2) span'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[1]/div/a[2]/div[2]/span'
            ],
            [
                'pierce/a:nth-of-type(2) span'
            ],
            [
                'text/2,000원'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'a:nth-of-type(2) span'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[1]/div/a[2]/div[2]/span'
            ],
            [
                'pierce/a:nth-of-type(2) span'
            ],
            [
                'text/2,000원'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 33,
            y: 4,
          },
        });
        console.log("상품 선택");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'li:nth-of-type(1) > div.font-300'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[3]/ol/li[1]/div[1]'
            ],
            [
                'pierce/li:nth-of-type(1) > div.font-300'
            ],
            [
                'text/1. 22년산 햇단밤 700g(한정판매)'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'li:nth-of-type(1) > div.font-300'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[3]/ol/li[1]/div[1]'
            ],
            [
                'pierce/li:nth-of-type(1) > div.font-300'
            ],
            [
                'text/1. 22년산 햇단밤 700g(한정판매)'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 83.73956298828125,
            y: 17.666664123535156,
          },
        });
        console.log("옵션 선택");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/장바구니 담기'
            ],
            [
                'button.w-15'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[3]/div[5]/button[1]'
            ],
            [
                'pierce/button.w-15'
            ],
            [
                'text/장바구니 담기'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/장바구니 담기'
            ],
            [
                'button.w-15'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[3]/div[5]/button[1]'
            ],
            [
                'pierce/button.w-15'
            ],
            [
                'text/장바구니 담기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 30.0728759765625,
            y: 18.33331298828125,
          },
        });
        console.log("장바구니 담기");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/주문하기'
            ],
            [
                'main > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/button'
            ],
            [
                'pierce/main > div > button'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/주문하기'
            ],
            [
                'main > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/button'
            ],
            [
                'pierce/main > div > button'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 280.45831298828125,
            y: 26.33331298828125,
          },
        });
        console.log("주문 페이지 이동");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/div/div[9]/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/div/div[9]/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 6.5520782470703125,
            y: 18.33331298828125,
          },
        });
        console.log("전체 동의");
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/결제하기'
            ],
            [
                'button'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/div/div[9]/button'
            ],
            [
                'pierce/button'
            ],
            [
                'text/결제하기'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/결제하기'
            ],
            [
                'button'
            ],
            [
                'xpath///*[@id="root"]/div/div/main/div/div/div[9]/button'
            ],
            [
                'pierce/button'
            ],
            [
                'text/결제하기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 253.5520782470703,
            y: 21.33331298828125,
          },
        });
        console.log("결제하기");
    }
    console.log("주문 완료");
    console.log("테스트 완료");

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
      const element = await waitForSelectors(selectors, frame, { visible: false, timeout });
      if (!element) {
        throw new Error(
          'The element could not be found.'
        );
      }
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
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
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const {
        count = 1,
        operator = '>=',
        visible = true,
        properties,
        attributes,
      } = step;
      const compFn = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
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
        throw new Error('Empty selector provided to querySelectorAll');
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
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
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
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
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
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }, value);
    }

    async function typeIntoElement(element, value) {
      const textToType = await element.evaluate((input, newValue) => {
        if (
          newValue.length <= input.value.length ||
          !newValue.startsWith(input.value)
        ) {
          input.value = '';
          return newValue;
        }
        const originalValue = input.value;
        input.value = '';
        input.value = originalValue;
        return newValue.substring(originalValue.length);
      }, value);
      await element.type(textToType);
    }
})().catch(err => {
    console.error(err);
    process.exit(1);
});
