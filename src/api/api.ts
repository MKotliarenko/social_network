import axios, {Axios} from "axios";
import {LoginDataType} from "../Redux/auth-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': '0399e66c-cf60-42b5-a883-aa10c6d4c43a'}
})

export const usersApi = {
    getUsers(pageSize: number = 100, currentPage: number = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response) => response.data);
    }
}
export const followApi = {
    postFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then((response) => response.data);
    },
    deleteUnFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then((response) => response.data);
    }
}
export const authApi = {
    getAuth() {
        return instance.get('auth/me')
            .then((response) => response.data);
    },
    postLogin(loginData:LoginDataType) {
        return instance.post('auth/login', {email:loginData.email, password:loginData.password, rememberMe:loginData.rememberMe})
            .then((response)=>response.data);
    },
    deleteLogout() {
        return instance.post('auth/login')
            .then((response)=>response.data);
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then((response) => response.data);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then((response) => response.data);
    },
    changeStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
            .then((response) => response.data)
    }
}
