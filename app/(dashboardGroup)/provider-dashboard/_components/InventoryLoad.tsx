import React from 'react';
import { getMyGears } from '../_actions/provider.action';
import { Card, CardContent } from '@/components/ui/card';
import InventoryTable from './InventoryTable';
import { TGear } from '@/app/(publicGroup)/_types/gear.type';

const InventoryLoad = async () => {
    const myGears = await getMyGears()
    const myGearsData = myGears.data
    
    return (
        <div>
            <Card className="mt-8">
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-170 text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Name</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Price Per Day</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Available Stock</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Status</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myGearsData.map((gear: TGear) => <InventoryTable key={gear.id} gear={gear}></InventoryTable>)}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InventoryLoad;