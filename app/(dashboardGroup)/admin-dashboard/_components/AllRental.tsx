import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { getAllOrder } from '../_actions/adminAction';
import RentalTable from './RentalTable';
import { RentalType } from '../../_types/dashboard.type';

const AllRental = async () => {
    const rentals = await getAllOrder()
    const rentalData = rentals.data


    return (
        <div>
            <Card className="mt-8">
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Customer</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Gear</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rentalData.map((rental : RentalType) => <RentalTable key={rental.id} rental={rental}></RentalTable>)}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
};

export default AllRental;