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
import { IUser } from "../_types/dashboard.type"
import { adminItem, adminProfile } from "../config/admin.sidebarItem"
import { userItem, userProfile } from "../config/user.sidebarItem"





export function AppSidebar({ user }: { user: IUser }) {
   
    let mainRoutes = userItem
    let accountRoutes = userProfile 

    if(user.data.role === 'ADMIN'){
        mainRoutes = adminItem
        accountRoutes = adminProfile
    }

    const pathname = usePathname()

    return (
        <Sidebar collapsible="offcanvas" className="top-18  lg:static min-h-screen">
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