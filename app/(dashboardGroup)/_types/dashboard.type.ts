export type orderDataType = {
    id: string;
    customer_id: string;
    gear_id: string;
    status: string;
    total_amount: string;
    isReviewed: boolean;
    startDate: string;
    endDate: string;
    created_At: string;
    updatedAt: string;
    gear: {
        name: string;
    };
}


export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PICKED_UP' | 'CANCELED' | 'RETURNED';

export type OrderDetails = {
    id: string;
    customer_id: string;
    gear_id: string;
    status: OrderStatus;
    total_amount: string;
    startDate: string;
    endDate: string;
    created_At: string;
    updatedAt: string;
    gear: {
        id: string;
        provider_id: string;
        category_id: string;
        name: string;
        price_per_day: string;
        available_stock: number;
        is_available: boolean;
        created_At: string;
        updated_At: string;
    };
};

export type paymentType = {
    id: string;
    order_id: string;
    status: string;
    method: string;
    transaction_id: string;
    amount: string;
    provider: string | null;
    paidAt: string;
    order: orderDataType;
    gear: {
        id: string;
        provider_id: string;
        category_id: string;
        name: string;
        price_per_day: string;
        available_stock: number;
        is_available: boolean;
        created_At: string;
        updated_At: string;
    }
};


export type reviewResponse = {
    success: boolean,
    message: string
}

export type UserType = {
    id: string;
    name: string;
    email: string;
    role: 'PROVIDER' | 'CUSTOMER';
    status: 'activate' | 'suspend';
    image_url: string | null;
    created_At: string;
    updated_At: string;
}

export type RentalType = {


    id: string,
    customer_id: string,
    gear_id: string,
    status: string,
    total_amount: string,
    isReviewed: boolean,
    startDate: string,
    endDate: string,
    created_At: string,
    updatedAt: string,
    customer: { name: string },
    gear: { name: string }

}



export type IUser = {
    success: boolean,
    message: string,
    data: {
        id: string,
        name: string,
        email: string,
        role: string,
        status: string,
        image_url: string | null,
        created_At: string,
        updated_At: string
    }
}


