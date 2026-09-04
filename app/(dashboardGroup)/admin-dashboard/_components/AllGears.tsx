import React from 'react';
import { getAllGears } from '../_actions/adminAction';
import { Card, CardContent } from '@/components/ui/card';
import { TGear } from '@/app/(publicGroup)/_types/gear.type';
import GearsTable from './GearsTable';

const AllGears = async () => {
    const gears = await getAllGears()
    const gearsData = gears.data

    return (
        <div>
            <Card className="mt-8">
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Price per day</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Provider</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Available Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gearsData.map((gear: TGear) => <GearsTable key={gear.id} gear={gear}></GearsTable>)}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AllGears;