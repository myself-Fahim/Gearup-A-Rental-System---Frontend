import React, { Suspense } from 'react';
import GearDetailsComponent from '../../_components/GearDetailsComponent';
import SkeletonLoader from '../../_components/Skeleton';


const GearByIdPage = ({params} : {params : Promise<{ id: string }>}) => {
 
  
    return (
        <div>
            <Suspense fallback={
                <SkeletonLoader></SkeletonLoader>
             
                }>
                  <GearDetailsComponent params= {params}></GearDetailsComponent>
            </Suspense>
          
        </div>
    );
};

export default GearByIdPage;