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
    <div className="min-h-screen bg-gray-50 py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <Card className="p-6">
          {/* Company Header */}
          <div className="text-center mb-6 space-y-1">
            <h1 className="text-2xl font-bold">2839219 ONTARIO INC O/A</h1>
            <h2 className="text-xl">MEGACITY TOWING</h2>
            <p className="text-sm text-gray-600">
              3030 MARKHAM RD. SCARBOROUGH, ON M1X 1M8
            </p>
            <p className="text-sm text-gray-600">Tel: 647-556-5326</p>
            <p className="text-sm text-gray-600">
              Email: info.gbrecoveryinc@gmail.com
            </p>
          </div>

          {/* Basic Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="invoiceNumber">Invoice #</Label>
              <Input
                type="text"
                id="invoiceNumber"
                name="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={handleInputChange}
              />
            </div>
            {/* Add other basic info fields */}
          </div>

          {/* Vehicle Info Section */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-lg">Vehicle Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(formData.vehicle).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={`vehicle.${key}`}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Label>
                  <Input
                    type="text"
                    id={`vehicle.${key}`}
                    name={`vehicle.${key}`}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Location Info Section */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-lg">Location Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData.location).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={`location.${key}`}>
                    {key
                      .split(/(?=[A-Z])/)
                      .join(" ")
                      .charAt(0)
                      .toUpperCase() +
                      key
                        .split(/(?=[A-Z])/)
                        .join(" ")
                        .slice(1)}
                  </Label>
                  <Input
                    type={key.includes("DateTime") ? "datetime-local" : "text"}
                    id={`location.${key}`}
                    name={`location.${key}`}
                    value={value}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Signatures Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label>Customer Signature</Label>
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
              <Label>Driver Signature</Label>
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
            Generate Consent Form
          </Button>
        </Card>
      </form>
    </div>
  );
}
