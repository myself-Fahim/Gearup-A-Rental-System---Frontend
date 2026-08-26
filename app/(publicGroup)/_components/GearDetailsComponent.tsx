

import Link from 'next/link';
import { ArrowLeft, CalendarDays, CheckCircle2, CircleAlert, Mail, Package, Tag, UserRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGearById } from '../_actions/publicAction';
import Image from 'next/image';

const GearDetailsComponent = async({params} : {params : Promise<{ id: string }>}) => {
    const {id} = await params
    const gear = await getGearById(id)
    const gearData = gear.data

    const formattedDate = (date: string) => new Intl.DateTimeFormat('en', {
        month: 'short', day: 'numeric', year: 'numeric',
    }).format(new Date(date))

    return (
        <div className="py-8 sm:py-12">
            <Link href="/gear" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                <ArrowLeft className="size-4" /> Back to gear
            </Link>

            <section className="mt-6 overflow-hidden rounded-3xl border border-border/80 shadow-xl shadow-primary/5">
                <div className=" grid lg:grid-cols-[1.05fr_1fr]">
                    <div className="relative border  min-h-80 overflow-hidden bg-secondary sm:min-h-105">
                        <Image
                            src={gearData.image || 'https://placehold.co/900x900/eaf7fb/267fa3?text=Gear+Image'}
                            alt={gearData.name}
                            fill
                            className="size-full object-cover"
                            
                        />
                    </div>

                    <div className="p-6 sm:p-9">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium text-primary">{gearData.category.name}</p>
                                <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl">{gearData.name}</h1>
                            </div>
                            <Badge className={gearData.is_available ? 'border-0 bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10' : 'border-0 bg-muted px-3 py-1 text-muted-foreground hover:bg-muted'}>
                                {gearData.is_available ? 'Available' : 'Unavailable'}
                            </Badge>
                        </div>

                        <div className="mt-8 flex items-end gap-2 border-b border-border/70 pb-7">
                            <span className="text-4xl font-bold tracking-tight">${gearData.price_per_day}</span>
                            <span className="mb-1 text-sm text-muted-foreground">per day</span>
                        </div>

                        <div className="grid gap-4 py-7 sm:grid-cols-2">
                            <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 p-4">
                                <Package className="size-5 text-primary" />
                                <div><p className="text-xs text-muted-foreground">Stock</p><p className="font-semibold">{gearData.available_stock} {gearData.available_stock === 1 ? 'unit' : 'units'}</p></div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 p-4">
                                <Tag className="size-5 text-primary" />
                                <div><p className="text-xs text-muted-foreground">Category</p><p className="font-semibold">{gearData.category.name}</p></div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 p-4">
                                {gearData.is_available ? <CheckCircle2 className="size-5 text-primary" /> : <CircleAlert className="size-5 text-muted-foreground" />}
                                <div><p className="text-xs text-muted-foreground">Status</p><p className="font-semibold">{gearData.is_available ? 'Ready to rent' : 'Currently unavailable'}</p></div>
                            </div>
                            <div className="flex items-center gap-3 rounded-2xl bg-secondary/65 p-4">
                                <CalendarDays className="size-5 text-primary" />
                                <div><p className="text-xs text-muted-foreground">Added</p><p className="font-semibold">{formattedDate(gearData.created_At)}</p></div>
                            </div>
                            {gearData.provider && <div className="sm:col-span-2 rounded-2xl bg-secondary/65 p-4">
                                <div className="flex items-start gap-3">
                                    <UserRound className="mt-0.5 size-5 text-primary" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Provided by</p>
                                        <p className="font-semibold">{gearData.provider.name}</p>
                                        <a href={`mailto:${gearData.provider.email}`} className="mt-1 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"><Mail className="size-3.5" />{gearData.provider.email}</a>
                                    </div>
                                </div>
                            </div>}
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-muted-foreground">Last updated {formattedDate(gearData.updated_At)}</p>
                            <Button asChild disabled={!gearData.is_available} className="h-11 rounded-full px-6 text-sm shadow-lg shadow-primary/20">
                                <Link href={`/login?redirect=/gear/${id}`}>Rent now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GearDetailsComponent;
