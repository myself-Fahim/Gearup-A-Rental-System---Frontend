"use server"

export const getAllGears = async ({ searchQuery }: {
    searchQuery?: { [key: string]: string | string[] | undefined }
}) => {

    try {


        const search = searchQuery?.search ? `?search=${searchQuery.search}`:''
        const res = await fetch(`${process.env.SERVER_API_URL}/api/gear/${search}`, {
            cache: 'no-store',
            // next: {
            //     revalidate: 60 * 60 * 2,
            //     tags: ['allGears']
            // }
        })
        const result = await res.json()

        return result.data

    }
    catch (err: unknown) {
        console.log(err);
    }
}