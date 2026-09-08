"use client"
import React from "react";
import {
    ArrowRight,
    ShieldCheck,
    Zap,
    Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingText from "./Typing";
import { useRouter } from "next/navigation";



const Hero = () => {
    const router = useRouter()

    const handleGear = () =>{
        router.push('/gear')

    }

    const handleCreateGearRoute = () =>{
        router.push('/register')
    }
    return (
        <section className="relative mt-10 overflow-hidden  bg-muted/30">

            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                             "url('https://i.ibb.co.com/DD8nHJ3k/hero-Image.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/25 to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex items-center px-4 py-20 sm:px-6 lg:px-8">

                <div className="max-w-3xl text-white">

                    {/* Badge */}
                    <div
                        className="
                            hero-animate
                            mb-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            px-4
                            py-2
                            text-sm
                            font-medium
                            backdrop-blur-md
                        "
                    >
                        <Mountain className="h-4 w-4" />

                        <span>
                            Adventure starts with the right gear
                        </span>
                    </div>

                    {/* Heading */}
               <h1
    className="
        hero-animate
        hero-delay-1
        text-4xl
        font-bold
        leading-tight
        tracking-tight
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
    "
>
    Rent Your Gear 

    <span
        className="
            hero-animate
            hero-delay-2
            block
            text-primary
        "
    >
        <TypingText />
    </span>
</h1>

                    {/* Description */}
                    <p
                        className="
                            hero-animate
                            hero-delay-3
                            mt-6
                            max-w-2xl
                            text-base
                            leading-7
                            text-white/80
                            sm:text-lg
                        "
                    >
                        Rent quality sports and outdoor equipment without
                        the hassle of buying. From camping trips to
                        thrilling adventures, find the gear you need and
                        get moving.
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            hero-animate
                            hero-delay-4
                            mt-8
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        "
                    >
                        <Button
                            size="lg"
                            className="group h-12 px-7 text-base transition-all duration-300 hover:scale-105"
                            onClick={handleGear}
                        >
                            Explore Gear

                            <ArrowRight
                                className="
                                    ml-2
                                    h-4
                                    w-4
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Button>

                        <Button onClick={handleCreateGearRoute}
                            size="lg"
                            variant="outline"
                            className="
                                h-12
                                border-white/30
                                bg-white/10
                                px-7
                                text-base
                                text-white
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-white/20
                                hover:text-white
                            "
                        >
                            Register Your Account
                        </Button>
                    </div>

                    {/* Trust Points */}
                    <div
                        className="
                            hero-animate
                            hero-delay-5
                            mt-10
                            flex
                            flex-wrap
                            gap-x-8
                            gap-y-4
                            text-sm
                            text-white/80
                        "
                    >
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-primary" />
                            <span>Quality Checked Gear</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            <span>Easy & Fast Booking</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;