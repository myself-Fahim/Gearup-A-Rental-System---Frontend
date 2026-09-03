
"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const FilterUser = ({ startTransition }: { startTransition: React.TransitionStartFunction }) => {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const role = searchParams.get('role') || ''
    const status = searchParams.get('status') || ''

    const handleRole = (value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('role', value)
        }
        else {
            params.delete('role')
        }

        const queryString = params.toString()
        const url = queryString ? `${pathname}?${queryString}` : `${pathname}`
        startTransition(() => {

            router.replace(url)
        })
    }

    const handleStatus = (value: string) => {

        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('status', value)
        }
        else {
            params.delete('status')
        }

        const queryString = params.toString()
        const url = queryString ? `${pathname}?${queryString}` : `${pathname}`

        startTransition(() => {
            router.replace(url)
        })
    }



    return (
        <div className="mt-6 flex  flex-col gap-3 rounded-2xl border border-border/70 bg-secondary/35 p-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 px-2 text-sm font-medium text-foreground">
                Filters
            </div>
            <div className="grid flex-1  gap-3 sm:grid-cols-2">
                <select defaultValue={role} onChange={(e) => handleRole(e.target.value)} aria-label="Filter by category" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                    <option value=''>All Role</option>
                    <option value='customer'>Customer</option>
                    <option value='provider'>Provider</option>

                </select>

                <select defaultValue={status} onChange={(e) => handleStatus(e.target.value)} aria-label="Filter by availability" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                    <option value=''>All Status</option>
                    <option value='activate'>Activate</option>
                    <option value='suspend'>Suspend</option>
                </select>

            </div>
        </div>
    );
};

export default FilterUser;