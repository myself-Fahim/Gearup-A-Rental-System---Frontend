import { Cog, LayoutDashboard, Package, ShoppingCart, User, Users } from "lucide-react";

export const providerItem = [
     {
            title: "Dashboard",
            url: "/provider-dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Manage Inventory",
            url: "/provider-dashboard/manage_inventory",
            icon: Cog,
        },
        {
            title: "Incoming Orders",
            url: "/provider-dashboard/manage_order",
            icon: ShoppingCart,
        },
       
]


export const providerProfile = [
    {
        title: "Profile",
        url: "/provider-dashboard/profile",
        icon: User,
    },

]