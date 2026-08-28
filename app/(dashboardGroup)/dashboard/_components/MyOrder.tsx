import React from 'react';
import { getMyOrder } from '../_actions/dashboardAction';
import MyOrderCard from './MyOrderCard';
import { orderDataType } from '../../_types/dashboard.type';

const MyOrder = async()=> {
    const orders = await getMyOrder() 
    const ordersData = orders.data
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            ordersData.map((order: orderDataType) => <MyOrderCard key={order.id} order = {order}></MyOrderCard>)
           }
        </div>
    );
};

export default MyOrder;