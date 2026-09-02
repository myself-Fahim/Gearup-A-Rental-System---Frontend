
"use client"
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const Search = ({startTransition}:{startTransition : React.TransitionStartFunction}) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search') ?? ''
    const router = useRouter()
    const pathname = usePathname()

    const [key, setKey] = useState('')


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setKey(search)
    }, [search])


    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

          

            if (key) {
                params.set('search', key)
            }
            else {
                params.delete('search')
            }

            const queryString = params.toString()
            const nextUrl = queryString ? `${pathname}?${queryString}` : pathname
            if (nextUrl !== `${pathname}${searchParams.size ? `?${searchParams.toString()}` : ''}`) {
               startTransition(()=>{
                 router.replace(nextUrl)
               })
            }


        }, 500)

        return () => clearTimeout(timer)

    }, [key, pathname, router, searchParams, search,startTransition])






    return (
        <div className="relative w-full sm:max-w-sm">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input

                value={key}
                onChange={(e) => setKey(e.target.value)}
                type="search"
                placeholder="Search gear by category, or name..."
                aria-label="Search gear"
                className="h-11 rounded-full border-border/80 bg-secondary/50 py-2 pr-4 pl-11 text-sm shadow-sm transition-shadow placeholder:text-muted-foreground focus-visible:bg-background focus-visible:ring-primary/20"
            />
        </div>
    );
};

export default Search;