import { z } from "zod";

export const TowConsentFormSchema = z.object({
  invoiceNumber: z.string().min(1),
  driverName: z.string().min(1, "Driver name is required"),
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
      odometer: z.string().min(1),
    })
    .nullable(),
  location: z
    .object({
      towedFrom: z.string().min(1),
      towedTo: z.string().min(1),
      startDateTime: z.string().min(1),
      endDateTime: z.string().min(1),
    })
    .nullable(),
  consent: z
    .object({
      name: z.string().min(1),
      phone: z.string().min(1),
      signature: z.nullable(z.string()),
    })
    .nullable(),
  driverSignature: z.nullable(z.string()),
});

// const vinValidationResult =
//   TowConsentFormSchema.vehicle.vin.safeParse("1HGCM82633A123456");
// if (vinValidationResult.success) {
//   console.log("Valid VIN");
// } else {
//   console.log("Invalid VIN:", vinValidationResult.error);
// }

export interface TowConsentFormData {
  invoiceNumber: string;
  driverName: string;
  driverCertificate: string;
  vehicle: {
    year: string;
    make: string;
    model: string;
    color: string;
    plate: string;
    vin: string;
    odometer: string;
  };
  location: {
    towedFrom: string;
    towedTo: string;
    startDateTime: string;
    endDateTime: string;
  };
  consent: {
    name: string;
    phone: string;
    signature: string | null;
  };
  driverSignature: string | null;
}
