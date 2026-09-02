"use server"

import { updateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type prevState = {
    success: boolean,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string,
        user: {
            role: string
        }

    }
}

type registerPrevState = {
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


export const loginAction = async (prev_state: prevState, formData: FormData) => {

    const email = formData.get('email')
    const password = formData.get('password')

    const payload = {
        email,
        password
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    const result: prevState = await res.json()


    if (result.success) {
        const cookieStore = await cookies()
        cookieStore.set('accessToken', result.data.accessToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 2,
        })
        cookieStore.set('refreshToken', result.data.refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 15,
        })


        if (result.data.user.role === 'ADMIN') {
            redirect('/admin-dashboard')
        }

        else if (result.data.user.role === 'PROVIDER') {
            redirect('/provider-dashboard')
        }

        else {
            redirect('/dashboard')
        }
    }

    return result

}


export const registerAction = async (reg_prev_state: registerPrevState, formData: FormData) => {




    const name = formData.get('name')
    const email = formData.get('email')
    const image = formData.get('image')
    const role = formData.get('role')
    const password = formData.get('password')

    const payload = {
        name,
        email,
        ...(image ? { image } : {}),
        role,
        password
    }




    const res = await fetch(`${process.env.SERVER_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const result = await res.json()

    if(result.success){
        updateTag('users')
    }
    return result


}


