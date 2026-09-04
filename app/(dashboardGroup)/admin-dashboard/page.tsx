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
import RentalChart from "./_components/RentalChart"
import { getAllOrder, getAllUser } from "./_actions/adminAction"
import { getAllGears } from "@/app/(publicGroup)/_actions/publicAction"



const AdminDashboardHome = async() => {
    const users = await getAllUser()
    const userData = users.data
    const gears = await getAllGears()
    const rentals = await getAllOrder()
    const rentalsData = rentals.data
    return (
        <div className="space-y-6 p-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Admin Overview
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
                            Total Users
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <Users className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                            {userData.length}
                        </div>

                        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <TrendingUp className="size-3 text-primary" />
                            12% from last month
                        </p>
                    </CardContent>
                </Card>


                {/* Active Gear */}
                <Card className="transition-shadow hover:shadow-md">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Gear
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <Package className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                           {gears.length}
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
                            Total Rentals
                        </CardTitle>

                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                            <ShoppingCart className="size-4" />
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="text-3xl font-bold">
                           {rentalsData.length}
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

export default AdminDashboardHome