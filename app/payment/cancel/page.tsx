// app/(dashboard)/payment/cancel/page.tsx
import React from 'react';
import Link from 'next/link';
import { XCircle, RotateCcw, ArrowRight } from 'lucide-react';

const PaymentCancelPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ order_id?: string }>;
}) => {
    const { order_id } = await searchParams;

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
            <div className="w-full max-w-md">
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                    {/* Icon */}
                    <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-destructive/10">
                        <XCircle className="size-9 text-destructive" strokeWidth={1.75} />
                    </div>

                    {/* Copy */}
                    <h1 className="text-xl font-semibold tracking-tight text-card-foreground">
                        Payment cancelled
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        No charge was made. Your booking wasn&apos;t confirmed — you can pick up
                        where you left off any time.
                    </p>

                    {order_id && (
                        <div className="mt-6 rounded-xl bg-muted/50 p-4 text-left text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Order ID</span>
                                <span className="font-mono text-card-foreground">
                                    #{order_id.slice(0, 8).toUpperCase()}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-2.5">
                        <Link
                            href={'/dashboard/my-order'}
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            <RotateCcw className="size-4" />
                            Try payment again
                        </Link>
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-accent"
                        >
                            Back to dashboard
                            <ArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancelPage;