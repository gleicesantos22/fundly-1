"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { countryCodes } from "@/lib/countries";

export default function CheckoutForm({
  donationAmount,
}: {
  donationAmount: number;
}) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: data.cardName,
        email: data.email,
        address: { postal_code: data.postalCode, country: data.country.alpha2 },
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      try {
        const response = await fetch(
          "http://localhost:1234/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentMethodId: paymentMethod.id,
              donationAmount: donationAmount,
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              cardName: data.cardName,
              country: data.country,
              postalCode: data.postalCode,
            }),
          }
        );

        if (response.ok) {
          console.log("Payment successful!");
        } else {
          const errorData = await response.json();
          setError(errorData.error || "Payment failed.");
        }
      } catch (err) {
        console.log(err);
        setError("An unexpected error occurred.");
      } finally {
        setProcessing(false);
      }
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  console.log({ processing, stripe, elements, donationAmount, isValid });

  return (
    <div className="w-full mx-auto py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
            })}
            type="email"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.email.message.toString()}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              type="text"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.firstName.message.toString()}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              type="text"
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">
                {errors.lastName.message.toString()}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Controller
            name="country"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Select onValueChange={onChange} defaultValue={value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes?.map(({ code, name }) => {
                      return (
                        <SelectItem key={code} value={code}>
                          {name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
          {errors.country && (
            <p className="text-red-400 text-xs mt-1">
              {errors.country.message.toString()}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            id="postalCode"
            {...register("postalCode", { required: "Postal code is required" })}
            type="text"
          />
          {errors.postalCode && (
            <p className="text-red-400 text-xs mt-1">
              {errors.postalCode.message.toString()}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="cardName">Card Name</Label>
          <Input
            id="cardName"
            {...register("cardName", { required: "Card name is required" })}
            type="text"
          />
          {errors.cardName && (
            <p className="text-red-400 text-xs mt-1">
              {errors.cardName.message.toString()}
            </p>
          )}
        </div>
        <div>
          <h3 className="text-sm font-medium leading-none mb-2">
            Card Details
          </h3>
          <div className="rounded-md border border-input px-3 py-2.5 text-base shadow-sm">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}

        <div className="flex flex-col gap-5 py-5">
          <span className="text-base font-semibold">Your donation</span>
          <div className="flex justify-between border-b pb-5">
            <span>Your donation</span>
            <span>{`$${donationAmount}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Total due today</span>
            <span>{`$${donationAmount}`}</span>
          </div>
        </div>
        <Button
          type="submit"
          variant="primary"
          size="full"
          disabled={
            processing || !stripe || !elements || !donationAmount || !isValid
          }
        >
          {processing ? "Processing..." : "Donate Now"}
        </Button>
      </form>
    </div>
  );
}
