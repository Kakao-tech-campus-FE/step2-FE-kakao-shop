const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 811,
            height: 793
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
                'aria/장바구니 버튼[role="img"]'
            ],
            [
                'nav img'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[1]/img'
            ],
            [
                'pierce/nav img'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/장바구니 버튼[role="img"]'
            ],
            [
                'nav img'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[1]/img'
            ],
            [
                'pierce/nav img'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 19.375,
            y: 10,
          },
        });
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
                'aria/회원가입'
            ],
            [
                'header a:nth-of-type(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[3]'
            ],
            [
                'pierce/header a:nth-of-type(3)'
            ],
            [
                'text/회원가입'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/회원가입'
            ],
            [
                'header a:nth-of-type(3)'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[3]'
            ],
            [
                'pierce/header a:nth-of-type(3)'
            ],
            [
                'text/회원가입'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 10.5555419921875,
            y: 18,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/사용자 이름을 입력해주세요.'
            ],
            [
                '#username'
            ],
            [
                'xpath///*[@id="username"]'
            ],
            [
                'pierce/#username'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/사용자 이름을 입력해주세요.'
            ],
            [
                '#username'
            ],
            [
                'xpath///*[@id="username"]'
            ],
            [
                'pierce/#username'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 604,
            y: 23,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/사용자 이름을 입력해주세요.'
            ],
            [
                '#username'
            ],
            [
                'xpath///*[@id="username"]'
            ],
            [
                'pierce/#username'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/사용자 이름을 입력해주세요.'
            ],
            [
                '#username'
            ],
            [
                'xpath///*[@id="username"]'
            ],
            [
                'pierce/#username'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, '테스트')
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
          await typeIntoElement(element, '테스트');
        } else {
          await changeElementValue(element, '테스트');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/아이디(메일)를 입력해주세요.'
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
                'aria/아이디(메일)를 입력해주세요.'
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
            x: 258,
            y: 8.430557250976562,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/아이디(메일)를 입력해주세요.'
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
                'aria/아이디(메일)를 입력해주세요.'
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
          await changeSelectElement(element, 'kakao@naver.com')
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
          await typeIntoElement(element, 'kakao@naver.com');
        } else {
          await changeElementValue(element, 'kakao@naver.com');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 입력해주세요.'
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
                'aria/비밀번호를 입력해주세요.'
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
        await element.click({
          offset: {
            x: 186,
            y: 15.861114501953125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 입력해주세요.'
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
                'aria/비밀번호를 입력해주세요.'
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
          await changeSelectElement(element, 'a12345678!')
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
          await typeIntoElement(element, 'a12345678!');
        } else {
          await changeElementValue(element, 'a12345678!');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 확인해주세요.'
            ],
            [
                '#passwordCheck'
            ],
            [
                'xpath///*[@id="passwordCheck"]'
            ],
            [
                'pierce/#passwordCheck'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/비밀번호를 확인해주세요.'
            ],
            [
                '#passwordCheck'
            ],
            [
                'xpath///*[@id="passwordCheck"]'
            ],
            [
                'pierce/#passwordCheck'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 456,
            y: 14.291656494140625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 확인해주세요.'
            ],
            [
                '#passwordCheck'
            ],
            [
                'xpath///*[@id="passwordCheck"]'
            ],
            [
                'pierce/#passwordCheck'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/비밀번호를 확인해주세요.'
            ],
            [
                '#passwordCheck'
            ],
            [
                'xpath///*[@id="passwordCheck"]'
            ],
            [
                'pierce/#passwordCheck'
            ]
        ], targetPage, { timeout, visible: true });
        const inputType = await element.evaluate(el => el.type);
        if (inputType === 'select-one') {
          await changeSelectElement(element, 'a12345678!')
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
          await typeIntoElement(element, 'a12345678!');
        } else {
          await changeElementValue(element, 'a12345678!');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/회원가입[role="button"]'
            ],
            [
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/button'
            ],
            [
                'pierce/#root > div button'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/회원가입[role="button"]'
            ],
            [
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/button'
            ],
            [
                'pierce/#root > div button'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 517,
            y: 23.72222900390625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/로그인'
            ],
            [
                'a.mr-2'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[2]'
            ],
            [
                'pierce/a.mr-2'
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
                'a.mr-2'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a[2]'
            ],
            [
                'pierce/a.mr-2'
            ],
            [
                'text/로그인'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 20.5555419921875,
            y: 8,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                '#root > div > div > div > div'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div'
            ],
            [
                'pierce/#root > div > div > div > div'
            ],
            [
                'text/로그인회원가입'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                '#root > div > div > div > div'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div'
            ],
            [
                'pierce/#root > div > div > div > div'
            ],
            [
                'text/로그인회원가입'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 627,
            y: 37,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/아이디(메일)를 입력해주세요.'
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
                'aria/아이디(메일)를 입력해주세요.'
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
            x: 547.1111145019531,
            y: 12.111106872558594,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/아이디(메일)를 입력해주세요.'
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
                'aria/아이디(메일)를 입력해주세요.'
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
          await changeSelectElement(element, 'kakao@naver.com')
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
          await typeIntoElement(element, 'kakao@naver.com');
        } else {
          await changeElementValue(element, 'kakao@naver.com');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 입력해주세요.'
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
                'aria/비밀번호를 입력해주세요.'
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
        await element.click({
          offset: {
            x: 242.11111450195312,
            y: 13.541671752929688,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/비밀번호를 입력해주세요.'
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
                'aria/비밀번호를 입력해주세요.'
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
          await changeSelectElement(element, 'a12345678!')
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
          await typeIntoElement(element, 'a12345678!');
        } else {
          await changeElementValue(element, 'a12345678!');
        }
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/로그인'
            ],
            [
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/button'
            ],
            [
                'pierce/#root > div button'
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
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/button'
            ],
            [
                'pierce/#root > div button'
            ],
            [
                'text/로그인'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 540.1111145019531,
            y: 26.97222900390625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!'
            ],
            [
                'a:nth-of-type(3) img'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[1]/a[3]/picture/img'
            ],
            [
                'pierce/a:nth-of-type(3) img'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/삼성전자 JBL JR310 외 어린이용/성인용 헤드셋 3종!'
            ],
            [
                'a:nth-of-type(3) img'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div[1]/a[3]/picture/img'
            ],
            [
                'pierce/a:nth-of-type(3) img'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 30,
            y: 146,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(1) > span.price'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol/div[1]/span[2]'
            ],
            [
                'pierce/div:nth-of-type(1) > span.price'
            ],
            [
                'text/29,900원'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(1) > span.price'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol/div[1]/span[2]'
            ],
            [
                'pierce/div:nth-of-type(1) > span.price'
            ],
            [
                'text/29,900원'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 11.861083984375,
            y: 19.111114501953125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(6) > span.name'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol[1]/div[6]/span[1]'
            ],
            [
                'pierce/div:nth-of-type(6) > span.name'
            ],
            [
                'text/6. T510BT (무선'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(6) > span.name'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol[1]/div[6]/span[1]'
            ],
            [
                'pierce/div:nth-of-type(6) > span.name'
            ],
            [
                'text/6. T510BT (무선'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 168.40277099609375,
            y: 3.111114501953125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'ol:nth-of-type(2) button:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol[2]/li/div/button[2]'
            ],
            [
                'pierce/ol:nth-of-type(2) button:nth-of-type(2)'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'ol:nth-of-type(2) button:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/ol[2]/li/div/button[2]'
            ],
            [
                'pierce/ol:nth-of-type(2) button:nth-of-type(2)'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 8.84722900390625,
            y: 21.22222900390625,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/장바구니 담기'
            ],
            [
                'div.button-group > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/div[2]/button'
            ],
            [
                'pierce/div.button-group > button'
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
                'div.button-group > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/div/div[2]/div/div[2]/button'
            ],
            [
                'pierce/div.button-group > button'
            ],
            [
                'text/장바구니 담기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 201.40277099609375,
            y: 30.4444580078125,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/장바구니 버튼[role="img"]'
            ],
            [
                'nav img'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a/img'
            ],
            [
                'pierce/nav img'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/장바구니 버튼[role="img"]'
            ],
            [
                'nav img'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/a/img'
            ],
            [
                'pierce/nav img'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 17.375,
            y: 23,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'a:nth-of-type(2) div.counter'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/a[1]/div/a[2]/li/div/div[1]'
            ],
            [
                'pierce/a:nth-of-type(2) div.counter'
            ],
            [
                'text/-1+'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'a:nth-of-type(2) div.counter'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/a[1]/div/a[2]/li/div/div[1]'
            ],
            [
                'pierce/a:nth-of-type(2) div.counter'
            ],
            [
                'text/-1+'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 20.111114501953125,
            y: 8.333328247070312,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/T510BT (무선 전용) - 화이트 - 1 + 52,900원',
                'aria/+'
            ],
            [
                'a:nth-of-type(2) button:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/a[1]/div/a[2]/li/div/div[1]/button[2]'
            ],
            [
                'pierce/a:nth-of-type(2) button:nth-of-type(2)'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/T510BT (무선 전용) - 화이트 - 1 + 52,900원',
                'aria/+'
            ],
            [
                'a:nth-of-type(2) button:nth-of-type(2)'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/a[1]/div/a[2]/li/div/div[1]/button[2]'
            ],
            [
                'pierce/a:nth-of-type(2) button:nth-of-type(2)'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 7.194427490234375,
            y: 9.333328247070312,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/총 4건 주문하기'
            ],
            [
                '#root > div > div > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/button'
            ],
            [
                'pierce/#root > div > div > div > button'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/총 4건 주문하기'
            ],
            [
                '#root > div > div > div > button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div/button'
            ],
            [
                'pierce/#root > div > div > div > button'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 769,
            y: 24.444427490234375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(2) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/label'
            ],
            [
                'pierce/div:nth-of-type(2) > label'
            ],
            [
                'text/구매조건 확인 및 결제'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(2) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[2]/label'
            ],
            [
                'pierce/div:nth-of-type(2) > label'
            ],
            [
                'text/구매조건 확인 및 결제'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 30.888885498046875,
            y: 7.333343505859375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(3) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[3]/label'
            ],
            [
                'pierce/div:nth-of-type(3) > label'
            ],
            [
                'text/개인정보 제3자 제공 동의'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(3) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[3]/label'
            ],
            [
                'pierce/div:nth-of-type(3) > label'
            ],
            [
                'text/개인정보 제3자 제공 동의'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 48.888885498046875,
            y: 5.333343505859375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의하기'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의하기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 37.888885498046875,
            y: 14.333343505859375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의하기'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'div:nth-of-type(1) > label'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/div[3]/div/div[1]/label'
            ],
            [
                'pierce/div:nth-of-type(1) > label'
            ],
            [
                'text/전체 동의하기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 37.888885498046875,
            y: 14.333343505859375,
          },
        });
    }
    {
        const targetPage = page;
        await scrollIntoViewIfNeeded([
            [
                'aria/결제하기'
            ],
            [
                'div.px-20 button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/button'
            ],
            [
                'pierce/div.px-20 button'
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
                'div.px-20 button'
            ],
            [
                'xpath///*[@id="root"]/div/div/div[2]/div/button'
            ],
            [
                'pierce/div.px-20 button'
            ],
            [
                'text/결제하기'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 775.7777786254883,
            y: 24.66668701171875,
          },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await scrollIntoViewIfNeeded([
            [
                'aria/로그아웃'
            ],
            [
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/div/button'
            ],
            [
                'pierce/#root > div button'
            ],
            [
                'text/로그아웃'
            ]
        ], targetPage, timeout);
        const element = await waitForSelectors([
            [
                'aria/로그아웃'
            ],
            [
                '#root > div button'
            ],
            [
                'xpath///*[@id="root"]/div/div/header/div/nav/div/button'
            ],
            [
                'pierce/#root > div button'
            ],
            [
                'text/로그아웃'
            ]
        ], targetPage, { timeout, visible: true });
        await element.click({
          offset: {
            x: 6.5555419921875,
            y: 8,
          },
        });
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
