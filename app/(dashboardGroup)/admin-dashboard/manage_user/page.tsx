import React, { Suspense } from "react";
import AllUser from "../_components/AllUser";
import SkeletonLoader from "@/app/(publicGroup)/_components/Skeleton";



const ManageUserPage = () => {


    return (
        <div className="w-full bg-background p-6 sm:p-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5 pb-3 border-b">
                    <div className="max-w-xl">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            User management
                        </h1>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            View, manage, and monitor every account on your platform in one place.
                        </p>
                    </div>
                </div>

 

              <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                   <AllUser></AllUser>
              </Suspense>
             
               
            </div>
        </div>
    );
};

export default ManageUserPage;