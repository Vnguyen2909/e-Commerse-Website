import axiosClient from "./axiosclient"

const register = async (body) =>{
    return await axiosClient.post('/register', body);
}
 
export {register};