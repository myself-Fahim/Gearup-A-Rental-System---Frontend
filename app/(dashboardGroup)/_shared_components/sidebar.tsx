"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
    LayoutDashboard,
    Users,
    Package,
    ShoppingCart,
    Settings,
    User,
    LogOut,
    Cog,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const mainRoutes = [
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

const accountRoutes = [
    {
        title: "Profile",
        url: "/admin-dashboard/profile",
        icon: User,
    },
 
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="offcanvas"  className="top-18  lg:static min-h-screen">
            {/* Header */}
            <SidebarHeader>
                <div className="flex items-center gap-3 px-2 py-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Cog className="size-5" />
                    </div>

                    <div>
                        <h2 className="font-semibold">GearUp</h2>
                        <p className="text-xs text-muted-foreground">
                            Admin Dashboard
                        </p>
                    </div>
                </div>
            </SidebarHeader>



            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {mainRoutes.map((route) => {
                                const isActive = pathname === route.url

                                return (
                                    <SidebarMenuItem key={route.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                        >
                                            <Link href={route.url}>
                                                <route.icon />
                                                <span>{route.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>




                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountRoutes.map((route) => {
                                const isActive = pathname === route.url

                                return (
                                    <SidebarMenuItem key={route.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                        >
                                            <Link href={route.url}>
                                                <route.icon />
                                                <span>{route.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>


            {/* Footer */}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <LogOut />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}