import React, { Suspense } from 'react';
import GearDetailsComponent from '../../_components/GearDetailsComponent';

const GearByIdPage = ({params} : {params : Promise<{ id: string }>}) => {
 
  
    return (
        <div>
            <Suspense fallback={<div>loading.....</div>}>
                  <GearDetailsComponent params= {params}></GearDetailsComponent>
            </Suspense>
          
        </div>
    );
};

export default GearByIdPage;