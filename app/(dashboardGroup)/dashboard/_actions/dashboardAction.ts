"use server"

import { cookies } from "next/headers"

export const getMyOrder = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/orders/myorder`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 6,
            tags:['my-order']
        }
    })

    const result = await res.json()
    return result


}
export const getMyOrderDetails = async (id:string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/orders/details/${id}`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 24,
            tags:['my-order-details']
        }
    })

    const result = await res.json()
    return result


}