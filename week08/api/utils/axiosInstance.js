import axios from 'axios';

// 서버에서 받은 토큰이 로컬 스토리지에 저장되어 있다고 가정
const token = localStorage.getItem('authToken'); // 예시로 로컬 스토리지에서 가져옵니다

// axios 인스턴스를 설정합니다.
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // API 서버 URL
  headers: {
    'Content-Type': 'application/json', // 요청 헤더에 content-type을 설정
    Authorization: token ? `Bearer ${token}` : '', // 토큰이 있으면 Authorization 헤더에 포함
  },
});

export default axiosInstance; // 다른 파일에서 import해서 사용
