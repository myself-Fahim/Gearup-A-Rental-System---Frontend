import React from 'react';
import { getMyOrder } from '../_actions/dashboardAction';
import { orderDataType } from '../../_types/dashboard.type';
import ReviewCard from './ReviewCard';

const Review = async() => {
    const orders = await getMyOrder() 
    const ordersData = orders.data
    const orderToShow = ordersData.filter((order: orderDataType) => order.status === 'RETURNED')


    if(!orderToShow || orderToShow.length == 0){
        return <p className='text-center text-gray-500'>No returned gear</p>
    }
    return (
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
           {
            orderToShow.map((order: orderDataType) =><ReviewCard key={order.id} order={order}></ReviewCard> )
           }
        </div>
    );
};

export default Review;