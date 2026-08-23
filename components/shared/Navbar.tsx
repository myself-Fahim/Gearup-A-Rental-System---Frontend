"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, User, Settings, LogOut, Menu, Cog } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { logout } from "@/service/logout";
import { toast } from "sonner";


// 1. Routes shown in the middle of the navbar — edit this array to add/remove links
const routes = [
    { label: "Home", href: "/" },
    { label: "Gears", href: "/gear" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];



// 2. Items shown in the user dropdown menu — edit this array to add/remove items
const dropdownItems = [
    { label: "Profile", href: "", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
];




export type IUser = {
    success: boolean,
    message: string,
    data: {
        id: string,
        name: string,
        email: string,
        role: string,
        status: string,
        image_url: string | null,
        created_At: string,
        updated_At: string
    }
}


type userProps = {
    user: IUser
}

export default function Navbar({ user }: userProps) {
    const { resolvedTheme, setTheme } = useTheme();
    const isDarkTheme = resolvedTheme === "dark";
    const router = useRouter()

    const navigateToLogin = () => {
        router.push('/login')
    }

    const handleLogout = async () => {

        try {
            await logout()
            toast.success('Logout successful')
            router.push('/login')

        } catch (err) {
            toast.error('Logout failed')

        }


    }


    return (
        <header className="w-full border-b border-border/80 bg-background/90 shadow-[0_1px_0_0_color-mix(in_oklch,var(--primary),transparent_92%)] backdrop-blur-xl">
            <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                    <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/25 transition-transform duration-300 group-hover:rotate-12">
                        <Cog className="size-5" strokeWidth={2.4} />
                    </span>
                    <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                        Gear<span className="text-primary">Up</span>
                    </span>
                </Link>

                {/* Middle: Routes */}
                <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-secondary/65 p-1 shadow-sm md:flex">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-background hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: Mobile menu + Theme toggle + User dropdown */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Mobile: routes shown in a slide-out sheet */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/70 bg-secondary/50 text-foreground shadow-sm transition-transform hover:scale-105 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="border-border bg-background p-0">
                            <div className="flex items-center gap-2.5 border-b border-border px-6 py-5">
                                <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                                    <Cog className="size-4" strokeWidth={2.4} />
                                </span>
                                <span className="font-heading text-lg font-bold tracking-tight">Gear<span className="text-primary">Up</span></span>
                            </div>
                            <nav className="mt-6 flex flex-col gap-1 px-4">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                                    >

                                        {route.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>


                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative rounded-full border border-border/70 bg-secondary/50 text-foreground shadow-sm transition-transform hover:scale-105"
                        onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
                        aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} mode`}
                    >
                        {isDarkTheme ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>



                    {user.success ?
                        (<DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full border border-border/70 bg-secondary/50 p-0.5 shadow-sm transition-transform hover:scale-105">
                                    <Avatar className="size-full border border-background">
                                        {
                                            user.data.image_url ? <AvatarImage src={user.data.image_url} alt="User" /> : <AvatarFallback className="bg-white">
                                                <User className="h-4 w-4" />
                                            </AvatarFallback>
                                        }
                                    </Avatar>

                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="mt-2 w-64 rounded-xl border-border/80 bg-popover p-1.5 shadow-xl shadow-foreground/10">
                                <DropdownMenuLabel className="px-3 py-2.5 font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm leading-none font-medium">{user.data.name}</p>
                                        <p className="text-xs leading-none text-muted-foreground">{user.data.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {dropdownItems.map((item) => (
                                    <DropdownMenuItem
                                        key={item.label}
                                        asChild
                                    >

                                        {
                                            item.label === 'Profile' 
                                            ?
                                                user.data.role === 'ADMIN' || user.data.role === 'PROVIDER' ?
                                                    <Link
                                                        href={`/${user.data.role.toLowerCase()}-dashboard/profile`}
                                                        className="flex cursor-pointer items-center gap-2"
                                                    >
                                                        <item.icon className="h-4 w-4" />
                                                        {item.label}
                                                    </Link> : <Link
                                                        href={`/dashboard/profile`}
                                                        className="flex cursor-pointer items-center gap-2"
                                                    >
                                                        <item.icon className="h-4 w-4" />
                                                        {item.label}
                                                    </Link>
                                            :
                                            <Link
                                                    href={item.href}
                                                    className="flex cursor-pointer items-center gap-2"
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    {item.label}
                                            </Link>
                                        }

                                    </DropdownMenuItem>
                                ))}

                                {/* Logout */}
                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="flex cursor-pointer items-center gap-2"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>
                        ) : (
                            <Button
                                onClick={navigateToLogin}
                                variant="outline"
                                className="h-9 cursor-pointer rounded-full border-primary/25 bg-primary px-4 text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:text-primary-foreground hover:shadow-md"
                            >
                                Login
                            </Button>
                        )}
                </div>
            </div>
        </header>
    );
}
