import React from 'react';
import { getAllUser } from '../_actions/adminAction';
import { UserType } from '../../_types/dashboard.type';
import { Card, CardContent } from '@/components/ui/card';
import { UserTable } from './UserTable';

const AllUser = async ({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const searchQuery = await searchParams
    const users = await getAllUser({searchQuery})
    const usersData = users.data


    if(!usersData || usersData.length == 0){
        return <p className='text-center mt-50 text-gray-500'>No data found</p>
    }
  
    return (
          <Card className="mt-8">
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: UserType) => <UserTable key={user.id} user={user}></UserTable>)}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default AllUser;