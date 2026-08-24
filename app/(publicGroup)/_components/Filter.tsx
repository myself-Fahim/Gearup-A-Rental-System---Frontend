"use client"
import React from 'react';
import {SlidersHorizontal } from 'lucide-react';
const Filter = () => {
    return (
       <div className="mt-6 flex  flex-col gap-3 rounded-2xl border border-border/70 bg-secondary/35 p-3 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2 px-2 text-sm font-medium text-foreground">
                        <SlidersHorizontal className="size-4 text-primary" />
                        Filters
                    </div>
                    <div className="grid flex-1  gap-3 sm:grid-cols-3">
                        <select aria-label="Filter by category" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                            <option>All categories</option>
                            <option>Cameras</option>
                            <option>Lighting</option>
                            <option>Audio</option>
                            <option>Accessories</option>
                        </select>
                        <select aria-label="Filter by availability" className="h-10 w-full appearance-none rounded-xl border border-border/80 bg-background px-3 text-sm text-foreground shadow-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20">
                            <option>Availability</option>
                            <option>Available</option>
                            <option>Unavailable</option>
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