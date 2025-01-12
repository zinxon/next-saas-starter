'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

// Define the schema
const formSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  driverName: z.string().min(1, 'Driver name is required'),
  driverCertificate: z.string().min(1, 'Driver certificate is required'),
  // ... rest of your schema
})

type FormData = z.infer<typeof formSchema>

export default function TowConsentForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: '',
      driverName: '',
      driverCertificate: '',
      // ... rest of your default values
    }
  })

  const onSubmit = async (data: FormData) => {
    try {
      console.log('Form submitted:', data)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">2839219 ONTARIO INC O/A</h1>
            <h2 className="text-xl">GB RECOVERY</h2>
            <p>3030 MARKHAM RD. SCARBOROUGH, ON M1X 1M8</p>
            <p>Tel: 647-556-5326</p>
            <p>Email: info.gbrecoveryinc@gmail.com</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <FormField
              control={form.control}
              name="invoiceNumber"
              render={({ field }) => (
                <FormItem>
                  <Label>Invoice #</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="driverName"
              render={({ field }) => (
                <FormItem>
                  <Label>Driver Name</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="driverCertificate"
              render={({ field }) => (
                <FormItem>
                  <Label>Driver's Certificate #</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Rest of your form fields... */}
          
          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>
      </Form>
    </div>
  )
}
