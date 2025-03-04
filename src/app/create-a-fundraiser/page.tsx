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
// import { siteData } from "@/lib/site.config";

export default function CreateAFundraiser() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                    required
                    {...register("name", { required: "Name is required" })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jhon@gmail.com"
                    required
                    {...register("email")}
                  />
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Brief Description</Label>
                  <Textarea
                    id="description"
                    required
                    placeholder="Tell us a little about why you are looking to raise funds"
                    {...register("description")}
                  />
                </div>
                <Button
                  className="bg-green-600 w-full text-white"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
