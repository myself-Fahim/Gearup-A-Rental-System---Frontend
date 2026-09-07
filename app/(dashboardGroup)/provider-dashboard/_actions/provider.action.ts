"use server"

import { revalidatePath, updateTag } from "next/cache"
import { cookies } from "next/headers"

export const getMyGears = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/my_gears`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
        next: {
            revalidate: 60 * 60 * 24,
            tags: ['provider-gears']
        }
    })

    const result = await res.json()
    return result

}




export const getMyProductOrders = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/orders/provider/orders`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
    })

    const result = await res.json()
    return result

}



export const updateMyProductStatus = async (status_value:string,id:string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const payload = {
        status : status_value.toUpperCase()
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/orders/provider/orders/${id}`, {
        method:"PATCH",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type" : "application/json"
        },
        body:JSON.stringify(payload)
      
    })

    const result = await res.json()
    if(result.success){
        revalidatePath('/provider-dashboard/manage_order')
    }
    return result

}



export const createGear = async (prevState:{success:boolean,message:string},formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }


    const name = formData.get('name')
    const category_id = formData.get('category')
    const price_per_day = Number(formData.get('price'))
    const available_stock = Number(formData.get('stock'))
    const image = formData.get('image')

    const payload = {
        name,
        category_id,
        price_per_day,
        available_stock,
        image
    }
   
    const res = await fetch(`${process.env.SERVER_API_URL}/api/gear`, {
        method:"POST",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type" : "application/json"
        },
        body:JSON.stringify(payload),
    })

    const result = await res.json()

    if(result.success){
        updateTag('provider-gears')
        updateTag('allgears')
    }

    return result

}


export const updateGear = async (prevState:{success:boolean,message:string},formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const is_available = formData.get('status') === 'true'
    const price_per_day = Number(formData.get('price'))
    const available_stock = Number(formData.get('stock'))
    const gear_id = formData.get('id')
  

    const payload = {
        is_available,
        price_per_day,
        available_stock
    }

   
    const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/${gear_id}`, {
        method:"PATCH",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type" : "application/json"
        },
        body:JSON.stringify(payload),
    })

    const result = await res.json()

    if(result.success){
        updateTag('provider-gears')
        updateTag('allgears')
    }

  
    return result

}


export const deleteGear = async (id:string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/${id}`, {
        method:"DELETE",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type" : "application/json"
        },
    })

    const result = await res.json()

    if(result.success){
        updateTag('provider-gears')
        updateTag('allgears')
    }

  
    return result

}