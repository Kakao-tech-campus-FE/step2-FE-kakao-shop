✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용**

```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

## 아토믹 디자인 패턴

- 컴포넌트를 재사용 가능한 단위로 분리하고 구성하는 방법론
- 재사용성과 유지보수성을 높이는데 도움
  - Atoms (원자)
  - Molecules (분자)
  - Organisms (유기체)
  - Templates (템플릿)

```
└─ src
   ├─ components
   │   ├─ atoms
   │   │   ├─ Box.jsx
   │   │   ├─ Button.jsx
   │   │   ├─ Container.jsx
   │   │   ├─ Input.jsx
   │   │   ├─ Label.jsx
   │   │   ├─ Logo.jsx
   │   │   └─ Text.jsx
   │   ├─ molecules
   │   ├─ organisms
   │   └─ templates
   │
   ├─ assets
   ├─ hooks
   ├─ pages
   │   ├─ HomePage.jsx
   │   ├─ LoginPage.jsx
   │   └─ RegisterPage.jsx
   │
   ├─ services
   │   └─ api
   ├─ utils
   ├─ store
   ├─ App.js
   └─ index.js

```
