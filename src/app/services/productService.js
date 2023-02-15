import baseRequest from "../utils/baseRequest"

export const getProduct = async (id) => {
    const response = await baseRequest(`/products/${id}?expand=prices,images`, 'GET');
    return response;
};