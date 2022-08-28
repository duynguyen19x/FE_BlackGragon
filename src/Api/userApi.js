import axiosClient from "./axiosClient";

const userApi = {
    getAll: (params) => {
        const url = '/api/users';
        return axiosClient.get(url, { params });
    },

    gets: () => {
        const url = "/api/users";
        return axiosClient.get(url);
    }
}
export default userApi;

