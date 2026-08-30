import React from 'react';
import { orderDataType } from '../../_types/dashboard.type';
import Link from 'next/link';

const ReviewCard = ({ order }: { order: orderDataType }) => {
    return (
        <div>

            <article className=" p-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="mb-7">
                    <div className="flex items-center justify-between ">
                        <p className="mb-2 text-sm font-medium text-slate-500">Ordered gear</p>

                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize bg-purple-100 text-purple-700`}
                        >
                            {order.status}
                        </span>
                    </div>


                    <h3 className="text-xl font-bold text-slate-900 mt-4">
                        {order.gear.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                        &#2547;{parseFloat(order.total_amount).toLocaleString()}
                    </p>


                </div>


                <div className="flex justify-between items-center gap-3 sm:min-w-40">
                    <Link
                        href={`/dashboard/my-order/${order.id}`}
                        className="rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-50"
                    >
                        View details
                    </Link>



                    <button

                        className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Review
                    </button>

                </div>
                

            </article>

        </div>
    );
};

export default ReviewCard;