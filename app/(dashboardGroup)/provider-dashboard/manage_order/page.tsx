import React, { Suspense } from 'react';
import OrderLoad from '../_components/OrderLoad';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';

const ManageOrderPage = () => {
    return (
       <div className='px-4 py-10 sm:px-6 sm:py-14 lg:px-8'>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/70 pb-5">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Incoming Orders
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Manage all the order status of your platform in one place.
                    </p>
                </div>
            </div>
            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
               <OrderLoad></OrderLoad>
            </Suspense>
        </div>
    );
};

export default ManageOrderPage;