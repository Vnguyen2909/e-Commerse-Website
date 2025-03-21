import axiosClient from "./axiosclient"

const getProduct = async () =>{
    const res = await axiosClient.get('/product?page=1&limit=10');

    // console.log(res)
    return res.data;
}

export {getProduct};