"use server";

import { updateTag } from "next/cache";
import { cookies } from "next/headers";


export const updateProfile = async (prevState : {success:boolean,message:string},formData : FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in'
        }
      
    }


    const name = formData.get('name')
    const email = formData.get('email')
    const image_url = formData.get('image')
    const id = formData.get('id')


    const payload = {
        name,
        email,
        image_url
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/user/profile/${id}`, {

        method:"PATCH",
        headers: {
            authorization: `Bearer ${accessToken}`,
            "content-type" : "application/json"
        },
        body:JSON.stringify(payload),
    })

    
    const result = await res.json()
    if(result.success){
        updateTag('profile')
    }

    return result

}
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

    const result = await res.json()
    return result

}