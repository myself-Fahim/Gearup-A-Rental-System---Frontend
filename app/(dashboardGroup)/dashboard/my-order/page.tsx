
import { Suspense } from 'react';
import MyOrder from '../_components/MyOrder';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';

const UserMyOrderPage = () => {
    return (
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="border-b border-border/70 pb-8">
                <p className="text-sm font-medium text-primary">Rental activity</p>
                <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    My orders
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    Keep track of the gear you have booked and the dates you have reserved.
                </p>
            </div>

            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <MyOrder></MyOrder>
            </Suspense>

            

            {/* <div className="relative mt-8 overflow-hidden rounded-2xl border border-border/80 bg-card px-6 py-14 text-center shadow-sm sm:px-10">
                <div className="absolute -top-16 -right-12 size-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-14 size-44 rounded-full bg-chart-3/10 blur-3xl" />

                <div className="relative mx-auto flex max-w-md flex-col items-center">
                    <div className="grid size-14 place-items-center rounded-2xl border border-primary/15 bg-primary/10 text-primary shadow-sm">
                        <PackageOpen className="size-6" strokeWidth={1.8} />
                    </div>
                    <h2 className="mt-5 font-heading text-xl font-semibold tracking-tight">
                        Your orders will appear here
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        After you confirm a gear rental, you will be able to review its booking details from this page.
                    </p>
                </div>
            </div> */}
        </section>
    );
};

export default UserMyOrderPage;
