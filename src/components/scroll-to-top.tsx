"use client";
import { ChevronUpCircle } from "lucide-react";
import React from "react";

export const ScrollToTop = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleTop}
      className="fixed bottom-5 right-5 text-green-600"
    >
      <ChevronUpCircle className="w-[50px] h-[50px]" />
    </button>
  );
};
