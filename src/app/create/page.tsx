"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

const formSchema = z.object({
  prompt: z.string().min(7,{message:"Prompt must bbe atleast 7 chars long"}),
})



export default function Create(){
    const [outputImg,setOutputImg] = useState<string|null>(null)
    const [prompt,setPrompt] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }



  return (
    <div  
    className="w-full p-3 h-dvh flex justify-start items-center pt-[72px] flex-col">
        <div
         className="w-full border border-red-500 p-3">
            <h1 className="text-center font-bold text-white text-4xl">Create</h1>
            <p className="text-white/60 text-center mt-4">
                Ever had a vision in mind but couldn’t quite capture it? PIXEL is here to change that. Just type a description, and our advanced AI transforms your text into breathtaking, high-quality visuals. No design skills required—just pure imagination.
            </p>
        </div>
        <div className="flex border border-green-500 w-full gap-3 h-full">
            <div className="__form flex-[2] gap-2 flex justify-center items-start flex-col">
                <p className="text-sm text-left text-white/80">
                    Type your prompt to create any image
                </p>
                
                <div className="flex gap-2">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex gap-2">
                        <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className="w-full max-w-[70%]">
                            <FormControl>
                                    <input 
                                    type="text" 
                                    placeholder="a horse swimming" 
                                    className="w-full translate-all" {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit">Generate</Button>
                    </form>
                    </Form>
                </div>
            </div>
            <div className="__output flex-[1] bg-white/5 rounded-lg"></div>
        </div>
    </div>
  )
}

