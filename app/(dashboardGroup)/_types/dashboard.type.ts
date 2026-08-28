export type orderDataType = {
    id: string;
    customer_id: string;
    gear_id: string;
    status: string;
    total_amount: string;
    startDate: string;
    endDate: string;
    created_At: string;
    updatedAt: string;
    gear: {
        name: string;
    };
}


export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

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

