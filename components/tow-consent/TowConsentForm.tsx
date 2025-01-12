"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TowConsentFormSchema } from "@/types/form";
import * as z from "zod";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the schema
const formSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  // driverName: z.string().min(1, "Driver name is required"),
  driverName: z.string({
    required_error: "Please select a driver",
  }),
  vehicle: z
    .object({
      year: z.string().min(1),
      make: z.string().min(1),
      model: z.string().min(1),
      color: z.string().min(1),
      plate: z.string().min(1),
      vin: z
        .string()
        .length(17)
        .regex(/^[A-HJ-NPR-Z0-9]+$/), // Regex to exclude I, O, Q
    })
    .nullable(),
  location: z
    .object({
      towedFrom: z.string().min(1),
      towedTo: z.string().min(1),
      startDateTime: z.coerce.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a valid date!",
      }),
    })
    .nullable(),
});

type FormData = z.infer<typeof formSchema>;
// type FormData = z.infer<typeof TowConsentFormSchema>;

export function TowConsentForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      invoiceNumber: "1",
      location: {
        startDateTime: new Date(), // Set default to current datetime
      },
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">2839219 ONTARIO INC O/A</h1>
            <h2 className="text-xl">MEGACITY TOWING</h2>
            <p>3030 MARKHAM RD. SCARBOROUGH, ON M1X 1M8</p>
            <p>Tel: 416-668-6868</p>
            <p>Email: info.gbrecoveryinc@gmail.com</p>
          </div>

          <h2 className="text-xl font-bold mb-4">CONSENT TO TOW / STORE</h2>

          <div className="mb-6">
            <h3 className="font-bold">Disclosure of Interest</h3>
            <p className="text-sm">
              Every tow truck driver, tow operator and vehicle storage operator
              who directly or indirectly has an interest in any of the following
              shall, in accordance with the regulations and with subsection (2),
              disclose to a person to whom the driver or operator is providing
              towing services or vehicle storage services, as the case may be,
              and to any other prescribed person, the nature and extent of the
              interest:
            </p>
            <ol className="list-decimal list-inside text-sm">
              <li>
                A vehicle storage yard facility to which the motor vehicle may
                be towed.
              </li>
              <li>
                Any other location to which the motor vehicle may be towed for
                repair, storage, appraisal, or other similar purpose.
              </li>
              <li>
                Any person or entity to whom the driver or operator refers the
                person to whom the driver or operator is providing the services
                2023, c. 9, Sched. 36, s. 20.
              </li>
            </ol>
          </div>

          <div className="mb-6">
            <h3 className="font-bold">Your Rights:</h3>
            <ol className="list-decimal list-inside text-sm">
              <li>
                Tow operators and tow truck drivers must follow the requirements
                of the Towing and Storage Safety and Enforcement Act, 2021...
              </li>
              <li>
                You have the right to,
                <ol className="list-[lower-alpha] list-inside ml-4">
                  <li>
                    decide who can tow your vehicle and where your vehicle will
                    be towed to;
                  </li>
                  <li>
                    receive and review the Consent to Tow form and Maximum Rate
                    Schedule before towing begins; do not sign a blank form;
                  </li>
                  <li>
                    receive an unaltered copy of the signed Consent to Tow form.
                  </li>
                  <li>
                    receive an itemized invoice before paying and get a receipt
                    when you pay;
                  </li>
                  <li>choose the payment method; and</li>
                  <li>
                    contact the Ministry of Transportation if you have any
                    concerns about the towing services you receive or the
                    conduct of the tow truck driver or tow operator.
                  </li>
                </ol>
              </li>
              <li>
                Tow truck drivers and tow operators must,
                <ol className="list-[lower-alpha] list-inside ml-4">
                  <li>
                    notify you if your vehicle is taken to a location that is
                    different from the location you identified;
                  </li>
                  <li>
                    not charge more than the rates published on the Government
                    of Ontario's website on the Towing and Storage Safety and
                    Enforcement Act, 2021;
                  </li>
                  <li>accept multiple forms of payment;</li>
                  <li>
                    not solicit you to consent to other services, including
                    vehicle storage services;
                  </li>
                  <li>
                    not refer you to any medical or legal services and can only
                    refer you to another towing, vehicle storage or vehicle
                    repair business if you request it; and
                  </li>
                  <li>
                    disclose any interest they have or benefit they may receive
                    from the referral at the time of making the referral.
                  </li>
                </ol>
              </li>
              <li>
                Tow truck drivers and tow operators are identified by name and
                certificate number on the Consent to Tow form and on the tow
                truck. Make sure the tow operator's name and certificate number
                on the tow truck matches the documentation.
              </li>
            </ol>
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
            {/* <FormField
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
            /> */}
            <FormField
              control={form.control}
              name="driverName"
              render={({ field }) => (
                <FormItem>
                  <Label>Driver Name</Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a driver" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith</SelectItem>
                      <SelectItem value="mike-johnson">Mike Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-2">TOWED VEHICLE INFORMATION</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="vehicle.year"
                render={({ field }) => (
                  <FormItem>
                    <Label>Year:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle.make"
                render={({ field }) => (
                  <FormItem>
                    <Label>Make:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle.model"
                render={({ field }) => (
                  <FormItem>
                    <Label>Model:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle.color"
                render={({ field }) => (
                  <FormItem>
                    <Label>Color:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle.vin"
                render={({ field }) => (
                  <FormItem>
                    <Label>VIN:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicle.plate"
                render={({ field }) => (
                  <FormItem>
                    <Label>Plate#:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-bold mb-2">TOWED LOCATION INFORMATION</h3>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location.towedFrom"
                render={({ field }) => (
                  <FormItem>
                    <Label>Tow From:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.towedTo"
                render={({ field }) => (
                  <FormItem>
                    <Label>Tow To:</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.startDateTime"
                render={({ field }) => (
                  <FormItem>
                    <Label>Time Of Authorization:</Label>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        {...field}
                        value={
                          field.value && !isNaN(field.value.getTime())
                            ? field.value.toISOString().slice(0, 16)
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? new Date(e.target.value) : null
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Signatures Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label>Tow Truck Driver Signature</Label>
              <div className="h-40 border border-gray-200 rounded-lg">
                <SignatureCanvas
                  canvasProps={{ className: "w-full h-full" }}
                  onEnd={() => {
                    // Get signature data and update form
                  }}
                />
              </div>
            </div>
            <div>
              <Label>Signature of Person Giving Consent to Tow & Store</Label>
              <div className="h-40 border border-gray-200 rounded-lg">
                <SignatureCanvas
                  canvasProps={{ className: "w-full h-full" }}
                  onEnd={() => {
                    // Get signature data and update form
                  }}
                />
              </div>
            </div>
          </div>

          {/* Rest of your form fields... */}

          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>
      </Form>
    </div>
  );
}
