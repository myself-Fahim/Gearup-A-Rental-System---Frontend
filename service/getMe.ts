"use server";

import { cookies } from "next/headers";


export const getMe = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
      
    }



    const res = await fetch(`${process.env.SERVER_API_URL}/api/auth/me`, {
      
        headers: {
            authorization: `Bearer ${accessToken}`
        },
        cache:'force-cache',
        next:{
            revalidate: 60 * 60 * 2,
            tags: ['profile'] 
            
        }
    })

    const result = res.json()
    return result

}