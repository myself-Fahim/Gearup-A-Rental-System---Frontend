import React, { Suspense } from "react";
import ProfileLoad from "../../_shared_components/ProfileLoad";
import SkeletonLoader from "@/app/(publicGroup)/_components/Skeleton";



const ProviderProfilePage = async () => {
    return (
        <div className="min-h-screen bg-muted/30 p-4 sm:p-6 lg:p-8">
            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <ProfileLoad></ProfileLoad>
            </Suspense>
        </div>
    );
};

export default ProviderProfilePage;