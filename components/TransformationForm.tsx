"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { object, z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { aspectRatioOptions, defaultValues, transformationTypes} from "@/constants"
import { CustomField } from "./CustomFielt"
import { useState } from "react"
import { Key } from "lucide-react"
import { AspectRatioKey } from "@/lib/utils"


export const formSchema = z.object({
   title: z.string(),
   aspectRatio: z.string(),
   color: z.string(),
   prompt: z.string(),
   publicId: z.string(),
})
const TransformationForm = ({action, data = null, type, userId, creditBalance}: TransformationFormProps) => {
   const transformationType = transformationTypes[type]

   const [Image, setImage] = useState(data)
   const [newTransformation , setTranformation] = useState<Transformations | null> (null)

  const initialValues = data && action === "Update" ? {
   title: data?.title,
   aspectRation: data?.aspectRation,
   color: data?.color,
   prompt: data?.prompt,
   publicId: data?.publicId,
  } : defaultValues
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: initialValues
})

function onSubmit(values: z.infer<typeof formSchema>) {
   console.log(values);
   
}

const onSeclectFieldHandeler = (value: string, onChengeField: (Value: string) => void ) => {
        
} 

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomField 
              control={form.control}
              name="title"
              formLabel="Image Title"
              className="w-full"
              render={({ field }) => <Input {...field} className="input-field" />}
              />
              {type === 'fill' && (
                <CustomField 
                control={form.control}
                name="aspectRatio"
                formLabel="Aspect Ratio"
                className="w-full"
                render={({field}) => (
              <Select
              onValueChange={(value) => {
                onSeclectFieldHandeler(value, field.onChange);
              }}
              >
                <SelectTrigger className="select-field">
                  <SelectValue placeholder="select size" />
                 </SelectTrigger>
                <SelectContent>
                    {Object.keys(aspectRatioOptions).map((Key) => (
                      <SelectItem  key={Key} value={Key} 
                      className="select-item"
                      >
                        {aspectRatioOptions[Key as AspectRatioKey].label}
                      </SelectItem>
                    ))}
                </SelectContent>
             </Select>

                )}
                />
              )}
        </form>
    </Form>
   
  )
}

export default TransformationForm  