import axiosClient from "./axiosclient"

const getProduct = async (query) =>{

    const {sortType, page, limit} = query;  
    const queryLimit = limit === 'all' ? '': `limit=${limit}`;

    const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&${queryLimit}`);
    // console.log(res)
    return res.data;
}

export {getProduct};