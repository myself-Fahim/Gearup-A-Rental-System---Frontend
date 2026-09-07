"use client"
import React from 'react';
import { orderDataType } from '../../_types/dashboard.type';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { CalendarDays, User } from 'lucide-react';
import { updateMyProductStatus } from '../_actions/provider.action';
import { toast } from 'sonner';

const OrderTable = ({ order }: { order: orderDataType }) => {


    const handleStatus= async(value : string , orderId : string ) =>{
        const result = await updateMyProductStatus(value,orderId)
        if(result.success){
            toast.success(result.message || 'Order status updated')
        }
        else{
            toast.error(result.message || 'Failed to update status')
        }
    }

    const statusStyles: Record<string, string> = {
        PENDING: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
        CONFIRM: "bg-blue-500/10 text-blue-600 border-blue-500/20",
        PICKED_UP: "bg-purple-500/10 text-purple-600 border-purple-500/20",
        RETURNED: "bg-green-500/10 text-green-600 border-green-500/20",
        CANCELED: "bg-red-500/10 text-red-600 border-red-500/20",
    };

    const formatDate = (date: string | Date) => {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/40">

            {/* Customer */}
            <td className="py-4 pr-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="h-4 w-4" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-foreground">
                            {order.customer?.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Customer
                        </p>
                    </div>
                </div>
            </td>

            {/* Amount */}
            <td className="py-4 pr-5">
                <p className="text-sm font-bold text-foreground">
                    ৳{order.total_amount}
                </p>
                <p className="text-xs text-muted-foreground">
                    Total amount
                </p>
            </td>

            {/* Start Date */}
            <td className="py-4 pr-5">
                <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />

                    <div>
                        <p className="text-sm font-medium text-foreground">
                            {formatDate(order.startDate)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Start date
                        </p>
                    </div>
                </div>
            </td>

            {/* End Date */}
            <td className="py-4 pr-5">
                <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />

                    <div>
                        <p className="text-sm font-medium text-foreground">
                            {formatDate(order.endDate)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            End date
                        </p>
                    </div>
                </div>
            </td>

            {/* Status */}
            <td className="py-4 pr-5">
                <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                    {order.status.replace("_", " ")}
                </span>
            </td>

            {/* Actions */}
            <td className="py-4">
                <Select onValueChange={(value)=>handleStatus(value,order.id)} defaultValue={order.status}>
                    <SelectTrigger className="h-9 w-33.75 bg-background text-xs font-medium">
                        <SelectValue placeholder="Update status" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="PENDING">
                            Pending
                        </SelectItem>

                        <SelectItem value="CONFIRM">
                            Confirm
                        </SelectItem>

                        <SelectItem value="PICKED_UP">
                            Picked Up
                        </SelectItem>

                        <SelectItem value="RETURNED">
                            Returned
                        </SelectItem>

                        <SelectItem value="CANCELED">
                            Canceled
                        </SelectItem>
                    </SelectContent>
                </Select>
            </td>

        </tr>
    );
};

export default OrderTable;