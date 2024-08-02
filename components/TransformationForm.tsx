"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
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
import { Input } from "@/components/ui/input"
import { defaultValues } from "@/constants"


const formSchema = z.object({
   title: z.string(),
   aspectRatio: z.string(),
   color: z.string(),
   prompt: z.string(),
   publicId: z.string(),
})
const TransformationForm = ({action, data = null}: TransformationFormProps) => {

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

  return (
      // <Form {...form}>
      //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      //     <FormField
      //       control={form.control}
      //       name="Username"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Username</FormLabel>
      //           <FormControl>
      //             <Input placeholder="Prompt" {...field} />
      //           </FormControl>
      //           <FormDescription>
      //             This is your public display name.
      //           </FormDescription>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <Button type="submit">Submit</Button>
      //   </form>
      // </Form>
      <div>
        hi tere
      </div>
  )
}

export default TransformationForm  