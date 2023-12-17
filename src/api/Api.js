import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// axiosInstance 생성
const axiosInstance = axios.create({
  baseURL: 'http://3.39.14.156:8080/api',
  // 기타 설정...
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
    async (config) => {
      // AsyncStorage에서 토큰을 가져와 헤더에 추가
      const accessToken = await AsyncStorage.getItem('access-token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

// 회원 API
const memberApi = {
  signUp: async (data) => {
    const response = await axiosInstance.post('/members/sign-up', data);
    return response;
  },
  signIn: async (data) => {
    const response = await axiosInstance.post('/members/sign-in', data);
    return response;
  },
  reissue: async (data) => {
    const response = await axiosInstance.post('/members/reissue', data);
    return response;
  },
  getMyInfo: async () => {
    const response = await axiosInstance.get('/members/me');
    return response;
  },
  checkEmail: async (email) => {
    const response = await axiosInstance.get(`/members/check-email?email=${email}`);
    return response;
  }
  

}
export default memberApi;

// 장바구니 API

// 주문 API
const purchaseApi = {
  tryPurchase: async (data) => {
    const response = await axiosInstance.post('/purchase/trypurchase', data);
    return response;
  }
}
export {purchaseApi};

// 상품 API