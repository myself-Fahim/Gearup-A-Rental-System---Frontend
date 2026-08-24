"use server"

export const getAllGears = async () => {

    try {
        const res = await fetch(`${process.env.SERVER_API_URL}/api/gear`, {
            cache: 'force-cache',
            next: {
                revalidate: 60 * 60 * 2,
                tags: ['allGears']
            }
        })
        const result = await res.json()

        return result.data

    }
    catch (err: unknown) {
        console.log(err);
    }
}