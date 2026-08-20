"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useActionState, useEffect } from 'react';
import { loginAction } from '../_actions/authAction';
import { toast } from 'sonner';


type initialStateType = {
    success: boolean,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string
    }
}

const initialState: initialStateType = {
    success: false,
    message: "",
    data: {
        accessToken: "",
        refreshToken: ""
    }

}

const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(loginAction, initialState)
    console.log(state, 'prev_state');

    useEffect(() => {
        if (!state.message ) return

        if (state.success) {
            toast.success(state.message || 'Login successful')
        }
        else {
            toast.error(state.message || 'Login failed')
        }
    }, [state])


    return (
        <div>

            <form action={formAction}>
                <Card className='p-5 '>
                    <div>
                        <label htmlFor="">Email</label>
                        <Input className='mt-1 py-4' name='email' type='email' placeholder='Enter your email' required></Input>
                    </div>

                    <div className='mb-3'>
                        <label>Password</label>
                        <Input className='mt-1 py-4' name='password' type='password' placeholder='Enter your password' required></Input>
                    </div>

                    <Button type='submit' variant={"default"} size={"lg"}>
                        {isPending ? 'loading...' : 'login'}
                    </Button>
                </Card>

            </form>

        </div>
    );
};

export default LoginForm;