"use server"

import { cookies } from "next/headers"

export const getAllGears = async ({ searchQuery }: {
    searchQuery?: { [key: string]: string | string[] | undefined }
}) => {

    try {

        const params = new URLSearchParams()

        
        if(searchQuery?.search){
            params.set('search',String(searchQuery?.search))
        }

        if(searchQuery?.category){
            params.set('category',String(searchQuery.category))
        }

        if(searchQuery?.isAvailable){
             params.set('isAvailable',String(searchQuery.isAvailable))
        }

        const queryString = params.toString()

         

        // const search = searchQuery?.search ? `?search=${searchQuery.search}` : ''
        const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/?${queryString}`, {
            cache: 'no-store',
        })
        const result = await res.json()

        return result.data

    }
    catch (err: unknown) {
        console.log(err);
    }
}

export const getAllCategory = async () => {


    try {

        const res = await fetch(`${process.env.SERVER_API_URL}/api/categories`, {
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 24 * 5,
                tags: ['categories']
            }
        })

        const result = await res.json()
        return result

    } catch (err : unknown) {
        console.log(err);
    }

}

export const getGearById = async(gear_id : string) =>{

    try{
        const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/${gear_id}`, {
            cache: 'no-store',
        
        })
        const result = await res.json()
        return result

    }
    catch(err){
        console.log(err);
    }

}

type prevStateType = {
    success : boolean,
    message : string
}


export const rentGear = async(prevState : prevStateType,formData : FormData) =>{

    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    
    if(!accessToken){
         return {
            success: false,
            message: 'User not logged in'
        }
    }

    const payload = {
        gear_id : formData.get('gear_id'),
        startDate : formData.get('startDate'),
        endDate : formData.get('endDate')
    }

    const res = await fetch(`${process.env.SERVER_API_URL}/api/orders`,{
        method:'POST',
        headers: {
           "Authorization": `Bearer ${accessToken}`,
           "Content-Type": "application/json"
        },
        body:JSON.stringify(payload)

    })

    const result  = await res.json()
    console.log(result);
    
    return {
        success : result.success,
        message : result.message 
    }

    
}