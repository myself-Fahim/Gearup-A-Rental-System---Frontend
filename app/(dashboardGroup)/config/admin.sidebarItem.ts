import { LayoutDashboard, Package, ShoppingCart, User, Users } from "lucide-react";

export const adminItem = [
     {
            title: "Dashboard",
            url: "/admin-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Users",
            url: "/admin-dashboard/manage_user",
            icon: Users,
        },
        {
            title: "Gears",
            url: "/admin-dashboard/manage_gears",
            icon: Package,
        },
        {
            title: "Rentals",
            url: "/admin-dashboard/rentals",
            icon: ShoppingCart,
        },
]


export const adminProfile = [
    {
        title: "Profile",
        url: "/admin-dashboard/profile",
        icon: User,
    },

]