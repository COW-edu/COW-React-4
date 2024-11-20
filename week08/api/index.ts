import { createConnection } from './models/db';
import app from './app';
import cors from 'cors';

createConnection();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

// CORS 설정
app.use(
  cors({
    origin: 'http://localhost:5173', // React 클라이언트 주소
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메서드
    credentials: true, // 쿠키 전송 허용 시 true 설정
  })
);
