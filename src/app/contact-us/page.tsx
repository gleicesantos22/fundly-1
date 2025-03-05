"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissionMessage, setSubmissionMessage] = useState("");

  const onSubmit = (data) => {
    // Basic validation (react-hook-form handles required)
    if (errors.name || errors.email || errors.message) {
      return; // Stop submission if there are errors
    }

    console.log(data);
    setSubmissionMessage(
      "Thank you for contacting us. We will reach out to you soon!"
    );
  };

  return (
    <main className="min-h-screen flex justify-center flex-col items-center">
      <Navbar hideCampaigns />
      <div className="w-full flex flex-col items-center container py-10 px-4">
        <h1 className="text-4xl mb-5">Contact Us</h1>
        <div className="w-full">
          <Card className="mx-auto max-w-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">
                Get in touch with our team
              </CardTitle>
            </CardHeader>
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
                    {...register("name")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    {...register("email")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Enter your message"
                    {...register("message")}
                  />
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