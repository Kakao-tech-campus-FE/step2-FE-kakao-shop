# Kakao 쇼핑하기 페이지 클론코딩
## 클론코딩 페이지 설명
### 해당 페이지는 카카오 쇼핑하기 페이지를 클론 코딩 학습한 페이지이다. 
### 페이지별 설명
1. HomePage
- 상품 정보를 백엔드 API로부터 받아와서, 화면에 나타내고 있다. 
- 해당 페이지는 io(intersectionObserver)로 무한 스크롤을 구현하여 추가적인 아이템을 가져오도록 구현되어 있다. 
- 상단의 Header는 global 영역으로 구현되어 있어서 장바구니, 상품 상세 페이지에서도 보이도록 제작했다. 
2. Global Navigation Bar(Header)
- 로고 버튼을 누르면 홈화면으로 가게 된다. 
- 로그인이 되어있으면 유저 아이콘이 나오고, 로그인이 되어 있지 않으면 로그인 버튼이 화면에 나오게 된다. 
- 장바구니 아이콘을 누르면 Cart 정보를 담은 CartPage로 가게 된다. 
3. LoginPage(SignInPage)
- 로그인 기능을 담당하고 있는 페이지이다. 
- 아이디와 비밀번호를 백엔드 DB로부터 대조하여 있을 경우 로그인이 성공하게 된다. 
- 로그인이 성공하면, User의 정보와 Token이 저장되어서 cart, order를 할 수 있게 된다. 
- 로그인, 회원가입 기능을 제외한 나머지 버튼은 기존 `카카오 쇼핑하기` 화면 UI를 클론한 것이기 때문에 동작하지는 않는다. 
4. SignUpPage
- 회원가입 기능을 담당하고 있는 페이지이다. 
- 중복된 이메일 확인을 할 수 있고, 정해진 비밀번호 형식에 맞지 않으면 회원가입 버튼 시 에러메시지가 모달창으로 나오게 된다. 
5. ProductDetailPage
- 상품의 상세 정보(옵션)을 볼 수 있는 페이지이다. 
- 옵션과 수량을 선택하여 장바구니에 담는 기능이 구현되어 있다. 
6. CartsPage
- 장바구니에 담은 상품을 볼 수 있는 페이지이다. 
- Counter를 통해 수량 변경과 해당 가격, 총 구매 가격을 확인할 수 있고, 결제하기 버튼을 누르면 변경된 내용이 수정되어 주문 페이지로 넘어간다. 
7. OrderPage
- 최종 결제를 위한 확인 페이지이다. 
- 상품과 옵션, 수량, 가격을 확인할 수 있고, 구매 버튼을 통해 최종 결제 페이지로 넘어가게 된다. 
8. OrderDetailPage
- 구매 완료(최종 결제) 페이지이다. 
- 원래는 결제 PG사를 통해 실제 결제 기능이 중간에 추가되어야 하지만, 해당 기능은 생략하고 바로 결제가 완료되었을 때 보여지는 이미지를 나타낸 페이지이다. 
- 구입 시 발생할 수 있는 에러(상품이 없음, 잔액 부족, 토큰 만료 등)에 대해 ErrorPage로 넘어가서 해당 에러를 보여줄 수 있도록 구현하였다. 


# 배포 환경 설명
## Command
```bash
npm install # 의존성 모듈(node_modules) 설치
npm start # 테스트 환경
npm run build # 프로젝트 실행
```

## Directory Pattern
- src/components : Atomic Design Pattern을 사용하여 구성한 컴포넌트 디렉터리
- src/hooks : Custom Hook이 담긴 디렉터리
- src/layouts : GNB가 담긴 MainLayout과 로그인 시(인증된 사용자) 보여줄 수 있는 RequiredAuthLayout이 담긴 디렉터리
- src/pages : 컴포넌트를 사용하여 만든 상위 페이지 컴포넌트가 담긴 디렉터리
- src/routes : 페이지 간 이동을 위한 Router 디렉터리
- src/services : API 사용(get, post)을 위해 정의한 Axios instance 디렉터리
- src/store : redux를 사용하기 위해 만든 store와 각 정보를 담아서 처리할 slice 디렉터리
- src/utils : 페이지 제작 중 사용되는 comma(100단위별로 ,를 붙이는 함수), regex(정규식 설정 함수)가 담긴 디렉터리

