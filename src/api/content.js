import { contentAPI } from './api';

export const getAllContentInfo = async () => {
  try {
    const res = await contentAPI.get('/content/3');
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
