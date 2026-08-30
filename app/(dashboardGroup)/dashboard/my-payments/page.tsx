import React, { Suspense } from 'react';
import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';
import MyPayment from '../_components/MyPayment';


const MyPayments = () => {

    return (
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="border-b border-border/70 pb-8">
                <p className="text-sm font-medium text-primary">Payment activity</p>
                <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    My payments
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    Review your completed and pending transactions for all gear rentals.
                </p>
            </div>

            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>
                <MyPayment></MyPayment>
            </Suspense>
        </section>
    );
};

export default MyPayments;