"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Organizer = () => {
  return (
    <div className="border-y pb-8 pt-7 flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Organizer</h2>

      <div className="flex gap-4 pt-7">
        <Image
          className="w-10 h-10 rounded-full"
          src="https://images.gofundme.com/qHJ-ziLZSXPfibSDu1yCcsBZ8vo=/128x128/https://www.gofundme.com/person/profiles/df5fffa92b0f4cd4bbd825baa62d2738_edited_photo_1735957013454.jpeg"
          width={40}
          height={40}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">Jan Fiegert</h3>
            <p className="text-sm">Organizer</p>
            <p className="text-sm">Cologne, Nordrhein-Westfalen</p>
          </div>
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </div>
  );
};
