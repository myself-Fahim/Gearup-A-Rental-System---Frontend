"use client"
import { ICategory } from "@/app/(publicGroup)/_types/gear.type"
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
import { Plus } from "lucide-react"
import { useActionState, useEffect, useRef, useState } from "react"
import { createGear } from "../_actions/provider.action"
import { toast } from "sonner"

export function AddGearModal({ categoriesData }: { categoriesData: ICategory[] }) {

    type initialType = {
        success: boolean,
        message: string
    }
    const initialState: initialType = {
        success: false,
        message: ''
    }
    const [state, formAction, isPending] = useActionState(createGear, initialState)
    const showToast = useRef(false)
    const [open,setOpen] = useState(false)



    useEffect(() => {
        if(!showToast.current || !state.message)return
        if(state.success){
            toast.success(state.message || 'Gear create successfully')
        }
        if(!state.success){
            toast.error(state.message || 'Failed to create gear')
        }

        showToast.current = false
        setOpen(false)

    }, [state])


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="group flex items-center  px-3 py-4 rounded-sm  text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95">
                    <Plus className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
                    <span>Add Gear</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md px-5">
                <form onSubmit={()=>{showToast.current=true}} action={formAction}>
                    <DialogHeader className="mb-5">
                        <DialogTitle className="text-center font-bold">Create Gear</DialogTitle>
                        <DialogDescription className="text-center">
                            Provide the following information to create the gear
                        </DialogDescription>
                    </DialogHeader>



                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name">Gear Name</Label>
                            <Input className="bg-primary/20" id="name" name="name" placeholder="Enter name" />
                        </Field>


                        <Field>
                            <Label htmlFor="category">Category</Label>
                            <Select name="category">
                                <SelectTrigger className="bg-primary/20 w-full" id="category">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categoriesData?.map((category: ICategory) => (
                                        <SelectItem key={category.id} value={category.id}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </Field>


                        <Field>
                            <Label htmlFor="price">Price Per Day</Label>
                            <Input className="bg-primary/20" id="price" name="price" placeholder="Enter price" />
                        </Field>
                        <Field>
                            <Label htmlFor="image">Gear Image</Label>
                            <Input className="bg-primary/20" id="image" name="image" placeholder="Enter url" />
                        </Field>
                        <Field>
                            <Label htmlFor="stock">Available Stock</Label>
                            <Input className="bg-primary/20" id="stock" name="stock" placeholder="Enter stock" />
                        </Field>

                    </FieldGroup>


                    <DialogFooter className="mt-7">

                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                        <Button type="submit">
                            {isPending ? 'Creating..' : 'Create'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
