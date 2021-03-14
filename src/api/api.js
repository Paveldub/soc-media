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
