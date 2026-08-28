"use client";

import Link from "next/link";
import React from "react";
import { orderDataType } from "../../_types/dashboard.type";

const MyOrderCard = ({ order }: { order: orderDataType }) => {
    const isConfirmed = order.status?.toLowerCase() === "confirmed";

    return (
        <article className=" p-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="mb-7">
                <div className="flex items-center justify-between ">
                    <p className="mb-2 text-sm font-medium text-slate-500">Ordered gear</p>

                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${isConfirmed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                            }`}
                    >
                        {order.status}
                    </span>


                </div>


                <h3 className="text-xl font-bold text-slate-900 mt-4">
                    {order.gear.name}
                </h3>


            </div>
            <div className="flex justify-between items-center gap-3 sm:min-w-40">
                <Link
                    href={`/dashboard/my-order/${order.id}`}
                    className="rounded-lg border border-slate-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:bg-slate-50"
                >
                    View details
                </Link>

                {isConfirmed ? (
                    <Link
                        href={`/dashboard/orders/${order.id}/payment`}
                        className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        Pay now
                    </Link>
                ) : (
                    <button
                        type="button"
                        disabled
                        className="cursor-not-allowed rounded-lg bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-400"
                    >
                        Pay now
                    </button>
                )}
            </div>

        </article>
    );
};

export default MyOrderCard;