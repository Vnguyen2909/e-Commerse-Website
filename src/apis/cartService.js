import axiosClient from "./axiosclient"

const addProductToCart = async (data) => {
    return await axiosClient.post('/cart',data)
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}

export {addProductToCart, getCart}