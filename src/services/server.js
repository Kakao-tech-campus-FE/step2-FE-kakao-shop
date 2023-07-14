const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/join', (req, res) => {
  const { email, password, username } = req.body;

  if (email && password && username) {
    // 회원 가입 성공
    res.status(200).json({ success: true, response: null, error: null });
  } else {
    // 회원 가입 실패
    res.status(400).json({ success: false, response: null, error: '회원 가입 실패' });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    // 로그인 성공
    res.status(200).json({ success: true, response: null, error: null });
  } else {
    // 로그인 실패
    res.status(400).json({ success: false, response: null, error: '로그인 실패' });
  }
});

app.listen(port, () => {
  console.log(`서버가 시작되었습니다. 포트: ${port}`);
});



