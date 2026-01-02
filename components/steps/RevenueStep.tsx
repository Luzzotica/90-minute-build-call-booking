"use client";

import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";
import { FormData } from "../QualificationForm";

interface RevenueStepProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
}

const revenueRanges = [
  {
    value: "under-5k",
    label: "Under $5,000/month",
    qualified: false,
  },
  {
    value: "5k-10k",
    label: "$5,000 - $10,000/month",
    qualified: false,
  },
  {
    value: "10k-25k",
    label: "$10,000 - $25,000/month",
    qualified: true,
  },
  {
    value: "25k-50k",
    label: "$25,000 - $50,000/month",
    qualified: true,
  },
  {
    value: "50k-plus",
    label: "$50,000+/month",
    qualified: true,
  },
];

export default function RevenueStep({ register, watch, errors }: RevenueStepProps) {
  const selectedRevenue = watch("revenue");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          What&apos;s your current monthly revenue?
        </h2>
        <p className="text-muted">
          This helps us ensure we can provide the most value for where you are in your business.
        </p>
      </div>

      <div className="grid gap-3">
        {revenueRanges.map((range) => (
          <label
            key={range.value}
            className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              selectedRevenue === range.value
                ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                : "border-border bg-card hover:border-accent/50 hover:bg-accent/5"
            }`}
          >
            <input
              type="radio"
              value={range.value}
              {...register("revenue", { required: "Please select your revenue range" })}
              className="sr-only"
            />
            <span className="font-semibold text-foreground">{range.label}</span>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedRevenue === range.value
                  ? "border-accent bg-accent"
                  : "border-border"
              }`}
            >
              {selectedRevenue === range.value && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </label>
        ))}
      </div>

      {errors.revenue && (
        <p className="text-sm text-error text-center">{errors.revenue.message}</p>
      )}

      <p className="text-sm text-muted text-center mt-4">
        Your information is kept confidential and only used to prepare for our call.
      </p>
    </div>
  );
}

export function isQualified(revenue: string | undefined): boolean {
  const qualifiedRanges = ["10k-25k", "25k-50k", "50k-plus"];
  return revenue ? qualifiedRanges.includes(revenue) : false;
}

