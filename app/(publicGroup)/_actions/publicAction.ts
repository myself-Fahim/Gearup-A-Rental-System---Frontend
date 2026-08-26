"use server"

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