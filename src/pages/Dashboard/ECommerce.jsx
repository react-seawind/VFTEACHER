import React, { useEffect, useState } from 'react';
import CardFour from '../../components/CardFour';
import CardOne from '../../components/CardOne';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';

const ECommerce = () => {
  // --------------------school data------------------------
  const [schoolData, setSchoolData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allSchool = await getAllSchool();
        setSchoolData(allSchool);
      } catch (error) {
        console.error('Error fetching School data:', error);
      }
    };

    fetchData();
  }, []);
  // --------------------Standard data------------------------
  const [StandardData, setStandardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allStandard = await getAllStandard();
        setStandardData(allStandard);
      } catch (error) {
        console.error('Error fetching School data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne schoolData={schoolData} />
        <CardTwo StandardData={StandardData} />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"></div>
    </div>
  );
};

export default ECommerce;
