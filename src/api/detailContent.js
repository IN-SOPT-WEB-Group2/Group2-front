import { useEffect, useState } from 'react';
import { contentAPI } from './api';

export const useGetDetailContentInfo = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [contentDetailInfo, setContentDetailInfo] = useState([]);
  const getDetailContentInfo = async () => {
    setIsLoading(true);
    try {
      const res = await contentAPI.get('/content/' + id);
      setContentDetailInfo([...contentDetailInfo, res.data.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDetailContentInfo();
  }, []);
  return [isLoading, contentDetailInfo];
};
