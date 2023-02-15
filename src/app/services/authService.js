import baseRequest from "../utils/baseRequest"

export const guestAuth = async () => {
    const response = await baseRequest('/customers/auth', 'POST', { type: 'guest' });
    return response;
};