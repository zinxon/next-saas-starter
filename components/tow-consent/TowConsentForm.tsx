"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import SignatureCanvas from "react-signature-canvas";
import { useTowConsentForm } from "@/hooks/useTowConsentForm";

export function TowConsentForm() {
  const { formData, handleInputChange, handleSignatureChange, handleSubmit } =
    useTowConsentForm();

  return (
    <form
      onSubmit={handleSubmit}
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
          Every tow truck driver, tow operator and vehicle storage operator who
          directly or indirectly has an interest in any of the following shall,
          in accordance with the regulations and with subsection (2), disclose
          to a person to whom the driver or operator is providing towing
          services or vehicle storage services, as the case may be, and to any
          other prescribed person, the nature and extent of the interest:
        </p>
        <ol className="list-decimal list-inside text-sm">
          <li>
            A vehicle storage yard facility to which the motor vehicle may be
            towed.
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
            Tow operators and tow truck drivers must follow the requirements of
            the Towing and Storage Safety and Enforcement Act, 2021...
          </li>
          <li>
            You have the right to,
            <ol className="list-[lower-alpha] list-inside ml-4">
              <li>
                decide who can tow your vehicle and where your vehicle will be
                towed to;
              </li>
              <li>
                receive and review the Consent to Tow form and Maximum Rate
                Schedule before towing begins; do not sign a blank form;
              </li>
              <li>
                receive an unaltered copy of the signed Consent to Tow form.
              </li>
              <li>
                receive an itemized invoice before paying and get a receipt when
                you pay;
              </li>
              <li>choose the payment method; and</li>
              <li>
                contact the Ministry of Transportation if you have any concerns
                about the towing services you receive or the conduct of the tow
                truck driver or tow operator.
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
                not charge more than the rates published on the Government of
                Ontario's website on the Towing and Storage Safety and
                Enforcement Act, 2021;
              </li>
              <li>accept multiple forms of payment;</li>
              <li>
                not solicit you to consent to other services, including vehicle
                storage services;
              </li>
              <li>
                not refer you to any medical or legal services and can only
                refer you to another towing, vehicle storage or vehicle repair
                business if you request it; and
              </li>
              <li>
                disclose any interest they have or benefit they may receive from
                the referral at the time of making the referral.
              </li>
            </ol>
          </li>
          <li>
            Tow truck drivers and tow operators are identified by name and
            certificate number on the Consent to Tow form and on the tow truck.
            Make sure the tow operator's name and certificate number on the tow
            truck matches the documentation.
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="invoiceNumber">Invoice #:</Label>
          <Input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="driverName">Driver Name:</Label>
          <Input
            type="text"
            id="driverName"
            name="driverName"
            value={formData.driverName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">TOWED VEHICLE INFORMATION</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="year">Year:</Label>
            <Input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="make">Make:</Label>
            <Input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="model">Model:</Label>
            <Input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="color">Color:</Label>
            <Input
              type="text"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="plate">Plate:</Label>
            <Input
              type="text"
              id="plate"
              name="plate"
              value={formData.plate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="vin">VIN:</Label>
            <Input
              type="text"
              id="vin"
              name="vin"
              value={formData.vin}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="odometer">Odometer:</Label>
            <Input
              type="text"
              id="odometer"
              name="odometer"
              value={formData.odometer}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">TOWED LOCATION INFORMATION</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="towedFrom">Towed From:</Label>
            <Input
              type="text"
              id="towedFrom"
              name="towedFrom"
              value={formData.towedFrom}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="towedTo">Towed To:</Label>
            <Input
              type="text"
              id="towedTo"
              name="towedTo"
              value={formData.towedTo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="startDateTime">Time Of Authorization:</Label>
            <Input
              type="datetime-local"
              id="startDateTime"
              name="startDateTime"
              value={formData.startDateTime}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold mb-2">DISCLOSURE OF INTEREST:</h3>
        <ol className="list-decimal list-inside text-sm">
          <li>MEGACITY TOWING operates vehicle storage facilities.</li>
          <li>
            MEGACITY TOWING DOES NOT have any interest in any other locations to
            which the motor vehicle may be towed for repair, storage, appraisal
            or other similar purpose.
          </li>
          <li>
            MEGACITY TOWING DOES NOT have an interest in any person or entity to
            whom the driver or operator refers to you.
          </li>
        </ol>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="consentName">
            Name of Person Giving Consent to Tow & Store:
          </Label>
          <Input
            type="text"
            id="consentName"
            name="consentName"
            value={formData.consentName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="consentPhone">Phone Number:</Label>
          <Input
            type="tel"
            id="consentPhone"
            name="consentPhone"
            value={formData.consentPhone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <p className="text-sm font-bold mb-4">
        You MUST be informed of your rights before you sign this Consent to Tow
        & Store Form.
      </p>

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

      <Button type="submit" className="w-full">
        Submit Form
      </Button>
    </form>
  );
}
