
"use client"
import React from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TGear } from '../_types/gear.type';
import { Boxes, CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const GearCard = ({ gear }: { gear: TGear }) => {
    const router = useRouter()

    const routeToDetails = () => {
        router.push(`/gear/${gear.id}`)
    }

    return (
        <Card className="h-full min-h-[360px] w-full gap-0 rounded-2xl border border-border/80 bg-card py-0 shadow-sm ring-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
            <div className="relative flex aspect-[16/10] items-end overflow-hidden  p-5 text-primary-foreground">
                {/* <div className="absolute -top-10 -right-8 size-36 rounded-full border-[18px] border-white/10" />
                <div className="absolute -bottom-12 -left-10 size-36 rounded-full bg-white/10 blur-2xl" />
                <div className="relative grid size-11 place-items-center rounded-xl border border-white/20 bg-white/15 shadow-lg backdrop-blur-sm">
                    <Boxes className="size-5" />
                </div> */}

                <Image
                    unoptimized
                    src={gear.image || 'https://placehold.co/900x900/eaf7fb/267fa3?text=Gear+Image'}
                    alt={gear.name}
                    fill
                    className=" object-cover"

                />
            </div>
            <CardHeader className="flex-1 gap-3 px-5 pt-5 pb-4">
                <CardAction>
                    <Badge className={gear.is_available ? "border-0 bg-primary/10 text-primary hover:bg-primary/10" : "border-0 bg-muted text-muted-foreground hover:bg-muted"}>
                        {gear.is_available ? 'Available' : 'Unavailable'}
                    </Badge>
                </CardAction>
                <CardTitle className="pr-3 text-lg font-semibold tracking-tight">{gear.name}</CardTitle>
                <CardDescription className="flex items-center gap-1.5 text-sm">
                    <CalendarDays className="size-3.5" />
                    {gear.available_stock} {gear.available_stock === 1 ? 'unit' : 'units'} in stock
                </CardDescription>
                <Badge className="w-fit max-w-full border-0 bg-chart-3/15 px-2.5 py-1 text-chart-5 hover:bg-chart-3/15">
                    <span className="truncate"> {gear.category.name}</span>
                </Badge>
            </CardHeader>

            <CardFooter className="flex items-center justify-between border-t border-border/70 px-5 py-4">
                <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">Per day</p>
                    <p className="mt-1 text-lg font-bold text-foreground"> &#2547;{gear.price_per_day}</p>
                </div>
                <Button onClick={routeToDetails} className="rounded-full px-4 shadow-sm shadow-primary/20">View gear</Button>
            </CardFooter>
        </Card>
    );
};

export default GearCard;
