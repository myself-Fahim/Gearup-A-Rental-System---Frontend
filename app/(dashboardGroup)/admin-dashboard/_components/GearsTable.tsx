"use client"
import { TGear } from '@/app/(publicGroup)/_types/gear.type';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const GearsTable = ({ gear }: { gear: TGear }) => {

    const router = useRouter()
    const handleGears = (id:string) =>{

        router.push(`/gear/${id}`)
    }
    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/50">

            <td className="py-4 pr-4">
                <p className="text-sm font-medium text-foreground">
                    {gear.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm">
                    {gear.category.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-medium">
                    {gear.price_per_day}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-medium">
                    {gear.provider?.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-medium">
                    {gear.available_stock}
                </p>
            </td>



            <td>
                <button onClick={() => handleGears(gear.id)}
                    className="
        inline-flex items-center gap-1.5
        rounded-md border border-border
        bg-primary/80 text-white px-3 py-1.5
        text-xs font-medium text-foreground
        shadow-sm
        transition-all
        hover:border-primary/40
        hover:bg-primary
        hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/30
    "
                >
                    <Eye className="h-3.5 w-3.5" />

                </button>
            </td>

        </tr>
    );
};

export default GearsTable;