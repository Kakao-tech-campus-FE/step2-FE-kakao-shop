const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/join', (req, res) => {
  const { email, password, username } = req.body;

  // 회원 가입 처리 로직을 구현합니다.
  // 성공 시 적절한 응답을 반환합니다.
  // 실패 시 에러 응답을 반환합니다.

  res.sendStatus(200);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // 로그인 처리 로직을 구현합니다.
  // 성공 시 적절한 응답을 반환합니다.
  // 실패 시 에러 응답을 반환합니다.

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`서버가 시작되었습니다. 포트: ${port}`);
});

