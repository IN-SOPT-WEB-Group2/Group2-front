import { useEffect, useState } from 'react';
import { contentAPI } from './api';

export const useGetAllContentInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contentInfo, setContentInfo] = useState([]);
  const getAllContentInfo = async () => {
    setIsLoading(true);
    try {
      const res = await contentAPI.get('/content');
      setContentInfo([...contentInfo, res.data.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllContentInfo();
  }, []);

  return [isLoading, contentInfo];
};
