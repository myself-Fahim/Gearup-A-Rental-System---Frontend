"use client"
import { Skeleton } from '@/components/ui/skeleton';
import React, { useTransition } from 'react';
import Search from './Search';
import Filter from './Filter';
import { ICategory } from '../_types/gear.type';

const GearComponent = ({ children, categoryData }:
    {
        children: React.ReactNode
        categoryData: ICategory[]
    },

) => {
    const [isPending, startTransition] = useTransition()

    return (
        <div>

            <div className="border-b border-border/70 pb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-primary">Explore the collection</p>
                        <div>
                            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Available gear</h1>
                            <p className="mt-2 text-sm text-muted-foreground"> items ready for your next project.</p>
                        </div>
                    </div>
                    <Search startTransition={startTransition}></Search>
                </div>
                <Filter startTransition={startTransition} categoryData={categoryData}></Filter>
            </div>

            {isPending ? <Skeleton></Skeleton> : children}

        </div>
    );
};

export default GearComponent;