import { HandCoins, LayoutDashboard, ShoppingCart, User, UserStar } from "lucide-react";

export const userItem = [
     {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My orders",
            url: "/dashboard/my-order",
            icon: ShoppingCart,
        },
        {
            title: "My payments",
            url: "/dashboard/my-payments",
            icon: HandCoins,
        },
        {
            title: "Review",
            url: "/dashboard/review",
            icon: UserStar,
        },
       
]

export const userProfile = [
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: User,
    },

]