## 크램폴린 IDE를 통해 배포
- 해당 내용은 로컬 환경이 아닌 크램폴린 IDE에서 github 정보를 가져와 작업했을 때의 단계이다. 
- 로컬 환경에서 작업 후 배포하려면 3~5번 단계 이후, 1번 단계부터 진행하면 된다. 
1. 컨테이너 생성
- github main 브랜치에 있는 내용을 가져와서 컨테이너를 생성
- Spring 또는 React 스택 결정
2. 의존성 모듈 설치
- `npm install` 명령어를 통해 프로젝트 내 사용된 라이브러리 설치
3. Static path 설정
- 앱 배포 시, 로컬에서 작업하는 환경과 달리 `URL.com/[uid]`와 같은 형태로 경로가 입력되기 때문에 domain 관련 설정이 필요
- `react-router-dom`을 사용하는 부분과 axios의 baseURL 부분을 아래와 같은 방식으로 수정
```javascript
const staticServerUrl = process.env.REACT_APP_PATH || "";
<BrowserRouter>
	<Routes>
		<Route path={staticServerUrl + "/login"} element={<Login />} />
	</Routes>
</BrowserRouter>	
```
4. 프로젝트 루트 디렉토리에 default.conf 파일과 Dockerfile 생성
- proxy_pass를 설정할 default.conf 파일 생성
```javascript
server {
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
    }
    
    location /api/ {
        proxy_pass http://backend-service.default.svc.cluster.local:8080/;
    }
}
```
- Dockerfile 생성
```Dockerfile
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/* && \
    rm /etc/nginx/sites-enabled/default
COPY default.conf /etc/nginx/conf.d/

RUN npm install -g serve

CMD npm run build && service nginx start && serve -s build
```
5. 변경사항을 github main 브랜치에 push
- 좌측에 있는 git 메뉴로 이동하여 변경된 사항을 add, commit, push 한다. 
6. 이미지 빌드 및 앱 배포하기
- 좌측에 있는 배포 메뉴로 이동하여 D2hub에 내 github의 main 브랜치 내용을 바탕으로 이미지를 생성
- 생성된 이미지를 가지고 Kargo 앱을 빌드하여 해당 앱에 배포
7. 완료 결과 확인
- 배포가 성공적으로 완료되면 url을 받게 되어서 배포된 웹사이트를 확인할 수 있다.

### 추가적인 사안 확인
- 수정사항이 발생하거나 앱의 빌드, 배포가 실패했을 경우 확인할 수 있는 방법이다. 
1. 수정사항 발생
- 배포한 앱의 코드를 수정할 경우, 코드 수정 후 D2hub의 이미지 빌드부터 다시 진행(해당 단계에서 변경내용이 저장되지 않았을 경우, github에 해당 내용이 push 되었는지 확인)
2. 빌드, 배포 실패 시 로그 확인
- `kubectl get pods`를 통해 배포된 pod의 목록을 조회하여 status에서 에러가 생긴 부분을 확인
- `kubectl logs [에러가 생긴 pod]`를 통해 pod의 로그를 확인

## 인스턴스 조건
- 해당 프로젝트에서 instance는 axios 방식으로 구현되었다. 
- axios에서는 get과 post 메서드를 사용하여 백엔드 API로부터 데이터를 가져온다. 
- middleware 방식으로 Header에 있는 Authorization JWT토큰 정보를 가져온다. 

## 배포 시 주의사항
1. 컨테이너 생성 시 자신이 개발한 스택에 맞게 생성한다. (FE -> React, BE -> Spring)
2. 최종 내용은 main 브랜치에 작성되도록 한다. 
3. .env, Dockerfile, default.conf 파일이 있는지, 제대로 작성되어 있는지 확인한다.
4. github 소스 코드에 변경 사항이 생기면 반드시 d2hub에 이미지 재빌드, kargo 앱 재배포 과정이 필요하다. 