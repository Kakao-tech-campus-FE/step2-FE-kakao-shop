# KAKAO_CLONE_CODING

카카오 쇼핑하기 홈페이지를 간단하게 클론 코딩한 프로젝트이다.

# Command

```bash
npm install # 의존성 모듈 설치
npm run build # 패키지 번들링
npm run start # 프로젝트 실행
```

# Directory Pattern

- src/components : Atomic pattern으로 구성된 컴포넌트 디렉터리이다.
- src/hooks : 커스텀 hook이다.
- src/pages : 개별 페이지이다.
- src/services : 통신 모듈과 개별 API 함수이다.
- src/styles : css file 모음이다.

# 크램폴린 IDE를 통한 배포 순서
1. 크램폴린 IDE로 접속한다. (https://krampoline-ide.kakao.com/my/dashboard#/containers/new)
2. 컨테이너를 생성한다.
3. Frontend code가 포함된 소스저장소를 준비한다. (브랜치는 main으로 설정한다.)
4. React App의 static path 관련한 설정을 진행한다.
5. 프로젝트 루트 디렉토리에 default.conf 파일을 생성하고 nginx 설정을 진행한다.
6.  D2Hub 이미지 빌드에 필요한 Dockerfile을 생성한다.
7. 지금까지의 변경사항을 main 브랜치에 push한다.
8. 크램폴린IDE에서 해당 소스저장소를 연동한 React 스택의 실습 환경을 생성한다. 
9. D2hub > 레파지토리 생성을 진행한 후 레파지토리에서 이미지를 빌드한다.
10. Kargo App을 생성 후 배포하기를 진행한다.
11. 외부접속 URL을 설정하여 DKOS 클러스터에 배포된 자신의 app 구동을 확인한다.

# 배포에 영향 받는 브랜치
- main branch이다. 따라서 main에 push해야한다.

# 배포시 주의 사항
- 레포지토리가 private가 아닌 public이어야 가능하다.

# 배포 환경
- react이다.