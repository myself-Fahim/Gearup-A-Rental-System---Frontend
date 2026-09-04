"use client"
import React, { useTransition } from 'react';
import SeachUser from './SeachUser';
import FilterUser from './FilterUser';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';

const ManageUserComponents = ({ children }: { children: React.ReactNode }) => {
    const [isPending, startTransition] = useTransition()
    return (

        <div>
            <div className="border-b border-border/70 pb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-xl">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            User management
                        </h1>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            View, manage, and monitor every account on your platform in one place.
                        </p>
                    </div>
 
                    <SeachUser startTransition = {startTransition}></SeachUser>
                </div>
                <FilterUser startTransition = {startTransition}></FilterUser>
            </div>

            {isPending && <SkeletonLoader></SkeletonLoader>}

            {children} 

        </div>


    );
};

export default ManageUserComponents;