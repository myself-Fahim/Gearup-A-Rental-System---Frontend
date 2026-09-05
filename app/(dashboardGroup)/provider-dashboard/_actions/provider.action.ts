"use server"

import { updateTag } from "next/cache"
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
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ['provider-gears']
        }
    })

    const result = await res.json()
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