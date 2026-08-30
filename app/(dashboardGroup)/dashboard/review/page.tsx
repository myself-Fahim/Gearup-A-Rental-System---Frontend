import SkeletonLoader from '@/app/(publicGroup)/_components/Skeleton';
import React, { Suspense } from 'react';
import Review from '../_components/Review';

const ReviewPage = () => {


    return (
        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="border-b border-border/70 pb-8">
                <p className="text-sm font-medium text-primary">Rental activity</p>
                <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                    Review Orders
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                    Keep track of the gear you have booked and the dates you have reserved.
                </p>
            </div>

            <Suspense fallback={<SkeletonLoader></SkeletonLoader>}>

                <Review></Review>


            </Suspense>



        </section>
    );
};

export default ReviewPage;