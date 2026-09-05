"use client"
import React, { useActionState, useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit } from 'lucide-react';
import { TGear } from '@/app/(publicGroup)/_types/gear.type';
import { toast } from 'sonner';
import { updateGear } from '../_actions/provider.action';


const EditGearModal = ({ gear }: { gear: TGear }) => {
       type initialType = {
        success: boolean,
        message: string
    }
    const initialState: initialType = {
        success: false,
        message: ''
    }
    const [state, formAction, isPending] = useActionState(updateGear, initialState)
    const showToast = useRef(false)
    const [open,setOpen] = useState(false)



    useEffect(() => {
        if(!showToast.current || !state.message)return
        if(state.success){
            toast.success(state.message || 'Gear update successfully')
        }
        if(!state.success){
            toast.error(state.message || 'Failed to update gear')
        }

        showToast.current = false
        setOpen(false)

    }, [state])
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    type="button"
                    title="Update gear"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                    <Edit className="h-4 w-4" />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md px-5">
                <form onSubmit={()=>{showToast.current=true}} action={formAction}>
                    <DialogHeader className="mb-5">
                        <DialogTitle className="text-center font-bold">Update Gear</DialogTitle>
                        <DialogDescription className="text-center">
                            Provide the following information to update the gear
                        </DialogDescription>
                    </DialogHeader>



                    <FieldGroup>

                        <Input className='hidden' name='id' value={gear.id} readOnly/>
                        <Field>
                            <Label htmlFor="price">Price Per Day</Label>
                            <Input defaultValue={gear.price_per_day} className="bg-primary/20" id="price" name="price" />
                        </Field>


                        <Field>
                            <Label htmlFor="status">Status</Label>

                            <Select
                                defaultValue={gear.is_available ? "true" : "false"}
                                name="status"
                            >
                                <SelectTrigger className="bg-primary/20 w-full" id="status">
                                    <SelectValue />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="true">Active</SelectItem>
                                    <SelectItem value="false">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </Field>


                        <Field>
                            <Label htmlFor="stock">Available Stock</Label>
                            <Input defaultValue={gear.available_stock} className="bg-primary/20" id="stock" name="stock" />
                        </Field>
                    </FieldGroup>


                    <DialogFooter className="mt-7">

                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button type="submit">
                           {isPending ? 'Updating..' : 'Update'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditGearModal;