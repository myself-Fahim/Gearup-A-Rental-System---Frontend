"use client"

import { Ban, CircleCheck } from "lucide-react"
import { UserType } from "../../_types/dashboard.type"
import { updateUserStatus } from "../_actions/adminAction"
import { toast } from "sonner"



export function UserTable({ user }: { user: UserType }) {


    const handleStatus = async (status: string, id: string) => {
        status = status === 'suspend' ? 'activate' : 'suspend'
        
        const result = await updateUserStatus(status, id)
        if (result.success) {
            toast.success(result.message || 'Status update successfully')
        }
        else {
            toast.error(result.message || 'Status update failed')

        }
    }

    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/50">
            <td className="py-4 pr-4">
                <p className="text-sm font-medium text-foreground">
                    {user.name}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm ">
                    {user.email}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className={`text-xs font-medium capitalize w-fit px-2.5 py-1 rounded-full ${user.status == 'activate' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {user.status}
                </p>
            </td>


            <td className="py-4 pr-4">
                <p className={`text-xs font-medium capitalize w-fit px-2.5 py-1 rounded-full ${user.role == 'PROVIDER' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>{user.role}</p>
            </td>

            <td >
                <button onClick={() => handleStatus(user.status, user.id)}
                    title={user.status == 'activate' ? 'Block user' : 'Activate user'}
                    aria-label={user.status == 'activate' ? 'Block user' : 'Activate user'}
                    className={`inline-flex items-center justify-center rounded-md p-2 transition-colors
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring
                    ${user.status == 'activate'
                            ? 'text-red-700 hover:bg-red-100 hover:text-red-800'
                            : 'text-green-700 hover:bg-green-100 hover:text-green-800'
                        }`}>
                    {
                        user.status == 'activate' ? <Ban className="h-4 w-4" /> : <CircleCheck className="h-4 w-4" />
                    }
                </button>
            </td>
        </tr>
    )
}
