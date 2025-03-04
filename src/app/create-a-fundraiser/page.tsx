"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

export default function CreateAFundraiser() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [submissionMessage, setSubmissionMessage] = useState("");

  const onSubmit = (data) => {
    // Basic validation (react-hook-form handles required)
    if (errors.name || errors.email || errors.phone || errors.description) {
      return; // Stop submission if there are errors.
    }

    console.log(data);
    setSubmissionMessage(
      "Thank you for applying. We will reach out to you after 2-3 working days."
    );
  };

  return (
    <main className="min-h-screen flex justify-center flex-col items-center">
      <Navbar hideCreateCampaign hideCampaigns hidePolicies />
      <div className="w-full flex flex-col items-center container py-10 px-4">
        <h1 className="text-4xl mb-5">Applying Form</h1>
        <div className="w-full">
          <Card className="mx-auto pt-5 max-w-lg">
            <CardContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message.toString()}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhon@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message.toString()}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Phone</Label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                    }}
                    render={({ field }) => (
                      <PhoneInput
                        placeholder="Enter a phone number"
                        {...field}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message.toString()}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Brief Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us a little about why you are looking to raise funds"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm">
                      {errors.description.message.toString()}
                    </p>
                  )}
                </div>
                <Button
                  className="bg-green-600 w-full text-white"
                  type="submit"
                >
                  Submit
                </Button>
                {submissionMessage && (
                  <p className="text-green-600 mt-4">{submissionMessage}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}