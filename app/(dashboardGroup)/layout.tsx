
import Navbar from "@/components/shared/Navbar"
import { getMe } from "@/service/getMe"
import React from "react"
import { AppSidebar } from "./_shared_components/sidebar"
import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

const DashboardLayout = async ({
    children,
}: {
    children: React.ReactNode
}) => {
    const user = await getMe()

    return (
        <SidebarProvider>
            <div className="w-full min-h-screen">
                <div className="flex">
                    <AppSidebar user={user}/>

                    <main className="flex-1 min-w-0">
                        <SidebarTrigger className="lg:hidden" />
                        <div className="mx-auto max-w-6xl mt-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default DashboardLayout

