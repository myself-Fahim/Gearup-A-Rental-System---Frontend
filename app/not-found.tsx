import Link from "next/link";
import { ArrowRight, Cog } from "lucide-react";

export default function NotFound() {
    return (
        <main className="relative flex min-h-[calc(100vh-4.5rem)] flex-1 items-center justify-center overflow-hidden bg-background px-6 py-16">
            <div className="pointer-events-none absolute -left-20 top-12 size-72 rounded-full border border-primary/10" />
            <div className="pointer-events-none absolute -right-28 bottom-0 size-96 rounded-full border border-primary/10" />

            <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
                <div className="relative mb-8 grid size-28 place-items-center">
                    <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25 animate-[spin_18s_linear_infinite]" />
                    <span className="absolute inset-3 rounded-full border border-primary/15" />
                    <span className="grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/25">
                        <Cog className="size-9" strokeWidth={2.2} />
                    </span>
                </div>

                <p className="mb-3 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-bold tracking-[0.18em] text-primary uppercase">
                    Route unavailable
                </p>
                <p className="font-heading text-[6rem] font-bold leading-none tracking-[-0.08em] text-foreground sm:text-[8rem]">
                    4<span className="text-primary">0</span>4
                </p>
                <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    This gear is off track.
                </h1>
                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                    The page you’re looking for may not existed.
                </p>

                <Link
                    href="/"
                    className="group mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    Return home
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
            </div>
        </main>
    );
}
