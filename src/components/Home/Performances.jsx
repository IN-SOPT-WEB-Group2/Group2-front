import React, { useEffect, useState } from 'react';
import { SubSlider } from './SubSlider';
import { useGetAllMainInfo } from '../../api/main';
export default function Performances() {
  const [performancesData, setPerformancesData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await useGetAllMainInfo();
      const slicedData = await data.slice(-8);
      setPerformancesData([...slicedData]);
    };
    getData();
  }, []);
  return (
    <SubSlider
      exhibit={true}
      moreInfo={'전체 일정 보기'}
      title={'이번 주 공연/전시'}
      data={performancesData}
    ></SubSlider>
  );
}
