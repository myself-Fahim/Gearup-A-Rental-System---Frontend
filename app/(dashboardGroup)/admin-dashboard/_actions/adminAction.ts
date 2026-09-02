"use server"

import { updateTag } from "next/cache"
import { cookies } from "next/headers"

export const updateUserStatus = async (status: string, id: string) => {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const payload = {
        status
    }



    const res = await fetch(`${process.env.SERVER_API_URL}/api/user/${id}`, {
        method: "PATCH",
        headers: {
            "authorization": `Bearer ${accessToken}`,
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    })


    const result = await res.json()

    if (!result) {
        return {
            success: false,
            message: "Something went wrong"
        }
    }

    if(result.success){
        updateTag('users')
    }
    
    return result

}
export const getAllUser = async () => {

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/user`, {
        headers: {
            "authorization": `Bearer ${accessToken}`,
        },
        cache: "force-cache",
        next: {
            revalidate: 60 * 60 * 24,
            tags: ['users']
        }
    })

    const result = await res.json()
    return result

}