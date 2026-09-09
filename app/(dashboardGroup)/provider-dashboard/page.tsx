import {
    Users,
    Package,
    ShoppingCart,
    TrendingUp,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RentalChart from "../admin-dashboard/_components/RentalChart"
import { getMyGears, getMyProductOrders } from "./_actions/provider.action"
import { orderDataType } from "../_types/dashboard.type"






const ProviderDashboard = async() => {

    const myGears = await getMyGears()
    const myOrders =await getMyProductOrders()
    const total_gears = myGears.data
    const total_orders = myOrders.data

    const active_rentals = total_orders ? total_orders.filter((order: orderDataType)  => order.status === 'CONFIRM' || order.status === 'PICKED_UP'):[]
    const pending_orders = total_orders ? total_orders.filter((order: orderDataType)  => order.status === 'PENDING'):[]

 
   
 
    return (
        <div className="space-y-6 p-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Provider Overview
                </h1>

                <p className="text-sm text-muted-foreground">
                    Monitor your platform performance and activity.
                </p>
            </div>


            {/* Statistics Cards */}
            <div className="grid gap-4 md:grid-cols-3">

                {/* Users */}
                <Card className="transition-shadow hover:shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Gears
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <Users className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                           {total_gears.length}
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <TrendingUp className="size-3 text-primary" />
                            2 from last month
                        </p>
                    </CardContent>
                </Card>


                {/* Active Gear */}
                <Card className="transition-shadow hover:shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Rentals
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <Package className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                        {active_rentals.length}
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Currently available for rental
                        </p>
                    </CardContent>
                </Card>


                {/* Total Rentals */}
                <Card className="transition-shadow hover:shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Pending Orders
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <ShoppingCart className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                        {pending_orders.length}
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <TrendingUp className="size-3 text-primary" />
                            18% from last month
                        </p>
                    </CardContent>
                </Card>

            </div>


            {/* Rental Overview Chart */}
            <Card>
                <CardHeader>
                    <div>
                        <CardTitle>Rental Overview</CardTitle>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Monthly rental activity across the platform.
                        </p>
                    </div>
                </CardHeader>

                <CardContent>
                    <RentalChart></RentalChart>
                </CardContent>

                
            </Card>

        </div>
    )
}

export default ProviderDashboard