"use client";

import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";
import { FormData } from "../QualificationForm";

interface BusinessTypeStepProps {
  register: UseFormRegister<FormData>;
  watch: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
}

const businessTypes = [
  {
    value: "coaching",
    label: "Coaching / Consulting",
    description: "1-on-1 or group coaching, consulting services",
    icon: "🎯",
  },
  {
    value: "agency",
    label: "Agency / Done-for-You",
    description: "Marketing, design, development, or other agency services",
    icon: "🏢",
  },
  {
    value: "ecommerce",
    label: "E-commerce / Products",
    description: "Physical or digital products sold online",
    icon: "🛒",
  },
  {
    value: "saas",
    label: "SaaS / Software",
    description: "Software as a service or tech products",
    icon: "💻",
  },
  {
    value: "services",
    label: "Professional Services",
    description: "Legal, accounting, healthcare, or other professional services",
    icon: "📋",
  },
  {
    value: "other",
    label: "Other",
    description: "Something else entirely",
    icon: "✨",
  },
];

export default function BusinessTypeStep({ register, watch, errors }: BusinessTypeStepProps) {
  const selectedType = watch("businessType");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          What type of business do you run?
        </h2>
        <p className="text-muted">
          This helps us understand your sales context better.
        </p>
      </div>

      <div className="grid gap-3">
        {businessTypes.map((type) => (
          <label
            key={type.value}
            className={`relative flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              selectedType === type.value
                ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                : "border-border bg-card hover:border-accent/50 hover:bg-accent/5"
            }`}
          >
            <input
              type="radio"
              value={type.value}
              {...register("businessType", { required: "Please select a business type" })}
              className="sr-only"
            />
            <span className="text-2xl">{type.icon}</span>
            <div className="flex-1">
              <span className="block font-semibold text-foreground">{type.label}</span>
              <span className="block text-sm text-muted">{type.description}</span>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedType === type.value
                  ? "border-accent bg-accent"
                  : "border-border"
              }`}
            >
              {selectedType === type.value && (
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

      {errors.businessType && (
        <p className="text-sm text-error text-center">{errors.businessType.message}</p>
      )}
    </div>
  );
}

