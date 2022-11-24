import { contentAPI } from './api';

export const useGetAllMainInfo = async () => {
  try {
    const res = await contentAPI.get('/main');
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
