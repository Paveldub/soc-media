import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'db0e5b87-b625-4714-9371-afb368cd0443',
  },
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`/users?page=${currentPage}&count=${pageSize}`, {})

    .then((response) => response.data);
};

export const headerAuth = () => {
  return instance.get(`/auth/me`, {});
};

export const profileUsers = (userId) => {
  return instance.get(`/profile/${userId}`);
};

export const getProfile = (userId) => {
  return instance.get(`/profile/${userId}`);
};

// status API
export const getUserStatus = (userId) => {
  return instance.get(`/profile/status/${userId}`);
};

export const updateUserStatus = (status) => {
  return instance.put(`/profile/status/`, { status: status });
};

export const authAPI = {
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
