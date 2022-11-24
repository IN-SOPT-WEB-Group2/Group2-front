import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDayContentInfo } from '../../api/content';

export default function useGetDayContentInfo(date) {
  const { isLoading, data } = useQuery(['contentInfo', date], () => getDayContentInfo(date), {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  if (isLoading) {
    return <p>로딩중입니다...</p>;
  }

  return data;
}
