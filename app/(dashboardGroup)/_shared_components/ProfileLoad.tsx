import React from 'react';
import Image from "next/image";
import { Camera } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getMe } from "@/service/getMe";
import ProfileForm from './ProfileForm';

const ProfileLoad = async() => {
   const myProfile = await getMe()
    const user = myProfile.data

   


    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

    return (
      
            <div className="mx-auto max-w-4xl space-y-6">

                {/* Page Header */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        My Profile
                    </h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage your personal information and profile picture.
                    </p>
                </div>

                {/* Profile Card */}
                <Card className="overflow-hidden">
                    <CardHeader className="border-b bg-background">
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                            Update your name and profile picture from here.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6 sm:p-8">

                        <div className="grid gap-8 md:grid-cols-[180px_1fr]">

                            {/* Profile Image */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative">
                                    {user.image_url ? (
                                        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-md ring-2 ring-border">
                                            <Image
                                            unoptimized
                                                src={user.image_url}
                                                alt={user.name}
                                                fill
                                                className="object-cover"
                                                sizes="128px"
                                            />
                                        </div>
                                    ) : (
                                        <Avatar className="h-32 w-32 border-4 border-background shadow-md ring-2 ring-border">
                                            <div className="flex h-full w-full items-center rounded-full justify-center bg-primary/10 text-primary">
                                                <span className="text-3xl font-semibold">
                                                    {getInitials(user.name)}
                                                </span>
                                            </div>
                                        </Avatar>
                                    )}

                                    {/* Camera button */}
                                    <Button
                                        type="button"
                                        size="icon"
                                        className="absolute bottom-0 right-0 h-9 w-9 rounded-full shadow-md"
                                    >
                                        <Camera className="h-4 w-4" />
                                        <span className="sr-only">
                                            Change profile picture
                                        </span>
                                    </Button>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Profile Picture
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Add an image URL below
                                    </p>
                                </div>
                            </div>
                            <ProfileForm user={user}></ProfileForm>
                        </div>
                    </CardContent>
                </Card>



            </div>
        
    );
};

export default ProfileLoad;