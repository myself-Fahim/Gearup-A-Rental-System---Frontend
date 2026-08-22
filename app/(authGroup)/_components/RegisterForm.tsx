"use client"

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useActionState, useEffect } from 'react';
import { registerAction } from '../_actions/authAction';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


const RegisterForm = () => {


    type initialStateType = {
        success: boolean,
        message: string,
        data: {
            id: string,
            name: string,
            email: string,
            role: string,
            status: string,
            image_url: string | null,
            created_At: string,
            updated_At: string
        }
    }
    const initialState: initialStateType = {
        success: false,
        message: "",
        data: {
            id: "",
            name: "",
            email: "",
            role: "",
            status: "",
            image_url: null,
            created_At: "",
            updated_At: ""
        }
    }




    const [state, formAction, pending] = useActionState(registerAction, initialState)
    const router = useRouter()


    useEffect(() => {
        if (!state.message) return

        if (state.success) {
            toast.success('Registered Successfully')
            router.push('/login')

        }

        if (!state.success) {
            toast.error(state.message || 'Register failed')
        }

    }, [state, router])


    return (
        <div>

            <form action={formAction}>
                <Card className='p-5 '>
                    <div>
                        <label >Name</label>
                        <Input className='mt-1 py-4' name='name' type='text' placeholder='Enter your Name' required></Input>
                    </div>
                    <div>
                        <label >Email</label>
                        <Input className='mt-1 py-4' name='email' type='email' placeholder='Enter your email' required></Input>
                    </div>
                    <div>
                        <label>Image</label>
                        <Input className='mt-1 py-4' name='image' type='text' placeholder='Image URL'></Input>
                    </div>


                    <div>
                        <label htmlFor="role">Registered As</label>

                        <select
                            id="role"
                            name="role"
                            defaultValue=""
                            required
                            className="mt-1 w-full rounded-md border px-3 py-2"
                        >
                            <option value="" disabled>
                                Select your role
                            </option>

                            <option value="CUSTOMER">Customer</option>
                            <option value="PROVIDER">Provider</option>
                        </select>
                    </div>


                    <div className='mb-3'>
                        <label>Password</label>
                        <Input className='mt-1 py-4' name='password' type='password' placeholder='Enter your password' required></Input>
                    </div>

                    <Button type='submit' variant={"default"} size={"lg"}>
                        {
                            pending ? 'loading...' : 'Register'
                        }
                    </Button>
                </Card>

            </form>

        </div>
    );
};

export default RegisterForm;