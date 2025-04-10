import axiosClient from "./axiosclient"

const register = async (body) =>{
    return await axiosClient.post('/register', body);
}

const signIn = async (body ) =>{
    return await axiosClient.post('/login', body)
}

const getInfo = async () => {
    return await axiosClient.get('/user/info/6854bd1c-0196-4174-8703-669cb759c50e');
}
 
export {register, signIn, getInfo};