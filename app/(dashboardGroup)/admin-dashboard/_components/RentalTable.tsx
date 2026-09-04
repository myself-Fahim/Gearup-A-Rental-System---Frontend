"use client"
import React from 'react';
import { RentalType } from '../../_types/dashboard.type';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RentalTable = ({ rental }: { rental: RentalType }) => {

    const router = useRouter()
    const handleDetails=(id:string)=>{
        router.push(`/admin-dashboard/rentals/${id}`)
    }

    const statusStyles: Record<string, string> = {
        RETURNED: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",
        PENDING: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-400",
        CONFIRM: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
        PICKED_UP: "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400",
        CANCELED: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400",
    };

    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/50">

            <td className="py-4 pr-4">
                <p className="text-sm font-medium text-foreground">
                    {rental.customer.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm">
                    {rental.gear.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-medium">
                    {rental.total_amount}
                </p>
            </td>

            <td className="py-4 pr-4">
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[rental.status] ??
                        "bg-muted text-muted-foreground"
                        }`}
                >
                    {rental.status.replace("_", " ")}
                </span>
            </td>

            <td>
                <button onClick={()=>handleDetails(rental.id)}
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

export default RentalTable;