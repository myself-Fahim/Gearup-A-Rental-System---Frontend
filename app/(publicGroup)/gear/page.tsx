import React from 'react';
import { getAllGears } from '../_actions/publicAction';
import GearCard from '../_components/GearCardClient';
import { TGear } from '../_types/gear.type';
import Search from '../_components/Search';
import Filter from '../_components/Filter';



const GearPage = async () => {

    const allGearData = await getAllGears()

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="border-b border-border/70 pb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-primary">Explore the collection</p>
                        <div>
                            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Available gear</h1>
                            <p className="mt-2 text-sm text-muted-foreground">{allGearData.length} items ready for your next project.</p>
                        </div>
                    </div>
                    <Search></Search>
                </div>
                <Filter></Filter>
            </div>

            <div className='mt-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5'>
                {
                    allGearData.map((gear: TGear) => <GearCard key={gear.id} gear={gear} />)
                }
            </div>
        </section>
    );
};

export default GearPage;
