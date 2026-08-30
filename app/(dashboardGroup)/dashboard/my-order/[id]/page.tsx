import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Dumbbell, CalendarDays, Clock, Package } from 'lucide-react';
import { getMyOrderDetails } from '../../_actions/dashboardAction';
import { OrderDetails, OrderStatus } from '@/app/(dashboardGroup)/_types/dashboard.type';





const STATUS_STYLES: Record<OrderStatus, string> = {
    PENDING: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400',
    CONFIRMED: 'bg-primary/10 text-primary border-primary/20', 
    PICKED_UP: 'bg-primary/10 text-primary border-primary', 
    RETURNED: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400',
    CANCELLED: 'bg-destructive/10 text-destructive border-destructive/20',
};

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

const formatDateTime = (iso: string) =>
    new Date(iso).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });

const getRentalDays = (start: string, end: string) => {
    const ms = new Date(end).getTime() - new Date(start).getTime();
    return Math.max(1, Math.round(ms / (1000 * 60 * 60 * 24)));
};

const MyOrderDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const orderDetails = await getMyOrderDetails(id);
    const order: OrderDetails = orderDetails.data;

    const days = getRentalDays(order.startDate, order.endDate);
    const pricePerDay = Number(order.gear.price_per_day);
    const total = Number(order.total_amount);

    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Back link */}
                <Link
                    href="/dashboard/my-order"
                    className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="size-4" />
                    Back to orders
                </Link>

                {/* Header */}
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                            Order Details
                        </h1>
                        <p className="mt-1 font-mono text-sm text-muted-foreground">
                            #{order.id.slice(0, 8).toUpperCase()}
                        </p>
                    </div>
                    <span
                        className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium ${STATUS_STYLES[order.status]}`}
                    >
                        {order.status}
                    </span>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left: Gear + rental info */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Gear card */}
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Dumbbell className="size-7" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h2 className="truncate text-lg font-semibold text-card-foreground">
                                        {order.gear.name}
                                    </h2>
                                    <p className="mt-0.5 text-sm text-muted-foreground">
                                        &#2547;{pricePerDay.toFixed(2)} / day
                                    </p>
                                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Package className="size-3.5" />
                                        {order.gear.is_available
                                            ? `${order.gear.available_stock} in stock`
                                            : 'Currently unavailable'}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rental period card */}
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                                Rental period
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <div className="mb-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <CalendarDays className="size-3.5" />
                                        Starts
                                    </div>
                                    <p className="text-sm font-medium text-card-foreground">
                                        {formatDate(order.startDate)}
                                    </p>
                                </div>
                                <div className="h-px flex-1 bg-border" />
                                <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="size-3.5" />
                                    {days} {days === 1 ? 'day' : 'days'}
                                </div>
                                <div className="h-px flex-1 bg-border" />
                                <div className="flex-1 text-right">
                                    <div className="mb-1.5 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                                        <CalendarDays className="size-3.5" />
                                        Ends
                                    </div>
                                    <p className="text-sm font-medium text-card-foreground">
                                        {formatDate(order.endDate)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                                Order timeline
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Placed</span>
                                    <span className="text-card-foreground">
                                        {formatDateTime(order.created_At)}
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Last updated</span>
                                    <span className="text-card-foreground">
                                        {formatDateTime(order.updatedAt)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 rounded-2xl border border-border bg-card p-6">
                            <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                                Payment summary
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        &#2547;{pricePerDay.toFixed(2)} × {days} {days === 1 ? 'day' : 'days'}
                                    </span>
                                    <span className="text-card-foreground">
                                        &#2547;{(pricePerDay * days).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="my-4 h-px bg-border" />
                            <div className="flex items-baseline justify-between">
                                <span className="text-sm font-medium text-card-foreground">Total</span>
                                <span className="text-xl font-semibold text-primary">
                                    &#2547;{total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDetailsPage;