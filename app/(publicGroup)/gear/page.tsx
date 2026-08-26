import React, { Suspense } from 'react';

import Search from '../_components/Search';
import Filter from '../_components/Filter';
import GearList from '../_components/GearList';
import SkeletonLoader from '../_components/Skeleton';
import { getAllCategory } from '../_actions/publicAction';
import GearComponent from '../_components/GearComponent';





const GearPage = async({searchParams} : {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) => {


    const categories  = await getAllCategory()
    const categoryData = categories?.data || []

  
 

    return (
        
        <section className="px-4 py-10 sm:px-6 lg:px-8">
             <GearComponent categoryData = {categoryData}>
                <Suspense fallback={<SkeletonLoader />}>
                    <GearList searchParams = {searchParams} />
                </Suspense>
             </GearComponent>
          
        </section>
    
    );
};

export default GearPage;
