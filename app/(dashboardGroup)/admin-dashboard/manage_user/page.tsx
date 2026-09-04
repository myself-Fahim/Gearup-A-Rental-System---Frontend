import React, { Suspense } from "react";
import AllUser from "../_components/AllUser";
import SkeletonLoader from "@/app/(publicGroup)/_components/Skeleton";

import ManageUserComponents from "../_components/ManageUserComponents";



const ManageUserPage = ({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    


    return (
        <div className="w-full bg-background p-6 sm:p-8">
            <div >

                <ManageUserComponents>
                    <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                        <AllUser searchParams={searchParams}></AllUser>
                    </Suspense>
                </ManageUserComponents>


            </div>
        </div>
    );
};

export default ManageUserPage;