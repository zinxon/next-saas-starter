import { useState } from "react";
import { TowConsentFormData } from "@/types/form";

const initialFormState: TowConsentFormData = {
  invoiceNumber: "",
  driverName: "",
  driverCertificate: "",
  vehicle: {
    year: "",
    make: "",
    model: "",
    color: "",
    plate: "",
    vin: "",
    odometer: "",
  },
  location: {
    towedFrom: "",
    towedTo: "",
    startDateTime: "",
    endDateTime: "",
  },
  consent: {
    name: "",
    phone: "",
    signature: null,
  },
  driverSignature: null,
};

export function useTowConsentForm() {
  const [formData, setFormData] = useState<TowConsentFormData>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Handle nested objects
    if (name.includes(".")) {
      const [section, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof TowConsentFormData],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSignatureChange = (
    type: "consent" | "driver",
    signature: string
  ) => {
    if (type === "consent") {
      setFormData((prev) => ({
        ...prev,
        consent: { ...prev.consent, signature },
      }));
    } else {
      setFormData((prev) => ({ ...prev, driverSignature: signature }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // TODO: Implement form submission
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSignatureChange,
    handleSubmit,
  };
}
