import Navbar from '@/components/shared/Navbar';
import { getMe } from '@/service/getMe';
import React from 'react';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getMe()
    return (
        <div>
            <Navbar user={user}></Navbar>
            <div className='max-w-100 sm:max-w-2xl lg:max-w-5xl mx-auto'>
                {children}
            </div>

        </div>
    );
};

export default DashboardLayout;