import React from 'react';
import CategoryNav from './CategoryNav';
import PerformanceInfo from './PerformanceInfo';
import PerformanceDetail from './PerformanceDetail';

export default function DetailContent() {
  return (
    <div>
      <PerformanceInfo />
      <CategoryNav />
      <PerformanceDetail />
    </div>
  );
}
