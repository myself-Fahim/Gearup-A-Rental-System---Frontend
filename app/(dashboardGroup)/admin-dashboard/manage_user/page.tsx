import React, { Suspense } from "react";
import AllUser from "../_components/AllUser";
import SkeletonLoader from "@/app/(publicGroup)/_components/Skeleton";
import SeachUser from "../_components/SeachUser";



const ManageUserPage = ({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) => {


    return (
        <div className="w-full bg-background p-6 sm:p-8">
            <div className="mx-auto max-w-6xl">



                <div className="border-b border-border/70 pb-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl">
                            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                User management
                            </h1>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                View, manage, and monitor every account on your platform in one place.
                            </p>
                        </div>

                        <SeachUser></SeachUser>

                    </div>

                </div>




                <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                    <AllUser searchParams={searchParams}></AllUser>
                </Suspense>


            </div>
        </div>
    );
};

export default ManageUserPage;