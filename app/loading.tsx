import { Cog } from "lucide-react";

export default function Loading() {
    return (
        <div
            className="flex min-h-[calc(100vh-4.5rem)] flex-1 items-center justify-center bg-background px-6"
            role="status"
            aria-live="polite"
            aria-label="Loading content"
        >
            <div className="flex flex-col items-center gap-5">
                <div className="relative grid size-28 place-items-center">
                    <span className="absolute inset-0 rounded-full border-2 border-primary/15" />
                    <span className="absolute inset-1 rounded-full border-2 border-transparent border-t-primary border-r-primary/45 animate-[spin_1.8s_linear_infinite]" />
                    <span className="absolute inset-3 rounded-full border border-dashed border-primary/30 animate-[spin_5s_linear_infinite_reverse]" />
                    <span className="absolute grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 animate-[pulse_2s_ease-in-out_infinite]">
                        <Cog className="size-8 animate-[spin_3.5s_linear_infinite]" strokeWidth={2.25} />
                    </span>
                </div>

                <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="size-1.5 rounded-full bg-primary animate-[bounce_1s_ease-in-out_infinite]" />
                    <span className="size-1.5 rounded-full bg-primary/65 animate-[bounce_1s_ease-in-out_150ms_infinite]" />
                    <span className="size-1.5 rounded-full bg-primary/35 animate-[bounce_1s_ease-in-out_300ms_infinite]" />
                </div>

                <p className="font-heading text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Loading GearUp
                </p>
            </div>
        </div>
    );
}
