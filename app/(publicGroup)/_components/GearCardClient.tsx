
"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
    ArrowUpRight,
    CalendarDays,
    Package,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { TGear } from "../_types/gear.type"


const GearCard = ({ gear }: { gear: TGear }) => {

    const router = useRouter()

    const routeToDetails = () => {
        router.push(`/gear/${gear.id}`)
    }

    return (
        <Card
            className="
                group relative flex h-full min-h-96 w-full flex-col
                overflow-hidden rounded-2xl border border-border/70
                bg-card p-0 shadow-sm
                transition-all duration-300
                hover:-translate-y-1.5
                hover:border-primary/30
                hover:shadow-xl
                hover:shadow-primary/10
            "
        >

        
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">

                <Image
                    unoptimized
                    src={
                        gear.image ||
                        "https://placehold.co/900x900/eaf7fb/267fa3?text=Gear+Image"
                    }
                    alt={gear.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                        object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                    "
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                {/* Availability */}
                <div className="absolute left-4 top-4">
                    <Badge
                        className={
                            gear.is_available
                                ? `
                                    border border-primary/20
                                    bg-background/90
                                    text-primary
                                    shadow-sm backdrop-blur-md
                                    hover:bg-background/90
                                `
                                : `
                                    border border-white/10
                                    bg-background/90
                                    text-muted-foreground
                                    shadow-sm backdrop-blur-md
                                    hover:bg-background/90
                                `
                        }
                    >
                        <span
                            className={`mr-1.5 size-1.5 rounded-full ${
                                gear.is_available
                                    ? "bg-primary"
                                    : "bg-muted-foreground"
                            }`}
                        />
                        {gear.is_available ? "Available" : "Unavailable"}
                    </Badge>
                </div>

                {/* Category */}
                {gear.category?.name && (
                    <div className="absolute bottom-4 left-4">
                        <Badge
                            className="
                                border-0
                                bg-background/90
                                px-2.5 py-1
                                text-xs font-medium
                                text-foreground
                                shadow-sm
                                backdrop-blur-md
                                hover:bg-background/90
                            "
                        >
                            {gear.category.name}
                        </Badge>
                    </div>
                )}

            </div>


            {/* ================= CONTENT ================= */}
            <CardHeader className="flex-1 gap-0 px-5 pb-4 pt-5">

                <div className="mb-2 flex items-start justify-between gap-3">

                    <CardTitle
                        className="
                            line-clamp-2
                            text-lg font-semibold
                            leading-tight tracking-tight
                            transition-colors
                            group-hover:text-primary
                        "
                    >
                        {gear.name}
                    </CardTitle>

                    {/* Small Arrow */}
                    <div
                        className="
                            flex size-8 shrink-0 items-center
                            justify-center rounded-full
                            border border-border/70
                            bg-muted/40
                            text-muted-foreground
                            transition-all duration-300
                            group-hover:border-primary/30
                            group-hover:bg-primary/10
                            group-hover:text-primary
                        "
                    >
                        <ArrowUpRight className="size-4" />
                    </div>

                </div>


                {/* Stock */}
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                    <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Package className="size-3.5" />
                    </div>

                    <span>
                        <span className="font-medium text-foreground">
                            {gear.available_stock}
                        </span>{" "}
                        {gear.available_stock === 1 ? "unit" : "units"} in stock
                    </span>

                </div>

            </CardHeader>


            {/* ================= FOOTER ================= */}
            <CardFooter
                className="
                    flex items-center justify-between
                    border-t border-border/60
                    bg-muted/10
                    px-5 py-4
                "
            >

                {/* Price */}
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Rental price
                    </p>

                    <div className="mt-0.5 flex items-baseline gap-1">
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            ৳{gear.price_per_day}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            / day
                        </span>
                    </div>
                </div>


                {/* CTA */}
                <Button
                    onClick={routeToDetails}
                    className="
                        group/btn rounded-full
                        px-4 shadow-sm
                        shadow-primary/20
                        transition-all duration-300
                        hover:px-5
                    "
                >
                    View gear
                    <ArrowUpRight
                        className="
                            ml-1.5 size-4
                            transition-transform duration-300
                            group-hover/btn:translate-x-0.5
                            group-hover/btn:-translate-y-0.5
                        "
                    />
                </Button>

            </CardFooter>

        </Card>
    )
}

export default GearCard

