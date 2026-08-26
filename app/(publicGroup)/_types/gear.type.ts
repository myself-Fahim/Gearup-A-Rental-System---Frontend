
export type TGear = {
    id : string;
    provider_id : string;
    category_id : string;   
    name : string;
    price_per_day : string;
    available_stock : number;
    is_available : boolean;
    created_At : string;
    updated_At : string;
    category:{
        name : string
    }
}


export type ICategory = {
    id: string;
    name: string;
    description: string;
    createdAt: string;  
}









