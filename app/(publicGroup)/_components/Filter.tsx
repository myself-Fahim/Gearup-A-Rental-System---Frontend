"use client"
import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { ICategory } from '../_types/gear.type';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const Filter = ({startTransition,categoryData}:{startTransition : React.TransitionStartFunction
    categoryData : ICategory[]}

) => {
    const pathname = usePathname()
    const urlParams = useSearchParams()
    const selectedCategory = urlParams.get('category') ?? ''
    const selectedStatus = urlParams.get('isAvailable') ?? ''
    const router = useRouter()
    
    const handleCategoryChange = (value: string) => {
        const params = new URLSearchParams(urlParams.toString())
        if (value) {
            params.set('category', value)
        }
        else {
            params.delete('category')
        }

        const queryString = params.toString()
      
           startTransition(()=>{
             router.replace(queryString ? `${pathname}?${queryString}`:`${pathname}`)
           })
    }


    const handleStatusChange = (value: string) => {

        const params = new URLSearchParams(urlParams)
        
        if(value){
            params.set('isAvailable',value)
        }
        else{
            params.delete('isAvailable')
        }
        const queryString = params.toString()
        startTransition(()=>{
             router.replace(queryString ? `${pathname}?${queryString}`: `${pathname}`)
        })
       
       
    }

    return (
        <div className="mt-6 flex  flex-col gap-3 rounded-2xl border border-border/70 bg-secondary/35 p-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 px-2 text-sm font-medium text-foreground">
                <SlidersHorizontal className="size-4 text-primary" />
                Filters
            </div>
            <div className="grid flex-1  gap-3 sm:grid-cols-3">
                <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)} aria-label="Filter by category" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                    <option value=''>All categories</option>
                    {categoryData.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
                <select value={selectedStatus} onChange={(e)=>handleStatusChange(e.target.value)} aria-label="Filter by availability" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                    <option value=''>All Status</option>
                    <option value='available'>Available</option>
                    <option value='unavailable'>Unavailable</option>
                </select>
                <select aria-label="Sort gear" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                    <option>Sort: newest</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;