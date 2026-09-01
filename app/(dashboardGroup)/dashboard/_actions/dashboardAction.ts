"use server"


import { updateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { reviewResponse } from "../../_types/dashboard.type"

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

    })

    const result = await res.json()
    return result


}
export const getMyOrderDetails = async (id: string) => {
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
            tags: ['my-order-details']
        }
    })

    const result = await res.json()
    return result


}

export const payNow = async (id: string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/payments/checkout/${id}`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
    })

    const result = await res.json()
    if (result.success) {
        updateTag('my-order')
        updateTag('my-payments')
        redirect(result.data.checkoutUrl)
    }
    return result

}


export const createReview = async (prevState: reviewResponse, formData: FormData) => {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const gear_id = formData.get('gear_id')
    const rating = Number(formData.get('rating'))
    const comment = formData.get('comment')

    const payload = {
        gear_id,
        rating,
        comment
    }


    const res = await fetch(`${process.env.SERVER_API_URL}/api/reviews`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type": "application/json"
        },

        body: JSON.stringify(payload)
    })

    const result = await res.json()

    return result

}

export const getMyPayments = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/payments/my`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 24,
            tags: ['my-payments']
        }
    })

    const result = await res.json()
    return result


}
