import React from 'react';
import { getAllGears } from '../_actions/publicAction';
import { TGear } from '../_types/gear.type';
import GearCard from './GearCardClient';

const GearList = async ({ searchParams }: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) => {

    const searchQuery = await searchParams
    const allGearData = await getAllGears({ searchQuery })


    if (!allGearData)
        return <p className='text-center text-gray-500 mt-20 bg-white'>No data found</p>

    return (
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                allGearData.map((gear: TGear) => <GearCard key={gear.id} gear={gear} />)

            }
        </div>
    );
};

export default GearList;