import React, { Suspense } from 'react';
import AllRental from '../_components/AllRental';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';

const Rentals = () => {
    return (
        <div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/70 pb-5">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Rental Orders
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        View all rental orders of every account on your platform in one place.
                    </p>
                </div>
            </div>
            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <AllRental></AllRental>
            </Suspense>
        </div>
    );
};

export default Rentals;