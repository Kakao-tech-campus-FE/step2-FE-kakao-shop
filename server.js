const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/join', (req, res) => {
  const { email, password, username } = req.body;
  res.sendStatus(200);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`서버가 시작되었습니다. 포트: ${port}`);
});
