import React, { useEffect, useState } from 'react';
import { SubSlider } from './SubSlider';
import { useGetAllMainInfo } from '../../api/main';
export default function Tickets() {
  const [ticketsData, setTicketsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await useGetAllMainInfo();
      const slicedData = await data.slice(0, 8);
      setTicketsData([...slicedData]);
    };
    getData();
  }, []);
  return <SubSlider ticket={true} title={'티켓 오픈'} data={ticketsData}></SubSlider>;
}
