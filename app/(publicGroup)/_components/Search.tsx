
"use client"
import { Input } from '@/components/ui/input';
import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
    return (
        <div className="relative w-full sm:max-w-sm">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
                type="search"
                placeholder="Search gear by availability, category, or name..."
                aria-label="Search gear"
                className="h-11 rounded-full border-border/80 bg-secondary/50 py-2 pr-4 pl-11 text-sm shadow-sm transition-shadow placeholder:text-muted-foreground focus-visible:bg-background focus-visible:ring-primary/20"
            />
        </div>
    );
};

export default Search;