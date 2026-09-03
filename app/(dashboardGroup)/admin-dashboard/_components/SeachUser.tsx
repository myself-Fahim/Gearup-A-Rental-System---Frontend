"use client"
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const SeachUser = ({ startTransition }: { startTransition: React.TransitionStartFunction }) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search') || ''
    const pathname = usePathname()
    const router = useRouter()
    const [key, setKey] = useState(search)







    useEffect(() => {

        const params = new URLSearchParams(searchParams.toString())
        const timer = setTimeout(() => {
            if (key) {
                params.set('search', key)
            }
            else {
                params.delete('search')
            }

            const queryString = params.toString()
            const url = queryString ? `${pathname}?${queryString}` : `${pathname}`
            startTransition(() => {
                router.replace(url)
            })
        }, 500)

        return () => clearTimeout(timer)

    }, [key])




    return (

        <div className="relative w-full sm:max-w-sm">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
                onChange={(e) => setKey(e.target.value)}
                type="search"
                value={key}
                placeholder="Search by name or email"
                aria-label="Search gear"
                className="h-11 rounded-full border-border/80 bg-secondary/50 py-2 pr-4 pl-11 text-sm shadow-sm transition-shadow placeholder:text-muted-foreground focus-visible:bg-background focus-visible:ring-primary/20"
            />
        </div>
    );
};

export default SeachUser;