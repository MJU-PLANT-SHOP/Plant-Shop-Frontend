import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseURL = "http://3.39.14.156:8080/api";

// AsyncStorage에서 토큰을 가져와서 axios 헤더에 설정
const setAuthorizationHeader = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('access-token');
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    }
  } catch (error) {
    console.error("토큰을 가져오는 중 오류가 발생했습니다.", error);
  }
};

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: baseURL,
});

// axios 인스턴스에 헤더 설정 함수를 추가
axiosInstance.interceptors.request.use(async (config) => {
  await setAuthorizationHeader();
  return config;
});

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

// 상품 API