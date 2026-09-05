import React, { Suspense } from 'react';
import InventoryLoad from '../_components/InventoryLoad';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';
import { AddGearModal } from '../_components/AddGearModal';
import { getAllCategory } from '@/app/(publicGroup)/_actions/publicAction';

const ManageInventoryPage = async() => {
    const categories = await getAllCategory() 
    const categoriesData = categories.data
    return (
        <div className='px-4 py-10 sm:px-6 sm:py-14 lg:px-8'>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/70 pb-5">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        My Gears
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        View all active gears on your platform in one place.
                    </p>
                </div>

                <AddGearModal categoriesData = {categoriesData}></AddGearModal>
            </div>
            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <InventoryLoad></InventoryLoad>
            </Suspense>
        </div>
    );
};

export default ManageInventoryPage;