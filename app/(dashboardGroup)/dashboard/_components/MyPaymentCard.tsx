import React from 'react';
import { paymentType } from '../../_types/dashboard.type';
import { Badge } from '@/components/ui/badge';

const getStatusVariant = (status: string) => {
    switch (status?.toUpperCase()) {
        case 'PAID':
        case 'COMPLETED':
            return 'default' as const;
        case 'PENDING':
            return 'secondary' as const;
        case 'FAILED':
        case 'CANCELLED':
            return 'destructive' as const;
        default:
            return 'outline' as const;
    }
};

const MyPaymentCard = ({ payment }: { payment: paymentType }) => {
    const formattedDate = payment.paidAt
        ? new Date(payment.paidAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
          })
        : '—';

        console.log(payment)

    return (
        <tr className="border-b border-border/50 transition-colors hover:bg-muted/50">
            <td className="py-4 pr-4">
                <p className="text-sm font-medium text-foreground">
                    {payment.order?.gear.name ?? 'Unknown Gear'}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-heading font-semibold text-foreground tabular-nums">
                    &#2547;{parseFloat(payment.amount).toLocaleString()}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm text-foreground capitalize">
                    {payment.method}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm font-mono text-muted-foreground" title={payment.transaction_id}>
                    {payment.transaction_id
                        ? `${payment.transaction_id.slice(0, 8)}...${payment.transaction_id.slice(-4)}`
                        : '—'}
                </p>
            </td>

            <td className="py-4 pr-4">
                <p className="text-sm text-foreground">{formattedDate}</p>
            </td>

            <td className="py-4 text-right">
                <Badge variant={getStatusVariant(payment.status)}>
                    {payment.status}
                </Badge>
            </td>
        </tr>
    );
};

export default MyPaymentCard;