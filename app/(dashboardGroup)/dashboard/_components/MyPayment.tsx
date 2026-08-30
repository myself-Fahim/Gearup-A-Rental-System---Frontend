import React from 'react';
import { getMyPayments } from '../_actions/dashboardAction';
import MyPaymentCard from './MyPaymentCard';
import { paymentType } from '../../_types/dashboard.type';
import { Card, CardContent } from '@/components/ui/card';

const MyPayment = async () => {
    const payments = await getMyPayments();
    const paymentsData = payments.data.payments;

    return (
         <Card className="mt-8">
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Gear</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Method</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Transaction ID</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">Paid At</th>
                                <th className="pb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentsData.map((payment: paymentType) => (
                                <MyPaymentCard key={payment.id} payment={payment} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
};

export default MyPayment;