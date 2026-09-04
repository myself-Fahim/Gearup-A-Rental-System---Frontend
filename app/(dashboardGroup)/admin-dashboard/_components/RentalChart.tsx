"use client"

import {
    Area,
    AreaChart,
    CartesianGrid,
    XAxis,
} from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const rentalData = [
    { month: "Jan", rentals: 45 },
    { month: "Feb", rentals: 62 },
    { month: "Mar", rentals: 58 },
    { month: "Apr", rentals: 85 },
    { month: "May", rentals: 72 },
    { month: "Jun", rentals: 110 },
    { month: "Jul", rentals: 95 },
    { month: "Aug", rentals: 128 },
]

const chartConfig = {
    rentals: {
        label: "Rentals",
        color: "var(--primary)",
    },
}

const RentalChart = () => {
    return (
        <ChartContainer
            config={chartConfig}
            className="h-[350px] w-full"
        >
            <AreaChart
                data={rentalData}
                margin={{
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,
                }}
            >
                <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                />

                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                />

                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                />

                <Area
                    type="monotone"
                    dataKey="rentals"
                    stroke="var(--color-rentals)"
                    fill="var(--color-rentals)"
                    fillOpacity={0.15}
                    strokeWidth={2}
                />
            </AreaChart>
        </ChartContainer>
    )
}

export default RentalChart