"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { orderDataType } from "../../_types/dashboard.type"
import { useActionState, useEffect, useState } from "react"
import { createReview } from "../_actions/dashboardAction"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const ratings = ['1', '2', '3', '4', '5']



export function ReviewModal({ order }: { order: orderDataType }) {


    const [state, formAction, isPending] = useActionState(createReview, null)
    const [open,setOpen] = useState(false)
    const router = useRouter()

  

    useEffect(() => {
        if (!state ) return

        if (state.success) {
            toast.success(state.message || 'Review create successfully')
            setOpen(false)
            router.push('/dashboard/my-order')
        }

        if (!state.success) {
            toast.error('Review creation failed')
            setOpen(false)
        }

        // showToast.current = false


    },[state,router])




    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button

                    className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                >
                    Review
                </button>
            </DialogTrigger>


            <DialogContent className="sm:max-w-sm">
                <form  action={formAction}>
                    <DialogHeader>
                        <DialogTitle className="text-center font-bold mb-2">Create Review</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>


                        <Field className="hidden">
                            <Label htmlFor="gear_id"></Label>
                            <Input id="gear_id" name="gear_id" defaultValue={order.gear_id} />
                        </Field>


                        <Field>
                            <Label>Rating</Label>
                            <Select name="rating" required>

                                <SelectTrigger className="w-45">
                                    <SelectValue placeholder="Select rating" />
                                </SelectTrigger>

                                <SelectContent>

                                    <SelectGroup>
                                        {
                                            ratings.map(rating => <SelectItem key={rating} value={rating}>{rating}</SelectItem>)
                                        }
                                    </SelectGroup>

                                </SelectContent>

                            </Select>
                        </Field>

                        <Field>
                            <Label htmlFor="comment">Comment</Label>
                            <Input id="comment" name="comment" placeholder="Write your review" />
                        </Field>

                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        {
                            isPending ? <Button className="cursor-pointer" type="submit">Submitting...</Button> : <Button className="cursor-pointer" type="submit">Confirm</Button>
                        }

                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
