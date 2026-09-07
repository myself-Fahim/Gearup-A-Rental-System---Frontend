"use client"
import React, { useActionState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Mail, User } from 'lucide-react';
import { updateProfile } from '@/service/getMe';
import { toast } from 'sonner';


const ProfileForm = ({ user }: {
    user:
    {
        id: string;
        name: string;
        email: string;
        role: string;
        status: string;
        image_url: string | null;
        created_At: string;
        updated_At: string;
    }

}) => {


    const initialState: { success: boolean, message: string } = {
        success: false,
        message: ''
    }
    const [state, formAction, isPending] = useActionState(updateProfile, initialState)


    useEffect(() => {

        if(!state.message) return
        if(state.success){
            toast.success(state.message || 'Profile update successfully')
        }
        if(!state.success){
            toast.error(state.message || 'Profile update failed')
        }

    }, [state])

    return (
        <form action={formAction}>
            <div className="space-y-6">

                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="name">
                        Full Name
                    </Label>

                    <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            placeholder="Enter your name"
                            className="pl-9"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email">
                        Email Address
                    </Label>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={user.email}
                            className="bg-muted/50 pl-9"
                        />
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Email address cannot be changed from
                        the profile page.
                    </p>
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                    <Label htmlFor="image">
                        Profile Image URL
                    </Label>

                    <div className="relative">
                        <ImageIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            id="image"
                            name="image"
                            type="url"
                            defaultValue={user.image_url as string}
                            placeholder="https://example.com/profile.jpg"
                            className="pl-9"
                        />
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Paste a publicly accessible image URL.
                    </p>
                </div>

                <Input id='id' name='id' value={user.id} className='hidden' readOnly/>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
                    <Button type="submit">
                        {
                            isPending ? 'Saving..' : 'Save Changes'
                        }
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ProfileForm;