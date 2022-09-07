import axios, {Axios} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{'API-KEY':'0399e66c-cf60-42b5-a883-aa10c6d4c43a'}
})

export const usersApi = {
    getUsers (pageSize: number=100, currentPage: number=1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then((response)=>response.data);
    }
}
export const followApi = {
    postFollow (userId:number) {
        return instance.post(`follow/${userId}`)
            .then((response)=>response.data);
    },
    deleteUnFollow (userId:number) {
        return instance.delete(`follow/${userId}`)
            .then((response)=>response.data);
    }
}
export const authApi = {
    getAuth () {
        return instance.get('auth/me')
            .then((response)=>response.data);
    }
}
export const profileApi = {
    getProfile (userId:string) {
        return instance.get(`profile/${userId}`)
            .then((response)=>response.data);
    }
}
