import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { getMyProductOrders } from '../_actions/provider.action';
import OrderTable from './OrderTable';
import { orderDataType } from '../../_types/dashboard.type';

const OrderLoad = async() => {

    const orders = await getMyProductOrders()
    const ordersData = orders.data

    if(!ordersData || ordersData.length === 0){
        return <p className='text-gray-500 text-center mt-30'>No incoming order</p>
    }
    return (
        <div>
              <Card className="mt-8">
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-170 text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Order By</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Total Amount</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Start Date</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">End Date</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Status</th>
                                    <th className="pb-3 text-xs font-medium text-muted-foreground uppercase ">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order : orderDataType) => <OrderTable key={order.id} order ={order}></OrderTable>)}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default OrderLoad;