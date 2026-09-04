import React, { Suspense } from 'react';
import AllGears from '../_components/AllGears';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';

const ManageGears = () => {
    return (
        <div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-b border-border/70 pb-5">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                        Active Gears
                    </h1>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        View all active gears on your platform in one place.
                    </p>
                </div>
            </div>
            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <AllGears></AllGears>
            </Suspense>
        </div>
    );
};

export default ManageGears;