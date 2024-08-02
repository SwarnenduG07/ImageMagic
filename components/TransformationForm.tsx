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
const TransformationForm = ({action, data = null, type, userId, creditBalance ,config = null}: TransformationFormProps) => {
   const transformationType = transformationTypes[type]

   const [Image, setImage] = useState(data)
   const [newTransformation , setTranformation] = useState<Transformations | null> (null)
   const [isSubmiting , setisSubmiting] = useState (false)
   const [isTransformimg, setIstransforming] = useState(false)
   const [transformationConfig, settransformationConfig] = useState(config);

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

const onInputChangeHandler = (fieldname: string, value: string, type: string, onChengeField: (value: string) => void ) => {

  
}
const onTransformHandeler = () => {

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
              {(type === "remove" || type === "recolor") && (
                 <div className="prompt-field">
                      <CustomField 
                      control={form.control}
                      name="prompt"
                      formLabel={
                          type === 'remove' ? 'Object to remove' : 'object to recolor'
                      }
                      className="w-full"
                      render={(({field}) => (
                        <Input value={field.value} className="input-field" onChange={(evt) => onInputChangeHandler(
                            'prompt',
                            evt.target.value,
                            type,
                            field.onChange
                          )}
                        />
                      ))}
                      />
                      {type === 'recolor' && (
                        <CustomField 
                        control={form.control}
                        name="color"
                        formLabel="Replacement Color"
                        className="w-full"
                        render={({field}) => (
                          <Input value={field.value} className="input-field" onChange={(evt) => onInputChangeHandler(
                            'color',
                            evt.target.value,
                            'recolor',
                            field.onChange
                          )}
                          
                          />
                        )}
                        />
                      )}
                 </div>
              )}
                <div className="flex flex-col gap-4">
                   <Button type="button"
                    className="submit-button capitalize" 
                   disabled={isTransformimg || newTransformation === null}
                   onClick={onTransformHandeler}
                     >
                      {isTransformimg ? "Transforming..." : "Apply Transformation"}
                     </Button>
               
                  <Button 
                 type="submit"
                 className="submit-button capitalize" 
                 disabled={isSubmiting}
                 >{isSubmiting ? "Submitting..." : "Save Image"}</Button> 
              </div>
        </form>
    </Form>
   
  )
}

export default TransformationForm  