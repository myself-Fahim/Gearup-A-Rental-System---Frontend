import Navbar from '@/components/shared/Navbar';
import { getMe } from '@/service/getMe';
import React from 'react';

const PublicLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getMe()

    return (

        <div >
            <Navbar user={user}></Navbar>
            <main className='max-w-6xl mx-auto'>
                {children}
            </main>

        </div>
    );
};

export default PublicLayout;