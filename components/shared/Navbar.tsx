"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, User, Settings, LogOut, Menu } from "lucide-react";

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
    { label: "Pricing", href: "/pricing" },
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
        <header className="w-full border-b border-border bg-secondary">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 ">
                {/* Left: Logo */}
                <Link href="/" className="text-lg font-heading font-bold text-primary">
                    MyLogo
                </Link>

                {/* Middle: Routes */}
                <nav className="hidden items-center gap-6 md:flex">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>

                {/* Right: Mobile menu + Theme toggle + User dropdown */}
                <div className="flex items-center gap-3">
                    {/* Mobile: routes shown in a slide-out sheet */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="mt-8 flex flex-col gap-4 px-4">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
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
                        className="relative"
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
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar>
                                        {
                                            user.data.image_url ? <AvatarImage src={user.data.image_url} alt="User" /> : <AvatarFallback className="bg-white">
                                                <User className="h-4 w-4" />
                                            </AvatarFallback>
                                        }
                                    </Avatar>

                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel className="font-normal">
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
                                className="bg-white cursor-pointer"
                            >
                                Login
                            </Button>
                        )}
                </div>
            </div>
        </header>
    );
}
