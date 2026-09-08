import React from "react";
import { getAllGears } from "../_actions/publicAction";
import GearCard from "./GearCardClient";
import { TGear } from "../_types/gear.type";
import { Compass } from "lucide-react";

const LoadLatestGear = async () => {
    const allGears = await getAllGears();

    if (allGears.length === 0 || !allGears) {
        return (
            <div className="mt-8 flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/20 px-6 text-center">
                
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Compass className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight">
                    No Gear Available Yet
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                    We’re getting the latest adventure gear ready for you.
                    Check back soon and find the perfect gear for your next adventure.
                </p>
            </div>
        );
    }

    return (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allGears
                .slice(0, 3)
                .map((gear: TGear) => (
                    <GearCard
                        key={gear.id}
                        gear={gear}
                    />
                ))}
        </div>
    );
};

export default LoadLatestGear;