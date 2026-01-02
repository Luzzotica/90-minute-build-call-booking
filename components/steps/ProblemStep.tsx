"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../QualificationForm";

interface ProblemStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function ProblemStep({ register, errors }: ProblemStepProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          What does your prospect need to see before they say yes?
        </h2>
        <p className="text-muted">
          We&apos;ll build a tool that shows them exactly this — before they buy.
        </p>
      </div>

      <div>
        <textarea
          {...register("problem", {
            required: "Please describe what your prospects need to see before they buy from you.",
            minLength: {
              value: 20,
              message: "Please provide a bit more detail (at least 20 characters)",
            },
          })}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
          placeholder="Example: They need to see the countertop in their kitchen before choosing one. They need to see how the software will impact their revenue..."
        />
        {errors.problem && (
          <p className="mt-1 text-sm text-error">{errors.problem.message}</p>
        )}
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Examples
        </h3>
        <ul className="text-sm text-muted space-y-1">
          <li>• &quot;They need to see their ROI calculated with their actual numbers&quot;</li>
          <li>• &quot;They need to visualize the finished product in their space&quot;</li>
          <li>• &quot;They need to see the time they could spend with family instead of working&quot;</li>
        </ul>
      </div>
    </div>
  );
}

