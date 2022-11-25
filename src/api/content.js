import { contentAPI } from './api';

export const getAllContentInfo = async () => {
  try {
    const res = await contentAPI.get('/content');
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDayContentInfo = async (date) => {
  try {
    const res = await contentAPI.get(`/content/date?date=${date}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
