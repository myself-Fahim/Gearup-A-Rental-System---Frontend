
"use client"

import { IUser } from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useActionState, useEffect, useRef, useState } from 'react';
import { TGear } from '../_types/gear.type';
import { Dialog, DialogClose, DialogContent,  DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Field, FieldGroup } from '@/components/ui/field';
import DateRangePeaker from './DateRangePeaker';
import { DateRange } from 'react-day-picker';
import { differenceInCalendarDays, format } from 'date-fns';
import { rentGear } from '../_actions/publicAction';
import { toast } from 'sonner';


const GearDetailsPageButton = ({ gearData, user }: { gearData: TGear, user: IUser }) => {

    const [date, setDate] = useState<DateRange | undefined>()
    const [open, setOpen] = useState(false)
    const submittedInCurrentVisit = useRef(false)


    type initialType = {
        success: boolean,
        message: string
       
    }

    const initialState: initialType = {
        success: false,
        message: "",
      
    }
    const [state, formAction, isPending] = useActionState(rentGear, initialState)

    
    
    
    console.log(state);
    useEffect(() => {
        // Router navigation may restore a previous useActionState result. Only
        // show a toast for a form submission initiated during this visit.
        if (!submittedInCurrentVisit.current || !state.message) return

        if (state.success) {
            toast.success(state.message || ' Rented successfully')
            
        } else {
            toast.error(state.message || 'Gear renter failed')
           
        }

        submittedInCurrentVisit.current = false
        // submissionInProgress.current = false
        setOpen(false)


    }, [state])

    const totalDays = date?.from && date.to ? differenceInCalendarDays(date.to, date.from) : 0
    const totalPrice = totalDays * Number(gearData.price_per_day)
    return (
        <div>
            {
                !user.success ?
                    (<Button asChild className="h-11 rounded-full px-6 text-sm shadow-lg shadow-primary/20">
                        <Link href={`/login`}>Rent now</Link>
                    </Button>)
                    :
                    <Dialog open={open} onOpenChange={setOpen}>

                        <DialogTrigger asChild >
                            <Button
                                disabled={!gearData.is_available}
                                className="h-11 rounded-full px-6 text-sm shadow-lg shadow-primary/20"
                            >
                                Rent now
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-sm">

                            <form
                                action={formAction}
                                onSubmit={() => {
                                    submittedInCurrentVisit.current = true
                                }}
                            >
                                <DialogHeader>
                                    <DialogTitle className='text-center mb-5 font-bold text-xl'>Rent Gear</DialogTitle>
                                </DialogHeader>


                                <FieldGroup>
                                    <Field>
                                        <Label htmlFor="gear_id">Gear_ID</Label>
                                        <Input id="gear_id" name="gear_id" defaultValue={gearData.id} readOnly />
                                    </Field>

                                    <DateRangePeaker
                                        date={date}
                                        setDate={setDate}
                                    ></DateRangePeaker>


                                    <input
                                        type="hidden"
                                        name="startDate"
                                        value={
                                            date?.from
                                                ? format(date.from, "yyyy-MM-dd")
                                                : ""
                                        }
                                    />

                                    <input
                                        type="hidden"
                                        name="endDate"
                                        value={
                                            date?.to
                                                ? format(date.to, "yyyy-MM-dd")
                                                : ""
                                        }
                                    />



                                    <Field>
                                        <Label>
                                            Total Rental Cost
                                        </Label>

                                        <div className="flex h-10 items-center justify-between rounded-md border bg-muted/40 px-3">
                                            <span className="text-sm text-muted-foreground">
                                                Total
                                            </span>

                                            <span className="text-sm font-semibold">
                                                {totalPrice}$
                                            </span>
                                        </div>
                                    </Field>
                                </FieldGroup>



                                <DialogFooter className='mt-5'>
                                    <DialogClose asChild>
                                        <Button variant="outline">
                                            Cancel
                                        </Button>
                                    </DialogClose>

                                    <Button disabled={
                                        !date?.from || !date.to || isPending
                                    } type="submit">

                                        {
                                            isPending ? 'Submitting..' : 'Confirm'
                                        }
                                    </Button>

                                </DialogFooter>

                            </form>
                        </DialogContent>
                    </Dialog>
            }

        </div>
    );
};

export default GearDetailsPageButton;
