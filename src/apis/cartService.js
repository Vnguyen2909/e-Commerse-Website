import axiosClient from "./axiosclient"

const addProductToCart = async (data) => {
    return await axiosClient.post('/cart',data)
}

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`)
}

const deleteItem = async (body) => {
    return await axiosClient.delete('/cart/deleteItem', {data: body})
}

export {addProductToCart, getCart, deleteItem}