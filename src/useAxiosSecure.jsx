import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://demo-server-green.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    

    return axiosSecure;

}

export default useAxiosSecure