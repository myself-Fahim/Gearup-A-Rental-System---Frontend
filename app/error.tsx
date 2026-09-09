
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Home, Mountain, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorPage = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-[calc(100vh-80px)] bg-background px-6">
            <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
                <div className="w-full text-center">

                    {/* Icon */}
                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-muted/40">
                        <Mountain
                            className="h-10 w-10 text-primary"
                            strokeWidth={1.7}
                        />
                    </div>

                    {/* Message */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Something went wrong
                    </h1>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                        <Button
                            onClick={() => reset()}
                            size="lg"
                            className="w-full gap-2 sm:w-auto"
                        >
                            <RefreshCcw className="h-4 w-4" />
                            Try Again
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full gap-2 sm:w-auto"
                        >
                            <Link href="/">
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default ErrorPage;
