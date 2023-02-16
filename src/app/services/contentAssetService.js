import baseRequest from '../utils/baseRequest'

export const getContentAsset = async (id) => {
  const response = await baseRequest(`/content/${id}`, 'GET')
  return response
}
