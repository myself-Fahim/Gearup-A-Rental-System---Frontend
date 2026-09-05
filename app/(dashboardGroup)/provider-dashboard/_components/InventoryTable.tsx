
import { TGear } from '@/app/(publicGroup)/_types/gear.type';
import { Edit, Trash2 } from 'lucide-react';
import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import EditGearModal from './EditGearModal';

const InventoryTable = ({ gear }: { gear: TGear }) => {
    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/40">

            {/* Gear Name */}
            <td className="py-4 pr-4">
                <p className="text-sm font-semibold text-foreground">
                    {gear.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                    Equipment
                </p>
            </td>

            {/* Price */}
            <td className="py-4 pr-4">
                <p className="text-sm font-semibold text-foreground">
                    ৳{gear.price_per_day}
                    <span className="ml-1 text-xs font-normal text-muted-foreground">
                        / day
                    </span>
                </p>
            </td>

            {/* Stock */}
            <td className="py-4 pr-4">
                <span className="inline-flex min-w-10 items-center justify-center rounded-md bg-muted px-2.5 py-1 text-sm font-semibold text-foreground">
                    {gear.available_stock}
                </span>
            </td>

            {/* Availability */}
            <td className="py-4 pr-4">
                <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${gear.is_available
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'bg-red-500/10 text-red-600 dark:text-red-400'
                        }`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${gear.is_available
                                ? 'bg-emerald-500'
                                : 'bg-red-500'
                            }`}
                    />

                    {gear.is_available ? 'Active' : 'Inactive'}
                </span>
            </td>

            {/* Actions */}
            <td className="py-4">
                <div className="flex items-center gap-2">

                    {/* Update */}
                  <EditGearModal gear={gear}></EditGearModal>

                    {/* Delete */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span>
                                    <button
                                        disabled={gear.is_available}
                                        type="button"
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-red-500/20 bg-red-500/5 text-red-500 transition-colors hover:bg-red-500/10 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </span>
                            </TooltipTrigger>

                            {gear.is_available && (
                                <TooltipContent className="w-fit max-w-none whitespace-nowrap bg-primary px-2 py-1 text-[11px] text-primary-foreground">
                                    <p>Gear must be inactive</p>
                                </TooltipContent>
                            )}
                        </Tooltip>
                    </TooltipProvider>

                </div>
            </td>

        </tr>
    );
};

export default InventoryTable;

