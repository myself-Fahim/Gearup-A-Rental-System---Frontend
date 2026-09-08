"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import {
    Users,
    Package,
    ShoppingCart,
    Settings,
    User,
    LogOut,
    Cog,
    Home,
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
import { providerItem, providerProfile } from "../config/provider.sidebarItem"
import { logout } from "@/service/logout"
import { toast } from "sonner"


export function AppSidebar({ user }: { user: IUser }) {

    let mainRoutes = userItem
    let accountRoutes = userProfile

    if (user.data.role === "ADMIN") {
        mainRoutes = adminItem
        accountRoutes = adminProfile
    }
    else if (user.data.role === "PROVIDER") {
        mainRoutes = providerItem
        accountRoutes = providerProfile
    }

    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = async () => {

        try {
            const result = await logout()
            toast.success('Logout successfull')
            router.push('/login')
        }
        catch (err) {
            toast.error('Logout failed')
        }

    }


    return (
        <Sidebar collapsible="offcanvas" className="min-h-screen">

            {/* Header */}
            <SidebarHeader>
                <div className="flex items-center gap-3 px-2 py-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Cog className="size-5" />
                    </div>

                    <div>
                        <h2 className="font-semibold">GearUp</h2>
                        <p className="text-xs text-muted-foreground">
                            Dashboard
                        </p>
                    </div>
                </div>
            </SidebarHeader>


            {/* Content */}
            <SidebarContent>

                {/* Main Routes */}
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


                {/* Account Routes */}
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

                    {/* Go To Home */}
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Home />
                                <span>Go to Home</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>


                    {/* Logout */}
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={handleLogout}>
                            <LogOut />
                            <span>Logout</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>

                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}